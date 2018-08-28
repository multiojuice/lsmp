import React from 'react';
import YoutubeLogo from '../assets/YoutubeLogo.png';
import SpotifyLogo from '../assets/SpotifyLogo.png';

const SelectedContent = (props) => {

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
      return (
        <div className='selected-content'>
          <div className='youtube-div'>
            <img src={YoutubeLogo} className='youtube-logo' />
            <h3>{props.data.snippet.title}</h3>
            <p>{props.data.snippet.description}</p>
          </div>
            <iframe className='youtube-video-player' src={`https://youtube.com/embed/${props.data.id.videoId}`} />
        </div>
      );
    case 'soundcloud':
      return(
        <div className='selected-content'>
          <iframe width="50%" height="100%" scrolling="no" frameBorder="no"
            src={`https://w.soundcloud.com/player/?url=${props.data.userLink}&amp;show_user=false`}>
          </iframe>
          <div className='soundcloud-div'>
            <img src={props.data.imageUrl} />
            <h2 href={props.data.userLink}>{props.data.userName}</h2>
            <p>{props.data.description}</p>
          </div>
        </div>
      );

    case 'github':
      return (
        <div className='selected-content'>
          <h1>{props.data.name}</h1>
          <h2>{props.data.owner.login}</h2>
          <h3>{props.data.language}</h3>
          <p>{props.data.description}</p>
        </div>
      );

    default:
      return null;
  }
};

export default SelectedContent;
