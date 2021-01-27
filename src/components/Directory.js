/**
 * @author wangbo
 * @description 封装资源管理器中的 文件菜单
 */
import React, { Component } from 'react';
import { Tree } from 'antd';

const { DirectoryTree } = Tree;

export default class Directory extends Component {
  render() {
    const {treeData} = this.props;
    return (
        <DirectoryTree
          style={{width:'200px'}}
          multiple={false}
          defaultExpandAll
          onSelect={this.onSelect}
          onExpand={this.onExpand}
          treeData={treeData}
        />
    );
  }
  onSelect = (keys, info) => {
    console.log('Trigger Select', keys, info);
  };

  onExpand = () => {
    console.log('Trigger Expand');
  };
}
