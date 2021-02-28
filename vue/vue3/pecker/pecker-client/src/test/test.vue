<template>
  <div class="wrap content">
    <van-nav-bar title="操作日志" fixed left-arrow @click-left="onClickLeft" />
    <div class="mt-44"></div>
    <div class="main">
      <van-field v-model="logtype" label="日志类型" :placeholder="'请选择'" input-align="right" readonly right-icon="arrow" @click="showLogType" />
      <van-field v-model="bgDate" label="开始时间" :placeholder="'请选择'" input-align="right" readonly right-icon="arrow" @click="showBeginDate" />
      <van-field v-model="endDate" label="结束时间" :placeholder="'请选择'" input-align="right" readonly right-icon="arrow" @click="showEndDate" />
    </div>
    <button @click="goLogDetail" :disabled="disabledFlag" :class="{'button_style': disabledFlag}">查询</button>
    <!--picker-->
    <van-popup v-model="showPicker" position="bottom">
      <van-picker show-toolbar :columns="columns" :default-index="2" @cancel="onCancel" @confirm="onConfirm" />
    </van-popup>
    <!--日期选择弹框-->
    <van-popup v-model="showPickerDate" position="bottom">
      <van-datetime-picker v-model="currentDate" type="date" @cancel="onCancelDate" @confirm="onConfirmDate" :min-date="minDate" :max-date="maxDate" :formatter="formatter" />
    </van-popup>
    <van-popup v-model="showPickerDate1" position="bottom">
      <van-datetime-picker v-model="currentDate1" type="date" @cancel="onCancelDate1" @confirm="onConfirmDate1" :min-date="minDate1" :max-date="maxDate1" :formatter="formatter" />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'logQuery',
  data () {
    return {
      columns: [{
        text: '登录操作',
        type: 'A'
      }, {
        text: '账务交易',
        type: 'B'
      }, {
        text: '明细查询',
        type: 'C'
      }, {
        text: '其他操作',
        type: 'D'
      }],
      showPicker: false,
      minDate: new Date(2019, 0, 1),
      maxDate: new Date(),
      minDate1: new Date(2019, 0, 1),
      maxDate1: new Date(),
      currentDate: new Date(),
      currentDate1: new Date(),
      showPickerDate: false,
      showPickerDate1: false,
      logtype: '',
      bgDate: '', // 查询时间
      endDate: ''
    }
  },
  watch: {  // 使用时间选择器,需要配合watch监听选择时间值的变化,进而设置最小值和最大值
    bgDate: function (val) {
      if (val === '') {
        return
      }
      let bgDate1 = new Date(val)
      bgDate1.setMonth(bgDate1.getMonth() + 3)  
      let date = bgDate1.getFullYear() + '-' + (bgDate1.getMonth() + 1) + '-' + bgDate1.getDate()
      this.minDate1 = new Date(val)
      this.maxDate1 = new Date(date)
    },
    endDate: function (val) {
      if (val === '') {
        return
      }
      let bgDate2 = new Date(val)
      bgDate2.setMonth(bgDate2.getMonth() - 3)
      let date = bgDate2.getFullYear() + '-' + (bgDate2.getMonth() + 1) + '-' + bgDate2.getDate()
      this.minDate = new Date(date)
      this.maxDate = new Date(val)
    }
  },
  computed: {
    disabledFlag () { //点击按钮的计算属性
      return !this.bgDate || !this.endDate
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    // 日期组件自定义格式
    formatter (type, value) {
      if (type === 'year') {
        this.value1 = value   // 可以拿到当前点击的数值
        return `${value}年`
      } else if (type === 'month') {
        this.value2 = value
        return `${value}月`
      }
      this.value3 = value
      return `${value}日`
    },
    onCancelDate () {
      this.showPickerDate = false
    },
    onConfirmDate () {
      console.log('date111--',this.value1)  // 数值来自日期组件自定义格式的方法回调
      console.log('date222--',this.value2)
      console.log('date333--',this.value3)
      this.bgDate = `${this.value1}-${this.value2}-${this.value3}`  // 字符串拼接 结果入2020-07-03
      this.onCancelDate()
    },
    onCancelDate1 () {
      this.showPickerDate1 = false
    },
    onConfirmDate1 () {
      this.endDate = `${this.value1}-${this.value2}-${this.value3}`
      this.onCancelDate1()
    },
    showLogType () {
      this.showPicker = true
    },
    // 取消选择账号
    onCancel () {
      this.showPicker = false
    },
    // 确认选择日志类型
    onConfirm (value, index) {
      this.logtype = value.text
      this.logflag = value.type
      this.onCancel()
    },
    // 显示查询日期
    showBeginDate () {
      this.showPickerDate = true
    },
    showEndDate () {
      this.showPickerDate1 = true
    },
    
  }
}
</script>

<style lang="scss" scoped>
 
</style>
