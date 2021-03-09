import React, { Component } from 'react';
import Reflv from '../components/Reflv/Reflv';
// import VideoJs from '../components/VideoJs';
import style from './flv.less';
import Iconfont from '../icon'

export default class CCC extends Component {
  state = {
    flvURL: 'http://119.3.185.27:8080/live?app=myapp&stream=lk',
    chars: [
      {
        name: '鲁北卡（魔兽世界主播）',
        content: '魔兽不倒，陪你到老。欢迎>来到>鲁北卡魔兽pvp直播间。',
      },
      { name: '鲁北卡（魔兽世界主播）', content: '每天13：00直播，与你不见不散' },
      { name: '鲁北卡（魔兽世界主播）', content: '每天13：00直播，与你不见不散' },
      { name: '鲁北卡（魔兽世界主播）', content: '每天13：00直播，与你不见不散' },
      { name: '鲁北卡（魔兽世界主播）', content: '每天13：00直播，与你不见不散' },
      { name: '鲁北卡（魔兽世界主播）', content: '每天13：00直播，与你不见不散' },
      { name: '鲁北卡（魔兽世界主播）', content: '每天13：00直播，与你不见不散' },
      { name: '鲁北卡（魔兽世界主播）', content: '每天13：00直播，与你不见不散' },
      { name: '鲁北卡（魔兽世界主播）', content: '每天13：00直播，与你不见不散' },
      { name: '鲁北卡（魔兽世界主播）', content: '每天13：00直播，与你不见不散' },
      { name: '用户2876590212344', content: '不 我们就是想给你上一课' },
      { name: '厚德载物', content: '生存猎？' },
      { name: '用户2876590212344', content: '给那个生存猎上一课' },
      { name: '哈尼', content: '教下你生存怎么刷坐骑材料' },
      { name: '咆哮哥', content: '老表组我，独角仙' },
      { name: '用户3456789-09876543', content: 'Rocha盗贼' },
    ],
  };

  render() {
    const { flvURL, chars } = this.state;
    return (
      <div className={style.live_room}>
        <div className={style.live_content}>
          <div className={style.room_bar}>
            <span className={style.room_id}>房间号：7355608</span>
            <span className={style.room_people_num}>人数：29人</span>
          </div>

          <div className={style.main_content}>
            <div className={style.video_container}>
              {/* <VideoJs src={flvURL} width="387" /> */}
              <Reflv
              id="videoElement"
              className="flvVideo"
                // url={'https://d1--cn-gotcha03.bilivideo.com/live-bvc/825710/live_258491326_47763783.flv?expires=1614929440&len=0&oi=2070350087&pt=web&qn=10000&trid=056e273608774c90b33a88782e330725&sigparams=cdn,expires,len,oi,pt,qn,trid&cdn=cn-gotcha03&sign=bcc636861926c4b3bbbc87ecd9a5633d&p2p_type=0&src=5&sl=1&platform=web&pSession=t8XGd6EB-7kfr-4jFd-mEiS-iAGRzFJMAiX5'}
                url={flvURL}
                type="flv"
                isLive
                cors
                config={{
                  enableWorker: true,
                  enableStashBuffer: false,
                  stashInitialSize: 128,
                }}
              />
            </div>

            <div className={style.chat_content_indistinct}></div>

            <div className={style.chat_room}>
              <div className={style.chat_boxes}>
                {chars.map((i) => {
                  return (
                    <div className={style.chat_content}>
                      {i.name}：{i.content}
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className={style.input_field}>
              <div className={style.chat_input}>
                <input placeholder="快点发条弹幕吧~"></input>
              </div>
              <div className={style.chat_input}>
                <Iconfont type='icon-gouwuche'/>
                <Iconfont type='icon-liwu'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
