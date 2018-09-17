import React from 'react';
import YoutubeLogo from '../../assets/YoutubeLogo.png';
import SpotifyLogo from '../../assets/SpotifyLogo.png';
import { ContentDiv } from './styledComponents';
import {
  SpotifySelectedAlbum,
  SpotifySelectedTrack,
  SpotifySelectedArtist,
  SpotifySelectedPlaylist
} from './spotify_selected';

const SelectedContent = (props) => {

  switch(props.type) {
    case 'spotify-album':
      return <SpotifySelectedAlbum data={props.data} />;

    case 'spotify-artist':
      return <SpotifySelectedArtist data={props.data} />;

    case 'spotify-playlist':
      return <SpotifySelectedPlaylist data={props.data} />;

    case 'spotify-track':
      return <SpotifySelectedTrack data={props.data} />;

    case 'youtube':
      return (
        <ContentDiv>
          <div className='youtube-div'>
            <img src={YoutubeLogo} className='youtube-logo' />
            <h3>{props.data.snippet.title}</h3>
            <p>{props.data.snippet.description}</p>
          </div>
            <iframe className='youtube-video-player' src={`https://youtube.com/embed/${props.data.id.videoId}`} />
        </ContentDiv>
      );
    case 'soundcloud':
      return(
        <ContentDiv>
          <iframe width="50%" height="100%" scrolling="no" frameBorder="no"
            src={`https://w.soundcloud.com/player/?url=${props.data.userLink}&amp;show_user=false`}>
          </iframe>
          <div className='soundcloud-div'>
            <img src={props.data.imageUrl} />
            <h2 href={props.data.userLink}>{props.data.userName}</h2>
            <p>{props.data.description}</p>
          </div>
        </ContentDiv>
      );

    case 'github-repo':
      return (
        <ContentDiv>
          <h1>{props.data.name}</h1>
          <h2>{props.data.owner.login}</h2>
          <h3>{props.data.language}</h3>
          <p>{props.data.description}</p>
        </ContentDiv>
      );

    case 'github-user':
      return (
        <ContentDiv>
          <h1>{props.data.name}</h1>
          <h2>{props.data.score}</h2>
          <h3>{props.data.avatar_url}</h3>
        </ContentDiv>
      )

    case 'vimeo-video':
      return (
        <div dangerouslySetInnerHTML={{ __html: props.data.embed.html }} />
      );

    case 'dailymotion-video':
      return (
        <div dangerouslySetInnerHTML={{ __html: props.data.embed }} />
      );

    case 'preferences':
      return (
        <ContentDiv>
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
        </ContentDiv>
      );

    default:
      return null;
  }
};

export default SelectedContent;
