import React, { Component } from 'react'

class SearchBar extends Component {
  render () {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label htmlFor='video'>Video Search </label>
            <input type='text' name='search' autoComplete='off' placeholder='Search' />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
