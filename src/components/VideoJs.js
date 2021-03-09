import React, { Component } from 'react';
import Videojs from 'video.js';
import 'video.js/dist/video-js.css';

class VideoJs extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    // 销毁播放器
    if (this.player) {
      this.player.dispose();
    }
  }
  componentDidMount() {
    const { height, width, src } = this.props;
    this.player = Videojs(
      'custom-video',
      {
        height,
        width,
        autoplay: true,
        bigPlayButton: false, // 在视频播放之前显示的初始播放按钮
        textTrackDisplay: false,
        controlBar: true,
        errorDisplay: false,
        type: 'video/x-flv',
      },
      function () {
        this.play();
      },
    );
    this.player.src({ src });
  }

  render() {
    return <video id="custom-video" className="video-js" controls preload="auto"></video>;
  }
}

export default VideoJs;
