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
  deleteTodos = (id)=>{
      console.log("deleteTodos App",id)
      let newTodos = this.state.todos.filter((obj)=>{
          return obj.id!==id   
      })
      this.setState({todos:newTodos})
  }
  checkAll = (isChecked)=>{
    console.log("CheckAll")
    const {todos} = this.state
    let newTodos = todos.map((obj)=>{        
        return {...obj,isDone:isChecked}        
    })
    this.setState({todos:newTodos})
  }
  clearAllDone=()=>{
      const {todos} = this.state
      let newTodos = todos.filter((todo)=>{
          return todo.isDone === false
      })
      this.setState({todos:newTodos})
  }
  render(){
    return (  
          <div className='todo-container'>
            <div className='todo-wrap'>
                <Header Hello={"Hello"} parentFunc={this.getHeaderValue}/>
                <List Todos={this.state.todos} updatetodos={this.updateTodos} deleteTodos={this.deleteTodos}/>
                <Footer Todos={this.state.todos} CheckAll={this.checkAll} ClearAllDone={this.clearAllDone}/>
            </div>
          </div>
      )
  }
}

//Export APP component
export default App;

//State 如果是共同使用的數據 放在共同的父組建中
//如果只有自己使用就放在自己的 state

//父組件 ＝> 給子傳值 用props
