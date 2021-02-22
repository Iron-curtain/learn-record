import React, { Component } from 'react';

class EatItem extends Component {
  state = {  }
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.deleteItem(this.props.index)
    this.props.list = []
  }
  render() { 
    return ( 
      <div onClick={this.handleClick}>{this.props.content}</div>
     );
  }
}
 
export default EatItem;