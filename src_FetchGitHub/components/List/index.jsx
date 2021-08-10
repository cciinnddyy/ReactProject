import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'
export default class List extends Component {
    
    state = {
        data:[],
        initiate:true,
        isLoading:false,
        errMsg:''
    }

    componentDidMount(){
        this.token = PubSub.subscribe('updateState',function(msg,stateObj){
            console.log(msg)
            console.log('onSearch Trigger')
            this.setState(stateObj)
        }.bind(this))
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }

    render() {
        console.log(this.state)
        return (
            <div className="row">
                {
                    this.state.initiate ? <h2>Hello</h2> :
                    this.state.isLoading ? <h2>Loading....</h2>:
                    this.state.errMsg ? <h2>{this.state.errMsg}</h2> :
                        this.state.data.map((obj)=>{
                            return <div key={obj.id} className="card">
                                    <a rel="noreferrer" href={obj.html_url} target="_blank">
                                    <img alt="Avatar"  src={obj.avatar_url} style={{width: '100px'}}/>
                                    </a>
                                    <p className="card-text">{obj.login}</p>
                                </div>
                        })
                    
                }
            </div>
        )
    }
}
