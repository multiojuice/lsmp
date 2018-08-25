import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {

  const videoImage = video.snippet.thumbnails.medium.url;

  return (
    <div className='youtube-item-div' onClick={() => onVideoSelect(video)}>
      <div>
        <img src={videoImage}/>
      </div>
    </div>
  );
};

export default VideoListItem;
