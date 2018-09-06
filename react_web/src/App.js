import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

// localhost:3000/signup : POST 



class App extends Component {
  constructor(props){
    super(props)
    this.state={
      user:{
        email:'',
        password:''
      }
      
    } 

    this.onChangeHandle=this.onChangeHandle.bind(this)
    }
    onChangeHandle(e){
      this.setState({[e.target.name]:e.target.value})
    }

    onServer=(e)=>{
      e.preventDefault();
      console.log(this.state.user);
      axios.post(('http://localhost:3000/signup'),this.state.user)
      .then((res)=>{
        console.log("Successfully Send On Server", res);
      })
      .catch((error)=>{
      console.log("Error Found");
       })
    }
    
    render() {
    return (
      <div>
        <form onSubmit={this.onServer}>
      <input type="email" name="email" value={this.state.value} placeholder="Enter Your Email"onChange={this.onChangeHandle}/>
      <input type="password" name="password" value={this.state.value} placeholder="Enter your password" onChange={this.onChangeHandle}/>
      <button>Submit</button>
      </form>
      </div>
    );
  }
}

export default App;
