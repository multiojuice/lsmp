import React from 'react';
import { ContentDiv } from './styledComponents';
import {
  SpotifySelectedAlbum,
  SpotifySelectedTrack,
  SpotifySelectedArtist,
  SpotifySelectedPlaylist
} from './spotify_selected';
import { YoutubeSelectedVideo } from './youtube_selected';
import { SoundcloudSelectedArtist } from './soundcloud_selected';
import { GithubSelectedRepo, GithubSelectedUser } from './github_selected';

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
      return <YoutubeSelectedVideo data={props.data} />;

    case 'soundcloud':
      return <SoundcloudSelectedArtist data={props.data} />;

    case 'github-repo':
      return <GithubSelectedRepo data={props.data} />

    case 'github-user':
      return <GithubSelectedUser data={props.data} />

    case 'vimeo-video':
      return (
        <ContentDiv>
          <div dangerouslySetInnerHTML={{ __html: props.data.embed.html }} />
        </ContentDiv>
      );

    case 'dailymotion-video':
      return (
        <ContentDiv>
          <div dangerouslySetInnerHTML={{ __html: props.data.embed }} />
        </ContentDiv>
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
