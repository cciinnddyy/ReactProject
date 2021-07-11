import React, { Component } from 'react'
export default class Item extends Component {
    render() {
        return (                       
                    <li>
                        <label>
                            <input type='checkbox'/>
                            <span>XXXXXXXXX</span>
                        </label>
                        <button style={{display:'none'}} className="btn btn-danger"> Delete </button>
                    </li>            
        )
    }
}
