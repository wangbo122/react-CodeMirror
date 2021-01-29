import React, { Component } from 'react';
import style from './index.less';
import Iconfont from '../../icon';
import AceEditor from '../../components/AceEitor';
import Directory from '../../components/Directory/Directory';
import EditorMenu from '../../components/EditorMenu/EditorMenu';

class codeEditor extends Component {
  render() {
    return (
      <div className={style.codeEditor}>
        {/* top功能区 */}
        <div className={style.main_bav}>
          <div className={style.menu_bar}>
            <Iconfont type={'icon-lifangtilitiduomiantifangkuai2'} style={{ color: 'white' }} />
            <EditorMenu theme="dark" />
          </div>
        </div>

        {/* 内容区 */}
        <div className={style.container}>
          <div className={style.left_file_explorer}>
            <Directory />
          </div>
          <div className={style.right_editor}>
            <AceEditor mode="python" onChange={this.getCode} />
          </div>
        </div>
      </div>
    );
  }

  /**
   * AceEditor的方法
   */
  getCode = (event, e) => {
    console.log(event, e);
  };



}

export default codeEditor;
