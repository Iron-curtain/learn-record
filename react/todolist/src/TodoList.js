import React, { Component } from 'react';
import store from './store'
import { getInputChangeAction, getAddItemAction, getDeleteTodoAction, initListAction, getTodoList } from './store/actionCreators'
import TodoListUi from './TodoListUi'
import axios from 'axios'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  render () {
    return (
      <TodoListUi inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        list={this.state.list}
        handleItemDelete={this.handleItemDelete.bind(this)}
      ></TodoListUi>
    )  
  }

  componentDidMount () {
    const action = getTodoList()
    console.log(action);
    store.dispatch(action)  // action这个函数就会被直接执行掉
  }

  handleInputChange (e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleSubmit () {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleStoreChange () {
    console.log('store change');
    this.setState(store.getState())
  }

  handleItemDelete (index) {
    const action = getDeleteTodoAction(index)
    store.dispatch(action)
  }
}

export default TodoList