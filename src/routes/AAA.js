import React, { Component } from 'react';
import { Link } from 'dva/router';
import { Button } from 'antd';

class AAA extends Component {
  openWindow=()=>{
    window.open ("http://localhost:9999/ccc", 
                "_blank", 
                "height=800, width=480, toolbar =0, menubar=0, scrollbars=0, resizable=0, location=0, status=0"
                ) 
  }
  render() {
    return (
      <div>
        <p>
          AAA页
        </p>
        <Link to={'/aaa/bbb'}>
          <Button type={'primary'}>
            去代码编辑器页面
          </Button>
        </Link>
        <br />
        {/* <Link to={'/ccc'}> */}
          <Button type={'default'} onClick={this.openWindow}>
            去直播页面
          </Button>
        {/* </Link> */}
      </div>
    );
  }
}
 
export default AAA;