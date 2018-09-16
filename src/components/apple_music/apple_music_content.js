import React, { Component } from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import AppleMusicAlbum from './apple_music_album';
import AppleMusicArtist from './apple_music_artist';
import AppleMusicPlaylist from './apple_music_playlist';
import AppleMusicLogo2 from '../../assets/AppleMusicLogo2.png';

const ACCESS_TOKEN = 'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ijg5N0E1RkE4WkEifQ.eyJpYXQiOjE1MzAxMDUwNjQsImV4cCI6MTU0NTY1NzA2NCwiaXNzIjoiWkY5OUdFOVI1VyJ9.JRN6e__NCO8Yjhj2ynJV20RbPOuNDo9WLcR_lYg1B348ea4BembEqraV53MF-c14jxKYk_0pRjjJlhmF3lkmdw'

class AppleMusicContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content : null,
      prevSearchTerm: this.props.searchTerm,
      onSelectContent: this.props.onSelectContent
    }

    this.getContent = this.getContent.bind(this);
  }

  renderAlbums() {
    const items = this.state.content.data.results.albums.data.map( item => {
      return <AppleMusicAlbum
                onSelectContent={this.state.onSelectContent}
                key={item.id}
                id={item.id}
                imageUrl={item.attributes.artwork.url}
                artistName={item.attributes.artistName}
                albumName={item.attributes.name}
                albumLink={item.href}
              />;
    });
    return items;
  }

  renderArtists() {
    const items = this.state.content.data.results.artists.data.map( item => {
      return <AppleMusicAlbum
                onSelectContent={this.state.onSelectContent}
                key={item.id}
                id={item.id}
                imageUrl={item.attributes.artwork.url}
                artistName={item.attributes.name}
                artistink={item.href}
                genre={item.attributes.genreNames[0]}
              />;
    });
    return items;
  }

  renderPlaylists() {
    const items = this.state.content.data.playlists.items.map( item => {
      return <AppleMusicPlaylist
                onSelectContent={this.state.onSelectContent}
                key={item.id}
                id={item.id}
                imageUrl={item.attributes.artwork.url}
                curatorName={item.attributes.curatorName}
                description={item.attributes.description}
                name={item.attributes.name}
                playlistLink={item.href}
              />;
    });
    return items;
  }

  renderTracks() {
    const items = this.state.content.data.tracks.items.map( item => {
      return <SpotifyTrack
                onSelectContent={this.state.onSelectContent}
                key={item.id}
                id={item.id}
                imageUrl={item.album.images[1].url}
                name={item.name}
                albumId={item.album.id}
                albumName={item.album.name}
                artistId={item.artists[0].id}
                trackNumber={item.track_number}
              />;
    });
    return items;
  }

  getContent(searchTerm) {
    axios.get(`https://api.music.apple.com/v1/catalog/us/search?term=${searchTerm}&types=${this.props.searchType}&limit=4`,
      { headers: { Authorization: 'Bearer ' + ACCESS_TOKEN } })
    .then(content => { console.warn('apple music', content); this.setState({ content, prevSearchTerm: searchTerm, loadContentType: this.props.searchType })}).catch(() => this.setState({ prevSearchTerm: searchTerm }));
  }

  render() {
    if(this.props.searchTerm !== this.state.prevSearchTerm) this.getContent(this.props.searchTerm);

    if (!this.state.content)
      return (
        <div>
          <div style={{width: '100%'}}>
            <img className='spotify-logo' src={AppleMusicLogo2} />
          </div>
        </div>
      );

    switch (this.state.loadContentType) {
      case 'albums':
        return (
          <div>
            <div style={{width: '100%'}}>
              <img className='spotify-logo' src={AppleMusicLogo2} />
            </div>
            {this.renderAlbums()}
          </div>
        );

      case 'artist':
        return (
          <div>
            <div style={{width: '100%'}}>
              <img className='spotify-logo' src={SpotifyLogo} />
            </div>
            {this.renderArtists()}
          </div>
        );

      case 'playlist':
        return (
          <div>
            <div style={{width: '100%'}}>
              <img className='spotify-logo' src={SpotifyLogo} />
            </div>
            {this.renderPlaylists()}
          </div>
        );

      // case 'track':
      //   return (
      //     <div>
      //       <div style={{width: '100%'}}>
      //         <img className='spotify-logo' src={SpotifyLogo} />
      //       </div>
      //       {this.renderTracks()}
      //     </div>
      //   );
    }
  }
};

export default AppleMusicContent;
