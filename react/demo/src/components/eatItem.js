import React, { Component } from 'react';

class EatItem extends Component {
  state = {  }
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {  // 只在页面刷新的时候执行一次
    console.log('componentWillMount---组件将要挂载到页面');
  }

  componentDidMount() { // 只在页面刷新的时候执行一次           
    console.log('componentDidMount--组件挂载完成');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate---组件发生改变之前', this.props.content);
    console.log(nextProps, nextState);
    return false
  }

  componentWillUpdate() {
    console.log('componentWillUpdate---组件即将更新');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate---组件更新完成');
  }


  componentWillUnmount() {
    console.log('componentWillUnmount---组件卸载');
  }

  handleClick() {
    this.props.deleteItem(this.props.index)
    // this.props.list = []
  }
  render() { 
    console.log('render---组件挂载中');
    return ( 
      <div onClick={this.handleClick}>{this.props.content}</div>
    );
  }
}
 
export default EatItem;