import React,{Component} from'react';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import styles from './LoginStyle.jsx';

import { connect } from  'react-redux';

import AuthMiddleware from '../../store/middleware/authmiddleware';
import AppBar from './../AppBar/AppBar.js';
import Navigation from './../Navigation/Navigation.js';

function mapStateToProps(state){
    return{
    isLogin:state.AuthReducer

    }
}
function mapDispatchToProps(dispatch){
 return {
 signin:() => dispatch(AuthMiddleware.signin())
 }
}


class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            user:{
            Email:'',
            Password:'',
            }

        }
    }
    componentWillReciveProps(){
        if(this.props.isLogin )
        this.setState({
            Emial:'',
            Password:''

        })
    }
    handleSubmit(){
       
        this.props.signin({
          "Email " :this.state.user.Email,
           "Password": this.state.user.Password
            
        }
        

        )
    }
    
    handleChange=(e)=>{
        this.setState({user:e.target.value

        });
    }
    render(){
        return(
            <div>
                <AppBar/>
        <div style={styles.LoginSep}>
    
            Login
            <form>
            <TextField
            placeholder="Enter Your Email"
          type="email"
          value={this.state.user.email}
          onChange={this.handleChange}
          
        />
                <br/>
                <TextField
                placeholder="Enter your Password"
          type="password"
          value={this.state.user.password}
          onChange={this.handleChange}
          
          
        />
        <br/>
                
                <button  onClick={this.handleSubmit}>
        LOGIN
        
      </button>
                </form>
                Don,t have an account?
                
                    <div>
                        <Link to="/register">Create Your Account
                        </Link>
                        </div>
                        
        
            </div>
            <Navigation/>
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);