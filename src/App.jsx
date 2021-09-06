  import React, { Component } from 'react'
  import {NavLink,Link,BrowserRouter,Route,Switch} from 'react-router-dom'
  import About from './pages/About' //路由組件, <Home/> => 一般組件 可以收到父組件傳的東西
  import Home from './pages/Home' //我是路由組件
  import Header from './components/Header' //我是一般組件
  import MyNavLink from './components/MyNavLink'
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
                    
                  <MyNavLink to='./about'>About</MyNavLink> {/* Inner text is props.children */} 
                  <MyNavLink to='./home'>Home</MyNavLink>      
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* Register route */}
                <Switch> {/* 效率比較高 進行單一匹配 只要找到第一個匹配的路徑 就不往下走了*/}
                  <Route path='/about' component={About}/>
                  <Route path='/home'  component= {Home}/>
                  <Route path ='/home'  component={About} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
  }


