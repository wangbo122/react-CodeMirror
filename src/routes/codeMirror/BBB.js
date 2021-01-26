import React, { Component } from 'react';
import AceEditor from '../../components/AceEitor';
import { Form } from 'antd';
class BBB extends Component {
  render() {
    return (
      <div>
        <Form labelCol={{ span: 6 }} wrapperCol={{ span: 10 }}>
          <Form.Item name="script" rules={[{ required: true, message: '内容不能为空' }]}>
            <AceEditor mode="python" theme="github" width="100%" height="400px" onChange={this.getCode}/>
          </Form.Item>
        </Form>
      </div>
    );
  }

  getCode = (event, e) => {
    console.log(event, e)
  }
}

export default BBB;
