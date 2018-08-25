import React, { Component } from 'react';
import axios from 'axios';
import SpotifyItem from './spotify_item';

const AUTH_TOKEN = '';

class SpotifyContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content : null,
      prevSearchTerm: this.props.searchTerm
    }

    this.getContent = this.getContent.bind(this);
  }

  renderItems() {
    const items = this.state.content.data.albums.items.map( item => {
      return <SpotifyItem
                key={item.id}
                imageUrl={item.images[1].url}
                artistName={item.artists[0].name}
                artistLink={item.artists[0].external_urls.spotify}
                albumName={item.name}
                albumLink={item.external_urls.spotify}
              />;
    });
    return <ul>{items}</ul>
  }

  getContent(searchTerm) {
    axios.get(`https://api.spotify.com/v1/search?q=${searchTerm}&type=album&limit=5`, { headers: { Authorization: 'Bearer ' + AUTH_TOKEN } })
    .then(content => { console.log(content); this.setState({ content, prevSearchTerm: searchTerm })});
  }

  render() {
    if(this.props.searchTerm !== this.state.prevSearchTerm) this.getContent(this.props.searchTerm);

    if (!this.state.content) return null;

    return this.renderItems();
  }

};

export default SpotifyContent;
