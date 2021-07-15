import React,{Component} from 'react'
import helloCss from './index.module.css'

export default class Hello extends Component{
    render(){
        return <h2 className={helloCss.customize}>Hello React!!?!?</h2>
    }
}