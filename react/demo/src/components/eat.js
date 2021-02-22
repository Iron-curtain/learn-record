import React, {Component, Fragment} from 'react'

class Eat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'hello',
      list: []
    }
  }

  inputChange(e) {
    // console.log(e.target.value);
    // this.state.inputValue = e.target.value
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    return (
      <Fragment>
        <div><input value={this.state.inputValue} onChange={this.inputChange.bind(this)} /><button>下单</button></div>
        <ul>
          <li>宫爆鸡丁</li>
          <li>醋溜肥肠</li>
        </ul>
      </Fragment>
    )
  }
}

export default Eat