const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMEMBER_ASWER = 'REMEMBER_ASWER'
export default {
  // 点击进入下一题
  [ADD_ITEMNUM] (state, num) {
    state.itemNum += num
  },
  [REMEMBER_ASWER] (state, id) {
    state.answerId.push(id)
  }
}