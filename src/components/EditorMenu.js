/**
 * @author wangbo
 * @description antd-menu菜单
 */
import React, { Component } from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

export default class EditorMenu extends Component {
    state = {
        current: 'mail',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };
    
      render() {
        const { current } = this.state;
        const { theme } = this.props
        return (
          <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" theme={theme||'dark'}>
            <SubMenu key="SubMenu" title="Navigation Three - Submenu">
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        );
      }
}
