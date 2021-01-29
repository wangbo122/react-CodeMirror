/**
 * @author wangbo
 * @description 封装资源管理器中的 文件菜单
 */
import React, { Component } from 'react';
import { Tree } from 'antd';
import style from './Directory.less'
const { DirectoryTree } = Tree;

const treeData = [
  {
    title: '文件夹1',
    key: 'parent1',
    children: [
      {
        title: '文件夹1-1',
        key: 'parent1-1',
        children: [
          {
            title: '文件夹1-1-1',
            key: 'parent1-1-1',
            children: [
              { title: 'component.js', key: 'component12345', isLeaf: true },
              { title: 'esssey.py', key: 'esssey12345', isLeaf: true },
            ],
          },
        ],
      },
    ],
  },
  {
    title: '文件夹2',
    key: 'parent2',
    children: [
      { title: 'component1.js', key: 'component123451', isLeaf: true },
      { title: 'esssey1.py', key: 'esssey123451', isLeaf: true },
    ],
  },
  {
    title: '文件夹3',
    key: 'parent3',
    children: [
      { title: 'component2.js', key: 'component123452', isLeaf: true },
      { title: 'esssey2.py', key: 'esssey123452', isLeaf: true },
    ],
  },
];

export default class Directory extends Component {
  render() {
    return (
        <DirectoryTree
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
