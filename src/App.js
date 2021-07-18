import React,{Component} from 'react'
import './App.css'
import axios from 'axios' 
class App extends Component{
  
  //初始化狀態
  getStudents = ()=>{
    axios.get("http://localhost:3000/api1/students").then(
      response=>{console.log("success",response.data)},
      error => {console.log("error",error)}
    )
  }
  getCars = ()=>{
    axios.get("http://localhost:3000/api2/cars").then(
      response=>{console.log("success",response.data)},
      error => {console.log("error",error)}
    )
  }
  render(){
    return (  
          <div>
            <button onClick={this.getStudents}>Click Me</button>
            <button onClick={this.getCars}>Cars</button>
          </div>
      )
  }
}

//Export APP component
export default App;

