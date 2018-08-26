import React from 'react';
import YoutubeLogo from '../assets/YoutubeLogo.png';
import SpotifyLogo from '../assets/SpotifyLogo.png';

const SelectedContent = (props) => {
  console.log(props)

  switch(props.type) {
    case 'spotify':
      return (
        <div className='selected-content'>
          <div className='spotify-div'>
            <img src={SpotifyLogo} className='spotify-logo' />
          </div>
          <iframe src={`https://open.spotify.com/embed/album/${props.data.id}`} allow="encrypted-media" width="500" height="380" frameBorder="0" allowtransparency="true" />
          <iframe src={`https://open.spotify.com/follow/1/?uri=spotify:artist:${props.data.artistId}`} allow="encrypted-media" height="56" frameBorder="0" allowtransparency="true" />
        </div>
      );

    case 'youtube':
      return null;

    default:
      return null;
  }
};

export default SelectedContent;
