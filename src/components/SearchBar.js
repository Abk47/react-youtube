import React, { Component } from 'react'

class SearchBar extends Component {
  state = { searchTerm: '' }

  onInputChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    // We do a callback from the parent component
    this.props.callback(this.state.searchTerm)
  }

  render () {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form' onSubmit={this.handleFormSubmit}>
          <div className='field'>
            <label htmlFor='video'>Video Search </label>
            <input 
            type='text' 
            name='search'
            placeholder='Search'
            value={this.state.searchTerm} 
            onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
