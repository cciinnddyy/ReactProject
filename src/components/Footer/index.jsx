import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className='todo-footer'>
                <label>
                    <input type='checkbox'></input>
                    
                </label>
                <span>
                <span>已完成/全部</span>
                </span>
                <button className='btn btn-danger'>清除已完成</button>
            </div>
        )
    }
}
