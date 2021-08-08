import React, { Component } from 'react'
//import axios from 'axios';
import PubSub from 'pubsub-js'
export default class SearchBar extends Component {
    onSearch = async ()=>{
       console.log('Search say Hello')
        PubSub.publish('updateState',{data:[],initiate:false,isLoading:true,errMsg:''})

        //this.props.onSearch({initiate:false,isLoading:true})
        //#region axios 
        /*axios.get(`http://localhost:3000/api1/search/users?q=${this.keyWordElement.value}`).then(
          Response=>{
            console.log("Success ", Response.data)
            //this.props.onSearch({data:Response.data.items,isLoading:false})
            PubSub.publish('updateState',{data:Response.data.items,initiate:false,isLoading:false,errMsg:''})
        },
          Error =>{
            console.log("Failed")
            //this.props.onSearch({isLoading:false,errMsg:Error.message})
            PubSub.publish('updateState',{data:[],initiate:false,isLoading:false,errMsg:Error.message})
        }
        )*/
        
        //#region fetch
        /*fetch(`http://localhost:3000/api1/search/users?q=${this.keyWordElement.value}`).then(
          response =>{
              console.log("聯繫服務器成功了! ")
              return response.json(); //外面的 then 返回 一個 promise instance
          },
          //error => {
          //  console.log("聯繫服務器失敗了! ",error)
          //  return new Promise(()=>{})
          //}
        ).then(
          response =>{
              console.log("Data ",response)
            },
          //error =>{
           //   console.log("NO Data! ")
           // }
          ).catch(
            (error)=>{
              console.log("統一處理錯誤！ ",error)
          })*/
          try{
            const response = await fetch(`http://localhost:3000/api1/search/users?q=${this.keyWordElement.value}`)
            const result = await response.json()
            console.log(result)
          }catch(error){
            console.log("Fail!!!! ",error)
          }
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
