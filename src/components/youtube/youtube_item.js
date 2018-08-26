import React from 'react';

const YoutubeItem = ({video, onSelectContent}) => {

  const videoImage = video.snippet.thumbnails.medium.url;

  return (
    <div className='youtube-item-div' onClick={() => onSelectContent('youtube', video)}>
      <div>
        <img src={videoImage}/>
      </div>
    </div>
  );
};

export default YoutubeItem;
