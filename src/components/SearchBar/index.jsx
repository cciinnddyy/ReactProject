import React, { Component } from 'react'
import axios from 'axios';

export default class SearchBar extends Component {
    onSearch = ()=>{
        console.log(this.keyWordElement.value)
        axios.get(`http://localhost:3000/api1/search/users2?q=${this.keyWordElement.value}`).then(
          Response=>{console.log("Success ", Response.data)
          this.props.onSearch(Response.data)
        },
          Error =>{console.log("Failed")}
        )
        
    }
    render() {
        return (
            <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
              <input type="text" placeholder="enter the name you search" ref={c=>this.keyWordElement = c}/>&nbsp;<button onClick={this.onSearch}>Search</button>
            </div>
          </section>
        )
    }
}
