import React, { Component } from 'react'
import SearchBar from './SearchBar'

class App extends Component {
  render () {
    return (
      <div className='ui container' style={{ margin: '1rem' }}>
        <SearchBar />
      </div>
    )
  }
}

export default App
