import _ from 'lodash';
import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import YoutubeContent from './components/youtube/youtube_content';
import SpotifyContent from './components/spotify/spotify_content';
import GithubContent from './components/github/github_content';
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
      selectedData: null,
      intervalId: 0
    };
    //this.getAuthTokens();
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.getAuthTokens = this.getAuthTokens.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.onSelectContent = this.onSelectContent.bind(this);
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

  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - 15);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), 2);
    this.setState({ intervalId: intervalId });
  }

  onSelectContent(selectedType,selectedData) {
    this.setState({ selectedType, selectedData });
    this.scrollToTop();
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
        <div className='content-container-github'>
          <GithubContent
            onSelectContent={this.onSelectContent}
            searchTerm={this.state.searchTerm} />
        </div>
        <div className='content-container'>
          <SoundcloudContent
            onSelectContent={this.onSelectContent}
            searchTerm={this.state.searchTerm} />
        </div>
        <div className='content-container'>
          <YoutubeContent
            onSelectContent={this.onSelectContent}
            videos={this.state.videos}/>
        </div>
        <div className='content-container'>
          <SpotifyContent
            onSelectContent={this.onSelectContent}
            searchTerm={this.state.searchTerm} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.app'));
