<template>
  <div class="address-edit-box">
    <s-header :name="type === 'add' ? '新增地址': '修改地址'"></s-header>
    <van-address-edit
      :address-info="AddressInfo"
      :area-list="areaList"
      :show-delete="type === 'edit'"
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader.vue'
import { onMounted, reactive, toRefs } from 'vue'
import { tdist } from '@/utils/utils.js'
import { addAddress, editAddress, deleteAddress, getAddressDetail } from '@/service/address.js'
import { Toast } from 'vant'
import { useRouter, useRoute } from 'vue-router'
export default {
  components: {
    sHeader
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      areaList: {
        province_list: {},
        city_list: {},
        county_list: {}
      },
      type: 'add',
      AddressInfo: {},
      addressId: ''
    })

    onMounted(async () => {
      // 生成省市区选择列表
      let _provice_list = {}
      let _city_list = {}
      let _county_list = {}
      tdist.getLev1().forEach(p => {
        _provice_list[p.id] = p.text
        
        tdist.getLev2(p.id).forEach(c => {
          _city_list[c.id] = c.text

          tdist.getLev3(c.id).forEach(q => _county_list[q.id] = q.text)
        })
      })
      state.areaList.province_list = _provice_list
      state.areaList.city_list = _city_list
      state.areaList.county_list = _county_list


      let addressId = route.query.addressId
      state.addressId = addressId
      let type = route.query.type
      state.type = type
      if (addressId) {
        let { data } = await getAddressDetail(addressId)
        let {userName: name, userPhone: tel, provinceName: province, cityName: city, 
                             regionName: county, detailAddress: addressDetail, defaultFlag: isDefault} = data
        state.AddressInfo = {name, tel, province, city, county, addressDetail, isDefault}
        state.AddressInfo.isDefault = Boolean(state.AddressInfo.isDefault)
        let areaCode = ''
        let cityCode = Object.entries(state.areaList.city_list).find(item => item[1] == city)[0].slice(0, 4)
        let countyCodeArr = Object.entries(state.areaList.county_list).filter(item => item[1] == county)
        areaCode = countyCodeArr.find((item) => item[0].slice(0, 4) == cityCode)[0]
        state.AddressInfo.areaCode = areaCode
      }
    })

    const onSave = async (content) => {
      // console.log(content);
      const params = {
        userName: content.name,
        userPhone: content.tel,
        provinceName: content.province,
        cityName: content.city,
        regionName: content.county,
        detailAddress: content.addressDetail,
        defaultFlag: content.isDefault ? 1 : 0
      }
      if (state.type == 'edit') {
        params['addressId'] = state.addressId
      }
      // 新增或修改
      await state.type == 'add' ? addAddress(params) : editAddress(params)
      Toast('保存成功')
      setTimeout(() => {
        router.back()
      }, 1000)
    }

    const onDelete = async () => {
        await deleteAddress(state.addressId)
        Toast('删除成功')
        setTimeout(() => {
          router.back()
        }, 1000)
    }

    return {
      ...toRefs(state),
      onSave,
      onDelete
    }
  }
}
</script>

<style lang="less">
@import '../common/style/mixin';
.edit {
  .van-field__body {
    textarea {
      height: 26px!important;
    }
  }
}
.address-edit-box {
  padding-top: 44px;
  .van-address-edit {
    .van-button--danger {
      background: @primary;
      border-color: @primary;
    }
    .van-switch--on {
      background: @primary;
    }
  }
}
</style>