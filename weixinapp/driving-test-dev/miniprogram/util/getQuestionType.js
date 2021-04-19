const app = getApp()
const getQuestionType = function() {
  let questionType = ''
  let model = app.globalData.choice.model
  let subject = app.globalData.choice.subject
  if (subject === 4) questionType = 'm-4'
  else questionType = `m${model}-1`
  return questionType
}
module.exports = getQuestionType