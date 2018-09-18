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
