// components/question/question.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    question: {
      type: Object,
      value: {},
      observer: 'updateQuestion'
    },
    isShowAnswer: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 判断题目类型
    // 0 单选   1 多选  2 判断
    question: {},
    questionType: 0,
    questionTypeName: '',
    singleAnswer: '',
    doubleAnswer: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 监听题目的变化，并且更新数据
    updateQuestion(newVal) {
      console.log(newVal);
      this.getQuestionType(newVal)
      this.setData({
        question: newVal
      })
      console.log(this.data);
    },
    // 获取题目类型
    getQuestionType(question) {
      if (question.answer <= 4) {
        this.setData({
          question,
          questionType: 0,
          questionTypeName: '单选'
        })
      } else if (question.answer > 4) {
        this.setData({
          question,
          questionType: 1,
          questionTypeName: '多选'
        })
      } else if (question.item3 === '') {
        this.setData({
          question,
          questionType: 2,
          questionTypeName: '判断'
        })
      }
    },
    // 选择答案
    select(optionId) {
      if (questionType === 1) {

      } else {
        let answer = question.answer
        if (optionId === answer) {
          
        } else {

        }
      }
    }
  },

  // 组件的生命周期
  lifetimes: {
    // 在组件实例进入页面节点树时执行
    attached: function() {
    },
    // 在组件实例被从页面节点树移除时执行
    detached: function() {
      
    },
  }
})
