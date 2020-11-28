<template>
  <div class="about">
    <p>当前温度：{{temperature.num}}</p>
    <p>推荐穿衣：{{suggest}}</p>

    <div>
      <button @click="add">+</button>
      <button @click="reduce">-</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0,
      temperature: {
        num: 9
      },
      suggest: '棉袄'
    }
  },
  computed: {
    dealCount () {
      return (this.count + 10) ** 2
    }
    // suggest () {
    //   if (this.temperature <= -1) {
    //     return '羽绒服'
    //   } else if (this.temperature < 14) {
    //     return '棉袄'
    //   } else if (this.temperature < 24) {
    //     return '夹克'
    //   } else {
    //     return '短袖'
    //   }
    // }
  },
  methods: {
    add () {
      this.temperature.num += 5
    },
    reduce () {
      this.temperature.num -= 5
    }
  },
  watch: {
    // temperature (newVal, oldVal) {
    //   console.log(newVal, oldVal)
    //   if (newVal <= -1) {
    //     this.suggest = '羽绒服'
    //   } else if (newVal < 14) {
    //     this.suggest = '棉袄'
    //   } else if (newVal < 24) {
    //     this.suggest = '夹克'
    //   } else {
    //     this.suggest = '短袖'
    //   }
    // }
    temperature: {
      handler (newVal, oldVal) {
        // console.log(newVal.num, oldVal)
        if (newVal.num <= -1) {
          this.suggest = '羽绒服'
        } else if (newVal.num < 14) {
          this.suggest = '棉袄'
        } else if (newVal.num < 24) {
          this.suggest = '夹克'
        } else {
          this.suggest = '短袖'
        }
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style>

</style>
