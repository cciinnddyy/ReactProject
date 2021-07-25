import React, { Component } from 'react'
import axios from 'axios';

export default class SearchBar extends Component {
    onSearch = ()=>{
        console.log(this.keyWordElement.value)
        this.props.onSearch({initiate:false,isLoading:true})
        axios.get(`http://localhost:3000/api1/search/users?q=${this.keyWordElement.value}`).then(
          Response=>{
            console.log("Success ", Response.data)
            this.props.onSearch({data:Response.data.items,isLoading:false})
        },
          Error =>{
            console.log("Failed")
            this.props.onSearch({isLoading:false,errMsg:Error.message})
        }
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
