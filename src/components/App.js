import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube, { API_KEY } from '../apis/youtube'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount(){
    this.onSearchTermSubmit('Diamond Platnumz')
  }

  onSearchTermSubmit = async (searchTerm) => {
    const response = await youtube.get('/search', {
      params: {
        q: searchTerm,
        part: 'snippet',
        maxResults: 5,
        key: API_KEY
      }
    })
    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
     }) 
  }
   
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render () {
    return (
      <div className='ui container' style={{ margin: '1rem' }}>
        <SearchBar callback={this.onSearchTermSubmit}/>
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className='five wide column'>
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
