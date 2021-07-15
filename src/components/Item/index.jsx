import React, { Component } from 'react'
export default class Item extends Component {
    state={flag:false}
    handleMouse = (isIn)=>{
        this.setState({flag:isIn})
    }
    handTick=(event,id)=>{

       this.props.updateTodos(id,event.target.checked)
       
    }
    handleDelete = (id)=>{
        let isconfirm = window.confirm("Are you sure?")
        if(isconfirm){
            this.props.deleteTodos(id)
        }
    }
    render() {
        return (                                      
                    <li style={{backgroundColor:this.state.flag?'#ddd':'white'}} onMouseEnter={()=>{this.handleMouse(true)}} onMouseLeave={()=>{this.handleMouse(false)}}>
                        <label>
                            <input type='checkbox' defaultChecked={this.props.isDone} onChange={(event)=>{this.handTick(event,this.props.id)}}/>
                            <span>{this.props.name}</span>
                        </label>
                        <button style={{display:this.state.flag? '':'none'}} className="btn btn-danger" onClick={()=>{this.handleDelete(this.props.id)}}> Delete </button>
                    </li>            
        )
    }
}
