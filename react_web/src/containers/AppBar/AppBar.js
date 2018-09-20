import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styles from './AppStyle.jsx';
import OLX_Logo from './../images/OLX_Logo.jpg'

class Appbar extends Component {
    render(){
    return(
<div style={styles.containers}>
     <div>
      <ul>
       <li style={styles.listUpper}> 
        <img src={OLX_Logo}  
        alt={OLX_Logo} 
        height="80" 
        width="100"/> 
        </li>
       <li style={styles.listUpper}>
        <h3>Pakistan's Largest Marketplace</h3>
       </li>
        
      </ul>
      </div>
        
        

        
        
          <div style={styles.one}>
          <ul>
            <li style={styles.listDown}>
          <Button variant="contained" >
          <Link  to="/login">My Account </Link>
            </Button>
            </li>
            <li style={styles.listDown}>
            <Button variant ="contained" color="secondary" style={styles.btncolor}>
           <Link  to="/login">Post an Ad</Link>
          
          </Button>
          </li>
          </ul>
          </div>
</div>)}
        
};

        export default Appbar;