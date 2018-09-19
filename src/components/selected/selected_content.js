import React from 'react';
import {
  ContentDiv,
  PreferencesDiv,
  PreferencesWrapper,
  PreferencesButton,
  ButtonContainer,
  ButtonWrapper
} from './styledComponents';
import {
  SpotifySelectedAlbum,
  SpotifySelectedTrack,
  SpotifySelectedArtist,
  SpotifySelectedPlaylist
} from './spotify_selected';
import {
  AppleMusicSelectedAlbum
} from './apple_music_selected';
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

    case 'apple-album':
      return <AppleMusicSelectedAlbum data={props.data} />

    case 'vimeo-video':
      let id = (props.data.uri).split('/')[2];
      return (
        <ContentDiv>
          <iframe src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=134035`} allow="autoplay *; encrypted-media *;" frameBorder="0" allowFullScreen sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" style={{width: '100%', 'max-width': '1200px', background:'transparent', overflow: 'hidden'}}></iframe>
        </ContentDiv>

      );

    case 'dailymotion-video':
      return (
        <ContentDiv>
          <iframe allow="autoplay *; encrypted-media *;" frameBorder="0" allowFullScreen sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" style={{width: '100%', 'max-width': '1200px', background:'transparent', overflow: 'hidden'}} src={`//www.dailymotion.com/embed/video/${props.data.id}`} ></iframe>
        </ContentDiv>
      );

    case 'preferences':
      return (
        <PreferencesWrapper>
          <h1>List services by:</h1>
          <PreferencesDiv>
            <h2>Github</h2>
            <ButtonWrapper>
              <PreferencesButton onClick={() => props.setPreferences({github: 'repositories'})} >Repository</PreferencesButton>
            </ButtonWrapper>
            <ButtonWrapper>
              <PreferencesButton onClick={() => props.setPreferences({github: 'users'})} >User</PreferencesButton>
            </ButtonWrapper>
          </PreferencesDiv>
          <PreferencesDiv>
            <h2>Spotify</h2>
            <ButtonWrapper>
              <PreferencesButton onClick={() => props.setPreferences({spotify: 'album'})}>Album</PreferencesButton>
            </ButtonWrapper>
            <ButtonWrapper>
              <PreferencesButton onClick={() => props.setPreferences({spotify: 'artist'})}>Artist</PreferencesButton>
            </ButtonWrapper>
            <ButtonWrapper>
              <PreferencesButton onClick={() => props.setPreferences({spotify: 'track'})}>Song</PreferencesButton>
            </ButtonWrapper>
            <ButtonWrapper>
              <PreferencesButton onClick={() => props.setPreferences({spotify: 'playlist'})}>Playlist</PreferencesButton>
            </ButtonWrapper>
          </PreferencesDiv>
          <PreferencesDiv>
            <h2>Apple Music</h2>
            <ButtonContainer>
              <ButtonWrapper>
                <PreferencesButton onClick={() => props.setPreferences({appleMusic: 'albums'})}>Album</PreferencesButton>
              </ButtonWrapper>
              <ButtonWrapper>
                <PreferencesButton onClick={() => props.setPreferences({appleMusic: 'artists'})}>Artist</PreferencesButton>
              </ButtonWrapper>
              <ButtonWrapper>
                <PreferencesButton onClick={() => props.setPreferences({appleMusic: 'songs'})}>Song</PreferencesButton>
              </ButtonWrapper>
              <ButtonWrapper>
                <PreferencesButton onClick={() => props.setPreferences({appleMusic: 'playlists'})}>Playlist</PreferencesButton>
              </ButtonWrapper>
            </ButtonContainer>
          </PreferencesDiv>
        </PreferencesWrapper>
      );

    default:
      return null;
  }
};

export default SelectedContent;
