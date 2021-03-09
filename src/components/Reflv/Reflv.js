import React, { Component } from 'react';
import flvjs from 'flv.js';

/**
 * react component wrap flv.js
 */
export default class Reflv extends Component {
  componentDidMount() {
    if (flvjs.isSupported()) {
      var videoElement = document.getElementById('videoElement');
      var flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: this.props.url,
        isLive: true,
        config: {
          enableWorker: true,
          enableStashBuffer: false,
          stashInitialSize: 128,
        },
      });
      flvPlayer.attachMediaElement(videoElement);
      flvPlayer.load();
      flvPlayer.play();
      flvPlayer.on(flvjs.Events.ERROR, (errType, errDetail) => {
        console.log(errType, errDetail);
      });
      flvPlayer.on("statistics_info", (res)=> {
        if (this.lastDecodedFrame == 0) {
          this.lastDecodedFrame = res.decodedFrames;
          return;
        }
        if (this.lastDecodedFrame != res.decodedFrames) {
          this.lastDecodedFrame = res.decodedFrames;
        } else {
            this.lastDecodedFrame = 0;
            if (this.player) {
              this.player.pause();
              this.player.unload();
              this.player.detachMediaElement();
              this.player.destroy();
              this.player= null;
              this.createPlayer(videoElement, this.props.url);
          }
        }
      });
      flvPlayer.on(flvjs.Events.MEDIA_SOURCE_CLOSE||flvjs.Events.MEDIA_SOURCE_ENDED, (res) =>{
        console.log('Events.MEDIA_SOURCE_CLOSE or Events.MEDIA_SOURCE_ENDED',res)
      })
    }
  }

  componentWillUnmount() {
    if (this.flvPlayer) {
      this.flvPlayer.unload();
      this.flvPlayer.detachMediaElement();
    }
  }

  render() {
    return (
      <video id="videoElement" controls muted style={{width: '100vw',height: '100%',}}/>
    );
  }
}
