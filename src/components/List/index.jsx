import React, { Component } from 'react'
import Item from '../Item'
import { objectExpression } from '@babel/types';

export default class List extends Component {
    
    render() {
        const {Todos,updatetodos} = this.props
        return (
            <div>
                <ul className="todo-main">
                    {
                        Todos.map((obj)=>{
                            return <Item key={obj.id} {...obj} updateTodos={updatetodos}/>
                        })
                    }                   
                </ul>
            </div>
        )
    }
}
