import React,{Component} from 'react'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import '../../App.css'

export default class Header extends Component{
    state={
        inputVal:""
    }
    //對接收的函數
    static propTypes = {
        parentFunc:PropTypes.func.isRequired,
        Hello:PropTypes.string
    }
    AddNewTask = (abc)=>(event)=>{        
        if(event.keyCode===13){
            const todoObj = {id:nanoid(),name:event.target.value,isDone:false}
            if(event.target.value===''){
                alert('Please Input!!!')
            }else{
                this.props.parentFunc(todoObj)
            }
            event.target.value = ""
        }
    }
    render(){
        return (
                <div className='todo-header'>
                    <input onKeyUp={this.AddNewTask(this.props.Hello)} placeholder='Task to do' type='text'></input>
                </div>
            )
    }
}