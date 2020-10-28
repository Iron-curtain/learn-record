// components/rating-star/rating-star.js
const STAR_ON = '/assets/img/rating_star_small_on.png'
const STAR_OFF = '/assets/img/rating_star_small_off.png'
const STAR_HALF = '/assets/img/rating_star_small_half.png'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score: {
      type: Number,
      observer: function(newVal, oldVal, path) {  //观察者， 监听
        let stars = [STAR_OFF, STAR_OFF, STAR_OFF, STAR_OFF, STAR_OFF]
        if(newVal > 0) {
          newVal = newVal / 10
          let floor = Math.floor(newVal)
          if (floor != newVal){
            stars[floor] = STAR_HALF
          }
          for(var i = 0; i < floor; i++){
            stars[i] = STAR_ON
          }
        }
        this.setData({
          stars: stars
        })
      }
    },
    iconSize: {
      type: String,
      value: "20rpx"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    stars : [STAR_OFF, STAR_OFF, STAR_OFF, STAR_OFF, STAR_OFF]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
