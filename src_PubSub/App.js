import React, { Component } from 'react'

import SearchBar from './components/SearchBar';
import List from './components/List'
export default class App extends Component {


  render() {
    return (
      <div className="container">
          <SearchBar/>
          <List/>
      </div>
    )
  }
}


