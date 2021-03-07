import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';

const TodoListUi = (props) => {
  return (
    <div style={{marginTop: '10px', marginLeft: '10px'}}>
      <div>
        <Input 
          value={props.inputValue} 
          placeholder="todoInfo" 
          style={{width: '300px', marginRight: '10px'}}
          onChange={props.handleInputChange}
          >

        </Input>
        <Button type="primary" onClick={props.handleSubmit}>提交</Button>
      </div>
      <List
        style={{marginTop: '10px', width: '300px'}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => props.handleItemDelete(index)}>
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}

/* class TodoListUi extends Component {
  render () {
    return (
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <div>
          <Input 
            value={this.props.inputValue} 
            placeholder="todoInfo" 
            style={{width: '300px', marginRight: '10px'}}
            onChange={this.props.handleInputChange}
            >

          </Input>
          <Button type="primary" onClick={this.props.handleSubmit}>提交</Button>
        </div>
        <List
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item onClick={() => this.props.handleItemDelete(index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}
 */
export default TodoListUi