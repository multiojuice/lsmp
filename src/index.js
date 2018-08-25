import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import SpotifyContent from './components/spotify_content';

const API_KEY = 'AIzaSyD-CXa5zq84ScwCZQcAvMNy2jXgw9aNUMc';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      searchTerm: 'surfing'
    };
    this.videoSearch('surfing');
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(searchTerm) {
    this.setState({searchTerm});
    this.videoSearch(searchTerm);
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
    const videoSearch = _.debounce((searchTerm) => {this.videoSearch(searchTerm)}, 300);
    return (
      <div>
        <h1 className='title'><b>L|S|M|P</b> ~ list media please</h1>
        <div>
        <SearchBar onSearchTermChange={this.handleSearchChange} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
        </div>
        <div>
          <SpotifyContent
            searchTerm={this.state.searchTerm} />
        </div>

        <div className='skewed-background background-light'/>
        <div className='skewed-background background-medium'/>
        <div className='skewed-background background-dark'/>
        <div className='skewed-background background-standard'/>
        <div className='skewed-background background-light'/>
        <div className='skewed-background background-medium'/>
        <div className='skewed-background background-dark'/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.app'));
