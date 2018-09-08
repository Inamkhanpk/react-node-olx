import React, { Component } from 'react';
import {Link,BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './../Login/Login';
import Browse from './../Browse/Browse';
import Items from './../Items/Items';
import Home from './../Home/Home';
import DisplayAds from './../DisplayAds/DisplayAds';
import Navigation from './../Navigation/Navigation';

import Button from '@material-ui/core/Button';
import styles from './AppStyle.jsx';









class App extends Component {
  constructor(props){
    super(props)
  }
  
  
  
  
  
render() {
  
    
  
  return (
    <div>
      <div style={styles.containers}>
      <ul>
       <li style={styles.listUpper}> 
        <img src={'Users\sonu computers\Desktop\OLX_Logo.jpg'}  
        alt={"OLX_Logo.jpg"} 
        height="100" 
        width="100"/> 
        </li>
       <li style={styles.listUpper}>
        <h3>Pakistan's Largest Marketplace</h3>
       </li>
        
      </ul>
      </div>
        
        

        <div>
        <Router>
          <div style={styles.one}>
          <ul>
            <li style={styles.listDown}>
          <Button variant="contained" >
          <Link exact to="/login">My Account </Link>
            </Button>
            </li>
            <li style={styles.listDown}>
            <Button variant ="contained" color="secondary" style={styles.btncolor}>
           <Link exact to="/login">Post an Ad</Link>
          
          </Button>
          </li>
          </ul>

          
          <Route  path="/login/register" exact strict component={Login}/>
           </div>
        </Router>
        </div>
        
        <div>
        <Browse/>
        </div>
        <div>
        <Items/>
        </div>
        <div>
        <Home/>
        </div>
        <div>
        <DisplayAds/>
        </div>
        <div>
        <Navigation/>
        </div>
      
          </div>
    )
  }
}


export default App;
