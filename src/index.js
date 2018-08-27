import _ from 'lodash';
import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import YoutubeContent from './components/youtube/youtube_content';
import SpotifyContent from './components/spotify/spotify_content';
import GithubContent from './components/github_content';
import SoundcloudContent from './components/soundcloud/soundcloud_content';
import SelectedContent from './components/selected_content';


const API_KEY = 'AIzaSyD-CXa5zq84ScwCZQcAvMNy2jXgw9aNUMc';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      searchTerm: '',
      selectedType: '',
      selectedData: null
    };
    //this.getAuthTokens();
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.getAuthTokens = this.getAuthTokens.bind(this);
  }

  getAuthTokens() {
    axios.get('https://accounts.spotify.com/authorize/?client_id=7c4ef6453595449ea792b8f54c79bcfe&response_type=code&redirect_uri=localhost%3A8080&scope=user-read-private%20user-read-email',
    { headers: { 'Access-Control-Allow-Origin' : '*' } } )
    .then(response => console.warn(response));
  }

  handleTermChange(tempTerm) {
    this.setState({tempTerm});
  }

  handleSearch() {
    this.videoSearch(this.state.tempTerm);
    this.setState({ searchTerm: this.state.tempTerm, selectedType: '', selectedData: null })
  }

  videoSearch(searchTerm) {
    YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    })
  }

  render() {
    return (
      <div>
        <h1 className='title'><b>L|S|M|P</b> ~ list media please</h1>
        <div>
          <SearchBar
            handleClick={this.handleSearch}
            onSearchTermChange={this.handleTermChange} />
        </div>
        <SelectedContent
          type={this.state.selectedType}
          data={this.state.selectedData}
          />
        <div className='content-container'>
          <SoundcloudContent
            onSelectContent={(selectedType,selectedData) => this.setState({ selectedType, selectedData })}
            searchTerm={this.state.searchTerm} />
        </div>
        <div className='content-container'>
          <YoutubeContent
            onSelectContent={(selectedType,selectedData) => this.setState({ selectedType, selectedData })}
            videos={this.state.videos}/>
        </div>
        <div className='content-container'>
          <SpotifyContent
            onSelectContent={(selectedType,selectedData) => this.setState({ selectedType, selectedData })}
            searchTerm={this.state.searchTerm} />
        </div>
        <div className='whole-background'>
          <div className='skewed-background background-light'/>
          <div className='skewed-background background-medium'/>
          <div className='skewed-background background-dark'/>
          <div className='skewed-background background-standard'/>
          <div className='skewed-background background-light'/>
          <div className='skewed-background background-medium'/>
          <div className='skewed-background background-dark'/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.app'));
