import React from 'react';
import SpotifyLogo from '../../assets/SpotifyLogo.png';
import { ContentDiv, SpotifyDiv, LogoImg, SpotifySelected } from './styledComponents';

// Artist Follow Button
// <iframe src={`https://open.spotify.com/follow/1/?uri=spotify:artist:${props.data.id}`} allow="encrypted-media" height="56" frameBorder="0" allowtransparency="true" />

export const SpotifySelectedAlbum = (props) => {
  return (
    <ContentDiv>
      <iframe src={`https://open.spotify.com/embed/album/${props.data.id}`} allow="encrypted-media" height="100%" frameBorder="0" allowtransparency="true" style={{width: '100%', 'maxWidth': '1200px', background:'transparent', overflow: 'hidden'}}/>
    </ContentDiv>
  );
}

export const SpotifySelectedArtist = (props) => {
  return (
    <ContentDiv>
      <iframe src={`https://open.spotify.com/embed/artist/${props.data.id}`} allow="encrypted-media" height="100%" frameBorder="0" allowtransparency="true" style={{width: '100%', 'maxWidth': '1200px', background:'transparent', overflow: 'hidden'}}/>
    </ContentDiv>
  );
}

export const SpotifySelectedPlaylist = (props) => {
  return (
    <ContentDiv>
      <SpotifyDiv>
        <LogoImg src={SpotifyLogo} />
      </SpotifyDiv>
      <SpotifySelected>
        <h1>{props.data.name}</h1>
        <h2>{props.data.owner}</h2>
        <h2>{props.data.collabrative ? 'This is a collabrative playlist!' : 'This isn\'t collabrative'}</h2>
      </SpotifySelected>
    </ContentDiv>
  );
}

export const SpotifySelectedTrack = (props) => {
  return (
    <ContentDiv>
      <iframe src={`https://open.spotify.com/embed/album/${props.data.albumId}`} allow="encrypted-media" height="100%" frameBorder="0" allowtransparency="true" style={{width: '100%', 'maxWidth': '1200px', background:'transparent', overflow: 'hidden'}}/>
    </ContentDiv>
  );
}
