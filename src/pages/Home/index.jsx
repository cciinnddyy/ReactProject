import React, { Component } from 'react'
import MyNavLink from '../../../src/components/MyNavLink'
import {Route,Switch,Redirect} from 'react-router-dom'
import News from './News'
import Messages from './Messages'
export default class Home extends Component {
    render() {
        return (
            <div>
            <h2>Home组件内容</h2>
            <div>
                <ul className="nav nav-tabs">
                    <li>
                        <MyNavLink to="/home/news">News</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to="/home/messages">Messages</MyNavLink>
                    </li>
                </ul>
                <Switch> {/* 效率比較高 進行單一匹配 只要找到第一個匹配的路徑 就不往下走了*/}
                  <Route path='/home/news' component={News}/>
                  <Route path='/home/messages'  component= {Messages}/>
                {/*<Route path ='/home'  component={About} />*/}
                </Switch>
            </div>
          </div>
        )
    }
}

