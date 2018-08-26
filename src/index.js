import _ from 'lodash';
import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import SpotifyContent from './components/spotify/spotify_content';
import GithubContent from './components/github_content';
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
    this.setState({ searchTerm: this.state.tempTerm })
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
          <SearchBar onSearchTermChange={this.handleTermChange} />
          <button onClick={this.handleSearch}>List it!</button>
        </div>
        <SelectedContent
          type={this.state.selectedType}
          data={this.state.selectedData}
          />
        <div className='content-container'>
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}/>
        </div>
        <div className='content-container'>
          <SpotifyContent
            onSelectContent={(selectedType,selectedData) => this.setState({ selectedType, selectedData })}
            searchTerm={this.state.searchTerm} />
        </div>
        <a href="https://accounts.spotify.com/authorize?client_id=7c4ef6453595449ea792b8f54c79bcfe&redirect_uri=http:%2F%2Flocalhost:8080%2F&response_type=token">Temporary spotify auth</a>
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
