import React, { Component } from 'react'
import './index.css'
export default class List extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="row">
                {
                    this.props.initiate ? <h2>Hello</h2> :
                    this.props.isLoading ? <h2>Loading....</h2>:
                    this.props.errMsg ? <h2>{this.props.errMsg}</h2> :
                        this.props.data.map((obj)=>{
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
