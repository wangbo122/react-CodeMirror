/**
 * @author wangbo
 * @description 封装资源管理器中的 文件菜单
 */
import React, { Component } from 'react';
import { Tree } from 'antd';
import style from './Directory.less';
import Iconfont from '../../icon';
const { DirectoryTree } = Tree;

export default class Directory extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const data = [
      {
        title: '文件夹1',
        key: 'parent1',
        type: '1', // type为1代表文件夹，type为2代表文件
        children: [
          {
            title: '文件夹1-1',
            key: 'parent1-1',
            type: '1',
            children: [
              {
                title: '文件夹1-1-1777777777777777777777777777',
                key: 'parent1-1-1',
                type: '1',
                children: [
                  { title: 'component.js', key: 'component12345', type: '2', isLeaf: true },
                  { title: 'esssey.py', key: 'esssey12345', type: '2', isLeaf: true },
                ],
              },
            ],
          },
        ],
      },
      {
        title: '文件夹2',
        key: 'parent2',
        type: '1',
        children: [
          { title: 'component1.js', key: 'component123451', type: '2', isLeaf: true },
          { title: 'esssey1.py', key: 'esssey123451', type: '2', isLeaf: true },
        ],
      },
      {
        title: '文件夹3',
        key: 'parent3',
        type: '1',
        children: [
          { title: 'component2.js', key: 'component123452', type: '2', isLeaf: true },
          { title: 'esssey2.py', key: 'esssey123452', type: '2', isLeaf: true },
        ],
      },
    ];
    this.setState({ data });
  }

  // 通过 type和文件名判断图标
  matchFileIcon = (type, title) => {
    const jsRegex = /\.js$/;
    const pyRegex = /\.py$/;
    // type为1代表文件夹，type为2代表文件， 文件通过后缀给图标
    if (type === '1') return 'icon-wenjianjia';
    if (type === '2'&& title.match(jsRegex)){
      return 'icon-js';
    }
    if (type === '2'&& title.match(pyRegex)){
      return 'icon-python';
    }
  };

  // 遍历data，生成想要的treeNode
  setTreeData = (data) => {
    return data.map((item) => {
      let obj = {
        ...item,
        title: (<div className={style.menu_item}>
                  <Iconfont type={this.matchFileIcon(item.type, item.title)}/>
                  {item.title}
                  <div className={style.menu_features}>
                    <Iconfont type='icon-bi'/>
                    <Iconfont type='icon-cha'/>
                  </div>
                </div>)
      }
      if(item['children']){
        obj.title = (<div className={style.menu_item}>
                      <Iconfont type={this.matchFileIcon(item.type, item.title)}/>
                      {item.title}
                      <div className={style.menu_features}>
                        <Iconfont type='icon-bi'/>
                        <Iconfont type='icon-wenjian'/>
                        <Iconfont type='icon-wenjianjia1'/>
                        <Iconfont type='icon-cha'/>
                      </div>
                    </div>)
        obj.children = this.setTreeData(item.children)
      }
      return obj
    });
  };

  render() {
    const { data } = this.state;
    return (
      <DirectoryTree
        icon={false}
        multiple={false}
        defaultExpandAll
        onSelect={this.onSelect}
        onExpand={this.onExpand}
        treeData={this.setTreeData(data)}
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
