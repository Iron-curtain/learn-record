const defaultState = {
  inputValue: '',
  list: [
    1, 2, 3
  ]
}

// reducer可以接收state, 但绝不能修改state
export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  } 
  if (action.type === 'submit_input_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(parseInt(newState.inputValue))
    newState.inputValue = ''
    return newState
  }
  return state
}