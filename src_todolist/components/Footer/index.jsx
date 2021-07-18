import React, { Component } from 'react'
import { isConstructorDeclaration } from 'typescript';

export default class Footer extends Component {
    handleAllCheck = (event)=> {
        console.log(event.target.checked)
        this.props.CheckAll(event.target.checked)            
    }
    handleClearAllDone = ()=>{
        this.props.ClearAllDone()
    }
    render() {
        const {Todos} = this.props
        const doneCount = Todos.reduce((pre,todo)=>{
            return pre + (todo.isDone?1:0)
        },0)
        const allCount = Todos.length

        return (
            <div className='todo-footer'>
                <label>
                    <input type='checkbox' checked={doneCount === allCount && doneCount!==0 ? true:false} onChange={(event)=>this.handleAllCheck(event)}></input>                    
                </label>
                <span>
                <span>已完成{doneCount}/全部 {Todos.length}</span>
                </span>
                <button className='btn btn-danger' onClick={()=>this.handleClearAllDone()}>清除已完成</button>
            </div>
        )
    }
}
//defaultChecked