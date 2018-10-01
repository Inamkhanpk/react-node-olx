import React,{Component} from'react';
import TextField from '@material-ui/core/TextField';
import {Link,Redirect} from 'react-router-dom';
import styles from './LoginStyle.jsx';
import Button from '@material-ui/core/Button';
import { connect } from  'react-redux';
import {isEmail,isEmpty} from 'validator'
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
                email: '',
                password: '',
                repeatPassword: '',
                agree: false,
            },
            errors:{},
            validateOnChange:false,
            authenticated:false,

        }
    }
    
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.authenticated !== prevState.authenticated) {
      return {
        authenticated: nextProps.authenticated
      }
    }
    return null;
  }
    validateUserFormEntry = () => {
        let { user } = this.state;
        let errors = {};
        let valid = true;
    
        if (isEmpty(user.email) || !isEmail(user.email)) {
          errors.email = "Please provide a valid email address";
          valid = false;
        }
    
        if (isEmpty(user.password) || user.password.length < 8) {
          errors.password = "Passowrd should be at least 8 characters long";
          valid = false;
        }
    
        this.setState({ errors });
        return valid;
      };
    
      handleSubmit = () => {
        if (this.validateForm()) {
          this.props.actions.loginUser(this.state.user);
        } else {
          this.setState({ validateOnChange: true });
        }
      };
    
    handleChange=(e)=>{
        let user = this.state.user;
    user[e.target.name] = e.target.value;
    this.setState({ user });

    if (this.state.validateOnChange) {
      this.validateUserFormEntry();
    }
    }
    render(){
        const { from } = this.props.location.state || { from: { pathname: '/' } }
    if (this.state.authenticated) {
      return (
        <Redirect to={from} />
      )
    }
        return(
            <div>
                <AppBar/>
        <div style={styles.LoginSep}>
    
            Login
            <form>
            <TextField
            label="Email"
            name="email"
            type="email"
            helperText={this.state.errors.email}
            fullWidth={true}
            value={this.state.user.email}
            onChange={this.handleChange}
            error={this.state.errors.email ? true : false}
          
        />
                
               <TextField
                label="Password"
                name="password"
                type="password"
                helperText={this.state.errors.password}
                fullWidth={true}
                 value={this.state.user.password}
                 error={this.state.errors.password ? true : false}
                 onChange={this.handleChange}
          
          
            />
            <br/>
           <Button
            variant="contained" color="primary" 
            onClick={this.handleSubmit}
          > Login
            </Button>
           </form>


                {`Don,t have an account?`}
                 <Link to="/register">Create Your Account</Link>
                        
                        
        
            </div>
            <Navigation/>
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);