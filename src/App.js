  import React, { Component } from 'react'
  import {NavLink,Link,BrowserRouter,Route} from 'react-router-dom'
  import About from './pages/About' //路由組件, <Home/> => 一般組件 可以收到父組件傳的東西
  import Home from './pages/Home'
  import Header from './components/Header'
  export default class App extends Component {


    render() {
      return (
          <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><Header/></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生中 a 標籤跳轉頁面 */
                /* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}
              {/* React 中 靠路由鏈結 
              to 別寫大寫*/}
              {/* 1. Browser Router 
                  2. HashRouter # */}              
                  <NavLink activeClassName="customizeactive" className="list-group-item" to="./about">About</NavLink>
                  <NavLink activeClassName="customizeactive" className="list-group-item" to="./home">Home</NavLink>             
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* Register route */}
                  <Route path='/about' component={About}/>
                  <Route path='/home' component={Home}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
  }


