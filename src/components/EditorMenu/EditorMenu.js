/**
 * @author wangbo
 * @description antd-menu菜单
 */
import React, { Component } from 'react';
import { Menu } from 'antd';
import './EditorMenu.less';

const { SubMenu } = Menu;

export default class EditorMenu extends Component {
  state = {
    openKeys: [],
  };

  handleClick = (e) => {
    console.log('click ', e);
  };

  render() {
    // const { openKeys } = this.state;
    const { theme } = this.props;
    
    return (
      <Menu
        onClick={this.handleClick}
        // openKeys={openKeys}
        // onOpenChange={(openKeys)=>this.setState({ openKeys })}
        mode="horizontal"
        theme={theme || 'dark'}
      >
        <SubMenu key="file" title="文件">
          <Menu.Item key="newFile">新建文件</Menu.Item>
          <Menu.Item key="newFolder">新建文件夹</Menu.Item>
        </SubMenu>

        <SubMenu key="edit" title="编辑">
          <Menu.Item key="ChangeEditorStyle">改变编辑器样式</Menu.Item>
        </SubMenu>

        <SubMenu key="terminal" title="终端">
          <Menu.Item key="openTerminal">打开终端</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
