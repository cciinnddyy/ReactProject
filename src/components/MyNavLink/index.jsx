import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class MyNavLink extends Component {
    render() {
        const {text}=this.props
        return (            
            <NavLink activeClassName="customizeactive" className="list-group-item" {...this.props}/>  
            //{/* Removed closing tag </NavLink> */}        
        )
    }
}
