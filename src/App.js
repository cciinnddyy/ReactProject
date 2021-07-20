import React, { Component } from 'react'

import SearchBar from './components/SearchBar';
import List from './components/List'
export default class App extends Component {
  state = {
    data:[]
  }
  GetSearch = (Data)=>{
    this.setState({data:Data.items})
  }
  render() {
    return (
      <div className="container">
          <SearchBar onSearch = {this.GetSearch}/>
          <List gitAvatar={this.state.data}/>
      </div>
    )
  }
}


