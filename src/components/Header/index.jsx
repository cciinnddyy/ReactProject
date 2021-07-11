import React,{Component} from 'react'
import '../../App.css'

export default class Header extends Component{
    render(){
        return (
                <div className='todo-header'>
                    <input placeholder='Task to do' type='text'></input>
                </div>
            )
    }
}