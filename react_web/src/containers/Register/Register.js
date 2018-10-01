import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import AppBar from './../AppBar/AppBar.js';
import Navigation from './../Navigation/Navigation.js';
import Button from '@material-ui/core/Button';
import styles from './RegisterStyle.jsx';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { isEmail, isEmpty } from "validator";
import { connect } from 'react-redux';
import AuthMiddleware from './../../store/middleware/authmiddleware.js';
import FormControlLabel from '@material-ui/core/FormControlLabel';



function mapStateToProps(state) {
  return {
    info: state.personInfo
  }
}


function mapDispatchToProps(dispatch) {
  return {
    registerUser:
      (credentials) => dispatch(AuthMiddleware.registerUser(credentials))
  };
}


class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        email: '',
        password: '',
        repeatPassword: '',
        agree: false,
      },

      errors: {},
      validateOnChange:false,
      
    }
  }

  validateUserFormEntry=() =>{
    let { user } = this.state;
    let errors = {};
    let valid = true;


    if (isEmpty(user.email) || !isEmail(user.email)) {
      valid = false;
      errors.email = "Please provide a valid email address";
    }

    if (isEmpty(user.password) || user.password.length < 8) {
      valid = false;
      errors.password = "Passowrd should be at least 8 characters long";
    }

    if (user.password !== user.repeatPassword) {
      valid = false;
      errors.repeatPassword = "Passwords mismatch";
    }

    if (!user.agree) {
      valid = false;
      errors.agreeText = "You must be agree to terms of use";
    }

    this.setState({ errors:errors });
    return valid;
  };

  handleChange = (e) => {
    let user = this.state.user;
    user[e.target.name] = e.target.value;
    this.setState({ user });

    if (this.state.validateOnChange) {
      this.validateUserFormEntry();
    }

    
  };


  handleCheckbox = (event,checked) => {
    let user = this.state.user;
    user.agree = checked;
    this.setState({ user });
    
    if (this.state.validateOnChange) {
      this.validateUserFormEntry();
    }

   
  };


  handleSubmit = () => {
    
    if (this.validateUserFormEntry()) {
      this.props.registerUser(this.state.user);
      alert("Register Successful")
    } 
    else {
      this.setState({ validateOnChange: true})
      
    }
  };




  render() {
    return (
      
       <div className="container">
        <AppBar />
       <div style={styles.Layout}>
        
        <section className="registeration-form">
        <form >
          <h4>Register Page</h4>
          
          <div className="form-group">
            <TextField
              label="Your Email"
              name="email"
              type="email"
              fullWidth={true}
              helperText={this.state.errors.email}
              required={true}
              value={this.state.user.email}
              error={this.state.errors.email ? true : false}
              onChange={this.handleChange}
            />
            </div>
            
            <div className="form-group">
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth={true}
              helperText={this.state.errors.password}
              required={true}
              value={this.state.user.password}
              error={this.state.errors.password ? true : false}
              onChange={this.handleChange}
            />
            </div>

            <div className="form-group">
            <TextField
              label="Repeat Password"
              name="repeatPassword"
              type="password"
              fullWidth={true}
              helperText={this.state.errors.repeatPassword}
              required={true}
              value={this.state.user.repeatPassword}
              error={this.state.errors.repeatPassword ? true : false}
              onChange={this.handleChange}
            />
            </div>

            <div className="form-group">
           <FormControlLabel
           control={
            <Checkbox
              value="agree"
              onChange={ this.handleCheckbox}
           
            />
           }
           label={<span>By registering on OLX ,You accept our OLX.com.pk
           <Link to="/terms-of-use">Terms of Use</Link></span>}
           />
            
            {!this.state.user.agree ? <div className="text-danger">
              {this.state.errors.agreeText}</div> : <div>&nbsp;</div>}
              </div>

            <div className="form-group">
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              REGISTER
            </Button>
            </div>


            <div className="form-group">
            <p className="mb-0 text-success">Already Registered?
            <Link to="/login">Login Here</Link>
            </p>
            </div>
            </form>
            
            
            </section>
              </div>
            
        
          
          
        
        <Navigation />
        </div>
        
      
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);