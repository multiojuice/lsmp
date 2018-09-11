import React from 'react';
import YoutubeLogo from '../assets/YoutubeLogo.png';
import SpotifyLogo from '../assets/SpotifyLogo.png';

const SelectedContent = (props) => {

  switch(props.type) {
    case 'spotify-album':
      return (
        <div className='selected-content'>
          <div className='spotify-div'>
            <img src={SpotifyLogo} className='spotify-logo' />
          </div>
          <iframe src={`https://open.spotify.com/embed/album/${props.data.id}`} allow="encrypted-media" width="500" height="380" frameBorder="0" allowtransparency="true" />
          <iframe src={`https://open.spotify.com/follow/1/?uri=spotify:artist:${props.data.artistId}`} allow="encrypted-media" height="56" frameBorder="0" allowtransparency="true" />
        </div>
      );

      case 'spotify-artist':
        return (
          <div className='selected-content'>
            <div className='spotify-div'>
              <img src={SpotifyLogo} className='spotify-logo' />
            </div>
            <iframe src={`https://open.spotify.com/embed/artist/${props.data.id}`} allow="encrypted-media" width="500" height="380" frameBorder="0" allowtransparency="true" />
            <div className='spotify-selected'>
              <h1>{props.data.name}</h1>
              <h2>{props.data.genre}</h2>
              <h2>{props.data.popularity}</h2>
              <iframe src={`https://open.spotify.com/follow/1/?uri=spotify:artist:${props.data.id}`} allow="encrypted-media" height="56" frameBorder="0" allowtransparency="true" />
            </div>
          </div>
        );

    case 'spotify-playlist':
      return (
        <div className='selected-content'>
          <div className='spotify-div'>
            <img src={SpotifyLogo} className='spotify-logo' />
          </div>
          <div className='spotify-selected'>
            <h1>{props.data.name}</h1>
            <h2>{props.data.owner}</h2>
            <h2>{props.data.collabrative ? 'This is a collabrative playlist!' : 'This isn\'t collabrative'}</h2>
          </div>
        </div>
      );

    case 'spotify-track':
      return (
        <div className='selected-content'>
          <div className='spotify-div'>
            <img src={SpotifyLogo} className='spotify-logo' />
          </div>
          <iframe src={`https://open.spotify.com/embed/album/${props.data.albumId}`} allow="encrypted-media" width="500" height="380" frameBorder="0" allowtransparency="true" />
          <div className='spotify-selected'>
            <h1>{props.data.name}</h1>
            <h2>Track number {props.data.trackNumber}</h2>
            <iframe src={`https://open.spotify.com/follow/1/?uri=spotify:artist:${props.data.artistId}`} allow="encrypted-media" height="56" frameBorder="0" allowtransparency="true" />
          </div>
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

    case 'github-repo':
      return (
        <div className='selected-content'>
          <h1>{props.data.name}</h1>
          <h2>{props.data.owner.login}</h2>
          <h3>{props.data.language}</h3>
          <p>{props.data.description}</p>
        </div>
      );

    case 'github-user':
      return (
        <div className='selected-content'>
          <h1>{props.data.name}</h1>
          <h2>{props.data.score}</h2>
          <h3>{props.data.avatar_url}</h3>
        </div>
      )

    case 'preferences':
      return (
        <div className='selected-content'>
          <h1>List services by:</h1>
          <div>
            <h2>Github</h2>
            <button onClick={() => props.setPreferences({github: 'repositories'})} >Repository</button>
            <button onClick={() => props.setPreferences({github: 'users'})} >User</button>
          </div>
          <div>
            <h2>Spotify</h2>
            <button onClick={() => props.setPreferences({spotify: 'album'})}>Album</button>
            <button onClick={() => props.setPreferences({spotify: 'artist'})}>Artist</button>
            <button onClick={() => props.setPreferences({spotify: 'track'})}>Song</button>
            <button onClick={() => props.setPreferences({spotify: 'playlist'})}>Playlist</button>
          </div>
          <div>
            <h2>Apple Music</h2>
            <button onClick={() => props.setPreferences({appleMusic: 'albums'})}>Album</button>
            <button onClick={() => props.setPreferences({appleMusic: 'artists'})}>Artist</button>
            <button onClick={() => props.setPreferences({appleMusic: 'songs'})}>Song</button>
            <button onClick={() => props.setPreferences({appleMusic: 'playlists'})}>Playlist</button>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default SelectedContent;
