import React, { Component } from 'react';
import axios from 'axios';
import SpotifyItem from './spotify_item';
import SpotifyLogo from '../../assets/SpotifyLogo.png';

const AUTH_TOKEN = '';

class SpotifyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content : null,
      prevSearchTerm: this.props.searchTerm,
      onSelectContent: this.props.onSelectContent
    }

    this.getContent = this.getContent.bind(this);
  }

  renderItems() {
    const items = this.state.content.data.albums.items.map( item => {
      return <SpotifyItem
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

  getContent(searchTerm) {
    axios.get(`https://api.spotify.com/v1/search?q=${searchTerm}&type=album&limit=4`, { headers: { Authorization: 'Bearer ' + AUTH_TOKEN } })
    .then(content => { console.log(content); this.setState({ content, prevSearchTerm: searchTerm })});
  }

  render() {
    if(this.props.searchTerm !== this.state.prevSearchTerm) this.getContent(this.props.searchTerm);

    if (!this.state.content)
      return (
        <div>
          <div style={{width: '100%'}}>
            <img className='spotify-logo' src={SpotifyLogo}/>
          </div>
        </div>
      );

    return (
      <div>
        <div style={{width: '100%'}}>
          <img className='spotify-logo' src={SpotifyLogo}/>
        </div>
        {this.renderItems()}
      </div>
    );
  }

};

export default SpotifyContent;
