import React,{Component} from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
class App extends Component{
  //初始化狀態
  state = {
      todos:[
        {id:'100',name:'Eat',isDone:true},
        {id:'101',name:'Sleep',isDone:false},
        {id:'102',name:'TV',isDone:false}
      ]
  }
  getHeaderValue = (data)=>{
    this.setState({todos:[data,...this.state.todos]})
  }
  updateTodos = (id,done)=>{
      let newTodos = this.state.todos.map((obj)=>{
          if(obj.id===id){
              return {...obj,isDone:done}
          }else{
              return {...obj}
          }
      })
      this.setState({todos:newTodos})
  }
  render(){
    return (  
          <div className='todo-container'>
            <div className='todo-wrap'>
                <Header Hello={"Wow"} parentFunc={this.getHeaderValue}/>
                <List Todos={this.state.todos} updatetodos={this.updateTodos}/>
                <Footer/>
            </div>
          </div>
      )
  }
}

//Export APP component
export default App;
