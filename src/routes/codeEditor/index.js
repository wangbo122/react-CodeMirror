import React, { Component } from 'react';
import { Form } from 'antd';
import style from './index.less'
import Iconfont from '../../icon'
import AceEditor from '../../components/AceEitor';
import Directory from '../../components/Directory';
import EditorMenu from '../../components/EditorMenu';


const treeData = [
  {
    title: 'parent 5',
    key: '5-5',
    children: [
      {
        title: 'parent 6',
        key: '6-6',
        children: [
          {
            title: 'parent777777777777777777777777777777777777777777777777777777',
            key: '7-7',
            children: [
              { title: 'leaf 0-0', key: '5-0-0', isLeaf: true },
              { title: 'leaf 0-1', key: '5-0-1', isLeaf: true },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'parent 0',
    key: '0-0',
    children: [
      { title: 'leaf 0-0', key: '0-0-0', isLeaf: true },
      { title: 'leaf 0-1', key: '0-0-1', isLeaf: true },
    ],
  },
  {
    title: 'parent 1',
    key: '0-1',
    children: [
      { title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
      { title: 'leaf 1-1', key: '0-1-1', isLeaf: true },
    ],
  },
];

class codeEditor extends Component {
  render() {
    return (
      <div className={style.codeEditor}>
        <div className={style.main_bav}>
          <div className={style.menu_bar}>
            <Iconfont type={'icon-lifangtilitiduomiantifangkuai2'} style={{color:'white'}}/>
            <EditorMenu theme='dark'/>
          </div>
          登录
        </div>

        <div className={style.left_file_explorer}>
          <Directory treeData={treeData}/>
        </div>

        <div className={style.right_container}>
          <AceEditor mode="python" theme="monokai" width="100%" height="400px" onChange={this.getCode}/>
        </div>
      </div>
    );
  }

  getCode = (event, e) => {
    console.log(event, e);
  };
}

export default codeEditor;
