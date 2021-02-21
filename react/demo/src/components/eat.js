import React, {Component, Fragment} from 'react'
import PropTyps from 'prop-types'
import '../style/eat.css'
import EatItem from './eatItem'

class Eat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'hello',
      list: ['宫保鸡丁', '醋溜肥肠']
    }
  }

  inputChange(e) {
    // console.log(e.target.value);
    // this.state.inputValue = e.target.value
    this.setState({
      inputValue: e.target.value
    })
  }

  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
  }

  deleteItem(index) {
    console.log(index);
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list
    })
  }

  render() {
    return (
      <Fragment>
        <div>
          {/* <label>加菜：</label> */}
          <input className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
          <button onClick={this.addList.bind(this)}>下单</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              {/* return <li key={index + item} onClick={this.deleteItem.bind(this, index)} dangeroutlySetInnerHtml={{__html: item}}>{item}</li> */}
              return (
                <div key={index + item}>
                  <EatItem list={this.state.list} content={item} index={index} deleteItem={this.deleteItem.bind(this)}></EatItem>
                </div>
              )
            })
          }
          <EatItem/>
        </ul>
      </Fragment>
    )
  }
}

export default Eat