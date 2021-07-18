import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import { objectExpression } from '@babel/types';

export default class List extends Component {
    static propTypes = {
        Todos:PropTypes.array,
        updatetodos:PropTypes.func.isRequired
    }
    render() {
        const {Todos,updatetodos,deleteTodos} = this.props
        return (
            <div>
                <ul className="todo-main">
                    {
                        Todos.map((obj)=>{
                            return <Item key={obj.id} {...obj} updateTodos={updatetodos} deleteTodos={deleteTodos}/>
                        })
                    }                   
                </ul>
            </div>
        )
    }
}
