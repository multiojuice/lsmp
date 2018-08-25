import React, { Component } from 'react';
import axios from 'axios';

class SpotifyContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.searchTerm}</div>;
  }

};

export default SpotifyContent;
