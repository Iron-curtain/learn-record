// components/question/question.js
let result = {
  "1":"A",
  "2":"B",
  "3":"C",
  "4":"D",
  "7":"AB",
  "8":"AC",
  "9":"AD",
  "10":"BC",
  "11":"BD",
  "12":"CD",
  "13":"ABC",
  "14":"ABD",
  "15":"ACD",
  "16":"BCD",
  "17":"ABCD"
}
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
    mulAnswer: {A: false, B: false, C: false, D: false},
    style: {
      A: '',
      B: '',
      C: '',
      D: ''
    },
    explainShow: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 监听题目的变化，并且更新数据
    updateQuestion(newVal) {
      // console.log(newVal);
      // this.initData()
      this.getQuestionType(newVal)
      // console.log(this.data);
    },

    // 初始化数据
    initData() {
      this.setData({
        question: {},
        questionType: 0,
        questionTypeName: '',
        singleAnswer: '',
        mulAnswer: {A: false, B: false, C: false, D: false},
        style: {
          A: '',
          B: '',
          C: '',
          D: ''
        },
        explainShow: false
      })
    },

    // 获取题目类型并且初始化数据
    getQuestionType(question) {
      if (question.answer <= 4) {
        this.setData({
          question,
          questionType: 0,
          questionTypeName: '单选',
          singleAnswer: '',
          mulAnswer: {A: false, B: false, C: false, D: false},
          style: {
            A: '',
            B: '',
            C: '',
            D: ''
          },
          explainShow: false
        })
      } else if (question.answer > 4) {
        this.setData({
          question,
          questionType: 1,
          questionTypeName: '多选',
          mulAnswer: {A: false, B: false, C: false, D: false},
          style: {
            A: '',
            B: '',
            C: '',
            D: ''
          },
          explainShow: false
        })
      } else if (question.item3 === '') {
        this.setData({
          question,
          questionType: 2,
          questionTypeName: '判断',
          mulAnswer: {A: false, B: false, C: false, D: false},
          style: {
            A: '',
            B: '',
            C: '',
            D: ''
          },
          explainShow: false
        })
      }
    },
    // 选择答案
    select(e) {
      let optionId = e.currentTarget.dataset.option
      if (this.data.questionType === 1) {
        let style = this.data.style
        this.data.mulAnswer[optionId] = !this.data.mulAnswer[optionId]
        if (this.data.mulAnswer[optionId]) {
          style[optionId] = 'color: white; background: #2a82e4'
        } else {
          style[optionId] = ''
        }
        this.setData({
          style
        })
      } else {
        let answerNum = this.data.question.answer
        let answer = result[answerNum]
        let style = {}
        style[answer] = 'color: white; background: #2a82e4'
        if (optionId === answer) {
          this.triggerEvent('choose', {istrue: true})
        } else {
          style[optionId] = 'color: white; background: red'
          this.triggerEvent('choose', {istrue: false, myAnswer: optionId})
          this.setData({
            explainShow: true
          })
        }
        this.setData({
          singleAnswer: optionId
        })
        this.setData({
          style
        })
      }
    },


    // 多选题提交答案
    submit() {
      let style = this.data.style
      let myAnswer = ''
      let answer = result[this.data.question.answer]
      for (let option in mulAnswer) {
        if (mulAnswer.hasOwnProperty(option) && mulAnswer[option]) {
          myAnswer = myAnswer + option
          if (answer.indexOf(option) === -1) {
            style[option] = 'color: white; background: red'
          }
        }
      }
      for (let option of answer) {
        if (myAnswer.indexOf(option) === -1) {
          style[option] = 'color: white; background: #2a82e4'
        }
      }
      this.setData({
        style
      })
      console.log(style);
      if (myAnswer === answer) {
        this.triggerEvent('choose', {istrue: true})
      } else {
        this.triggerEvent('choose', {istrue: false, myAnswer})
        this.setData({
          explainShow: true
        })
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
