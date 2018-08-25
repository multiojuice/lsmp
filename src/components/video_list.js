import React from 'react';
import VideoListItem from './video_list_item';
import YoutubeLogo from '../assets/YoutubeLogo.png';
const VideoList = (props) => {

  const videoItems = props.videos.slice(0,4).map((video) => {
    return (<VideoListItem
      onVideoSelect={props.onVideoSelect}
      key={video.etag}
      video={video} />
    );
  });

  return (
    <div>
      <div>
        <img className='youtube-logo' src={YoutubeLogo} />
      </div>
      {videoItems}
    </div>
  );
};

export default VideoList;
