import React from 'react';
import YouTube from 'react-youtube';
import './YouTubeComp.css';
 
class YouTubeComp extends React.Component {
  render() {
    const opts = {
      height: '548',
      width: '900',
      playerVars: {//https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
 
    return (
      <YouTube
        videoId="Oa3D8hov6h8"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default YouTubeComp;