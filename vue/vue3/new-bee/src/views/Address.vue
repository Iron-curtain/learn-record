<template>
  <div class="address-box">
    <s-header :name="'地址管理'" ></s-header>
    <div class="address-item">
      <van-address-list
        v-if="from != 'mine'"
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @select="select"
      />
      <van-address-list
        v-else
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader.vue'
import { onMounted, reactive, toRefs } from 'vue'
import { getAddressList } from '@/service/address.js'
import { useRouter, useRoute } from 'vue-router'
export default {
  components: {
    sHeader
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const state = reactive({
      list: [
        {
        id: '1',
        name: '张三',
        tel: '13000000000',
        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
        isDefault: true,
      },
      {
        id: '2',  
        name: '李四',
        tel: '1310000000',
        address: '浙江省杭州市拱墅区莫干山路 50 号',
      },
      ],
      from: route.query.from
    })
    onMounted(async () => {
      // 请求所有的地址列表
      const { data } = await getAddressList()
      if (!data) {
        state.list = []
        return
      }
      state.list = data.map(item => {
        return {
          id: item.addressId,
          name: item.userName,
          tel: item.userPhone,
          address: `${item.provinceName} ${item.cityName} ${item.regionName} ${item.detailAddress}`,
          isDefault: Boolean(item.defaultFlag)
        }
      })
    })

    const onAdd = () => {
      router.push({ path: '/address-edit', query: { type: 'add', from: state.from}})
    }

    // 选中地址
    const select = (item) => {
      console.log(item);
      router.push({ path: '/create-order', query: { addressId: item.id, from: state.from}})
    }

    return {
      ...toRefs(state),
      onAdd,
      select
    }
  }
}
</script>

<style lang="less">
@import '../common/style/mixin';
.address-box {
  .van-radio__icon {
    display: none;
  }
  .address-item {
    margin-top: 44px;
    .van-button {
      background: @primary;
      border-color: @primary;
    }
  }
}
</style>