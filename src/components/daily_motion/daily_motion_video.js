import React from 'react';

const SampleItem = ({ onSelectContent, embed, id, channel, name, imageUrl, ownerId}) => {

  return (
      <div onClick={() => onSelectContent('dailymotion-video',{imageUrl, embed})} className='spotify-item-div'>
        <img src={imageUrl}/>
        <p>{name}</p>
      </div>
  );
};

export default SampleItem;
