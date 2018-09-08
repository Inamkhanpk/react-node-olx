import React,{Component} from'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

import styles from './LoginStyle.jsx';
import axios from 'axios';
import {connect } from  ' react-redux';
import AuthAction from '../../store/actions/authAction';

function mapStatetoProps(state){
    isLogin:state.AuthReducer

}
function mapDispatchToProps(dispatch){
 signin:() => dispatch(AuthAction.signin)
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
    handleSubmit=(e)=>{
        this.
    }
    
    handleChange=(e)=>{
        this.setState({user:e.target.value

        });
    }
    render(){
        return(
        <div style={styles.LoginSep}>
            Login
            <form>
            <TextField
            placeholder="Enter Your Email"
          type="email"
          value={this.state.user.email}
          onChange={this.handleChange}
          
        />
                
                <TextField
                placeholder="Enter your Password"
          type="password"
          value={this.state.user.password}
          onChange={this.handleChange}
          
          
        />
                
                <button  onClick={this.handleSubmit}>
        Send
        
      </button>
                </form>
                Don,t have an account?
                <Router>
                    <div>
                        <Link to="/login/register">Create Your Account
                        </Link>
                        </div>
                        </Router>
        
            </div>
        )
    }
}
export default connect(mapStateToProps)(mapDispatchToProps)(Login);