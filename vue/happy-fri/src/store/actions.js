export default {
  addNum({ commit, state }, id) {
    commit('REMEMBER_ASWER', id)
    if (state.itemNum < state.itemDetail.length) {
      commit('ADD_ITEMNUM', 1)
    }
  }

}