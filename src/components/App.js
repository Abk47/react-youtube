import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube, { API_KEY } from '../apis/youtube'
import VideoList from './VideoList';

class App extends Component {
  state = {
    videos: []
  }

  onSearchTermSubmit = async (searchTerm) => {
    const response = await youtube.get('/search', {
      params: {
        q: searchTerm,
        part: 'snippet',
        maxResults: 10,
        key: API_KEY
      }
    })
    this.setState({ videos: response.data.items }) 
  }
   
  render () {
    return (
      <div className='ui container' style={{ margin: '1rem' }}>
        <SearchBar callback={this.onSearchTermSubmit}/>
        Search Results: {this.state.videos.length}
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

export default App
