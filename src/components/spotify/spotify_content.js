import React, { Component } from 'react';
import axios from 'axios';
import SpotifyAlbum from './spotify_album';
import SpotifyArtist from './spotify_artist';
import SpotifyPlaylist from './spotify_playlist';
import SpotifyTrack from './spotify_track';
import SpotifyLogo from '../../assets/SpotifyLogo.png';

let ACCESS_TOKEN = '';

class SpotifyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content : null,
      prevSearchTerm: this.props.searchTerm,
      onSelectContent: this.props.onSelectContent,
      isSignedIn: true
    }

    ACCESS_TOKEN = this.checkForAccessToken();

    this.getContent = this.getContent.bind(this);
  }

  checkForAccessToken() {
    if(!window.location.hash) return '';

    const firstValue = window.location.hash.substr(1).split("&")[0];

    if (firstValue.slice(0,12) == 'access_token') return firstValue.slice(13);

    return '';
  }

  renderAlbums() {
    const items = this.state.content.data.albums.items.map( item => {
      return <SpotifyAlbum
                onSelectContent={this.state.onSelectContent}
                key={item.id}
                id={item.id}
                imageUrl={item.images[1].url}
                artistName={item.artists[0].name}
                artistLink={item.artists[0].external_urls.spotify}
                artistId={item.artists[0].id}
                albumName={item.name}
                albumLink={item.external_urls.spotify}
              />;
    });
    return items;
  }

  renderArtists() {
    const items = this.state.content.data.artists.items.map( item => {
      return <SpotifyArtist
                onSelectContent={this.state.onSelectContent}
                key={item.id}
                id={item.id}
                imageUrl={item.images[1].url}
                name={item.name}
                popularity={item.popularity}
                artistLink={item.external_urls.spotify}
                genre={item.genres[0]}
                followers={item.followers.total}
              />;
    });
    return items;
  }

  renderPlaylists() {
    const items = this.state.content.data.playlists.items.map( item => {
      return <SpotifyPlaylist
                onSelectContent={this.state.onSelectContent}
                key={item.id}
                id={item.id}
                imageUrl={item.images[0].url}
                name={item.name}
                trackNumber={item.tracks.total}
                owner={item.owner.display_name}
                collabrative={item.collabrative}
              />;
    });
    return items;
  }

  renderTracks() {
    const items = this.state.content.data.tracks.items.map( item => {
      return <SpotifyArtist
                onSelectContent={this.state.onSelectContent}
                key={item.id}
                id={item.id}
                imageUrl={item.album.images[1].url}
                name={item.name}
                albumId={item.album.id}
                albumName={item.album.name}
                artistId={item.artist[0].id}
                trackNumber={item.track_number}
              />;
    });
    return items;
  }

  getContent(searchTerm) {
    axios.get(`https://api.spotify.com/v1/search?q=${searchTerm}&type=${this.props.searchType}&limit=4`, { headers: { Authorization: 'Bearer ' + ACCESS_TOKEN } })
    .then(content => { console.warn('spotify', content); this.setState({ content, prevSearchTerm: searchTerm, loadContentType: this.props.searchType })}).catch(() => this.setState({isSignedIn: false, prevSearchTerm: searchTerm}));
  }

  render() {
    if(this.props.searchTerm !== this.state.prevSearchTerm) this.getContent(this.props.searchTerm);

    if(!this.state.isSignedIn) {
      return(
        <div>
          <div style={{width: '100%'}}>
            <img className='spotify-logo' src={SpotifyLogo} />
            <a href={`https://accounts.spotify.com/authorize?client_id=7c4ef6453595449ea792b8f54c79bcfe&redirect_uri=http:%2F%2F${window.location.host}%2F&response_type=token`}>Click here to enable spotify</a>
          </div>
        </div>
      );
    }

    if (!this.state.content)
      return (
        <div>
          <div style={{width: '100%'}}>
            <img className='spotify-logo' src={SpotifyLogo} />
          </div>
        </div>
      );

    switch (this.state.loadContentType) {
      case 'album':
        return (
          <div>
            <div style={{width: '100%'}}>
              <img className='spotify-logo' src={SpotifyLogo} />
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

      case 'track':
        return (
          <div>
            <div style={{width: '100%'}}>
              <img className='spotify-logo' src={SpotifyLogo} />
            </div>
            {this.renderTracks()}
          </div>
        );
    }

  }

};

export default SpotifyContent;
