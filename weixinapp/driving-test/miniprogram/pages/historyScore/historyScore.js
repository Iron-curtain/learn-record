import * as echarts from '../../ec-canvas/echarts';

const getQuestionType = require('../../util/getQuestionType')
let chart;

function getOptions(score) {
  return {
    color: ["#37A2DA"],
    title: {
      text: '最近五次成绩',
      left: 'center'
    },
    xAxis: {
      type: 'category',
      data: [1, 2, 3, 4, 5]
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: score,
      type: 'line'
    }]
  };
}

function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    color: ["#37A2DA"],
    title: {
      text: '最近五次成绩',
      left: 'center'
    },
    xAxis: {
      type: 'category',
      data: [1, 2, 3, 4, 5]
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [70, 80, 90, 85, 100],
      type: 'line'
    }]
  };

  chart.setOption(option);
  return chart;
}

Page({
  data: {
    ec: {
      onInit: initChart
    },
    scoreList: []
  },

  // 获取历史成绩
  getHistoryScore() {
    let questionType = getQuestionType()
    return wx.cloud.callFunction({
      name: 'getScore',
      data: {
        questionType
      }
    }).then((res) => {
      let data = res.result.score.data
      let scoreList = data.map((item) => {
        return {time: item.time, score: item.score}
      })
      let recentlyScore = scoreList.slice(0, 5).map((item) => item.score)
      this.setData({
        scoreList,
      })
      return recentlyScore
    }).catch((err) => {
      console.log(err);
    })
  },

  onLoad() {
    this.getHistoryScore().then((recentlyScore) => {
      console.log(recentlyScore);
      let options = getOptions(recentlyScore)
      chart.setOption(options)
    })
  },

  onReady() {}
});