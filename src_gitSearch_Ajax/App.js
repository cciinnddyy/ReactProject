import React, { Component } from 'react'

import SearchBar from './components/SearchBar';
import List from './components/List'
export default class App extends Component {
  state = {
    data:[],
    initiate:true,
    isLoading:false,
    errMsg:''
  }

  updateState = (stateObj)=>{
    this.setState(stateObj)
  }

  render() {
    return (
      <div className="container">
          <SearchBar onSearch = {this.updateState}/>
          <List {...this.state}/>
      </div>
    )
  }
}


