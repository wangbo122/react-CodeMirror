import React, { Component } from 'react';
import Reflv from '../components/Reflv/Reflv';
// import VideoJs from '../components/VideoJs';
import style from './CCC.less';

export default class CCC extends Component {
  state = {
    m3u8url: 'http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8',
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
    const { m3u8url, chars } = this.state;
    return (
      <div className={style.live_room}>
        <div className={style.live_content}>
          <div className={style.room_bar}>
            <span className={style.room_id}>房间号：7355608</span>
            <span className={style.room_people_num}>人数：29人</span>
          </div>

          <div className={style.main_content}>
            <div className={style.video_container}>
              {/* <VideoJs src={m3u8url} width="387" /> */}
              <Reflv
                url={'https://08b75c335d022787c0321db9be6bf50d.v.smtcdns.net/d1--cn-gotcha04.bilivideo.com/live-bvc/648630/live_11468498_2909234_2500.flv?cdn=cn-gotcha04&expires=1614765877&len=0&oi=2070350087&pt=web&qn=250&trid=cecfc6587d36497da5a5bbb0b4ade48a&sigparams=cdn,expires,len,oi,pt,qn,trid&sign=7a32b994a52de5c6376ac4def9e2dd22&ptype=0&src=9&sl=2&order=1&svr_type=live_oc&tencent_test_client_ip=123.103.9.7&dispatch_from=ztc10.118.116.131&utime=1614762278911_2'}
                // url={"http://119.3.185.27:8080/live?app=myapp&stream=lk"}
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
                <div className={style.chat_history_obscure} />
                {chars.map((i) => {
                  return (
                    <div className={style.chat_content}>
                      {i.name}：{i.content}
                    </div>
                  );
                })}
              </div>
              <div className={style.input_field}>
                <img src="https://jstop1.com/blog/blogPortrait.jpg" />
                <input placeholder="快点发条弹幕吧~"></input>
                <img src="https://jstop1.com/blog/blogPortrait.jpg" />
              </div>
            </div>
          </div>

          <div className={style.page_footer}></div>
        </div>
      </div>
    );
  }
}
