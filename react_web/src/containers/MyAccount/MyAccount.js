import React,{Component} from 'react';
import List from '@material-ui/core/List';
import {Link} from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem'
import Appbar from './../AppBar/AppBar.js';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AccountCircle from '@material-ui/icons/AccountCircle'
import AddBox from '@material-ui/icons/AddBox'
import FormatListBulleted from '@material-ui/icons/FormatListBulleted'
import Comment from '@material-ui/icons/Comment'
import Favorite from '@material-ui/icons/Favorite';
import Navigation from './../Navigation/Navigation.js'

import Breadcrumbs from './Breadcrumbs/Breadcrumbs.js'
import { withStyles } from '@material-ui/core/styles';
//import styles from './MyAccountStyle.jsx';





const styles =  {
  root: {
    width: '100%',
    maxWidth: 300,
    
  },
  appbar:{
    marginLeft:300,
    marginTop:300
  },
  
};

  

const breadcrumbs = [
  {
    text: '/My Account'
  }
]
  

  
  




class MyAccount extends Component {
  constructor(props){
    super(props)
  
  this.state = {
    mobileOpen: false,
  };
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };
   
  render(){
    

  
    const { classes } = this.props;
  

 const drawer=(
    <div style={{marginTop:50}} className={classes.root}>
      <List component="nav">
        <ListItem button>
        <AccountCircle  />
        <Link to="/my-account">My Account</Link>
          <ListItemText  />
        </ListItem>

        <Divider/>

        <ListItem button>
        <AddBox/>
        <Link to="/post-your-ad">Post Your Ad</Link>
          <ListItemText  />
        </ListItem>
      
        <Divider />
      
        <ListItem button>
        <FormatListBulleted/>
        <Link to="/my-account/ads">Ad Listings</Link>
          <ListItemText  />
        </ListItem>

        <Divider/>

        <ListItem button>
        <Comment/>
        <Link to="/my-account/messages">Messages</Link>
          <ListItemText  />
        </ListItem>

        <Divider/>

        <ListItem button>
        <Favorite/>
        <Link to="/my-account/saved-ads">Saved Ads</Link>
          <ListItemText  />
        </ListItem>
        

      </List>
      </div>
 )
  return (
    <div className="container">
       

      <Appbar/>
      <div style={{marginTop:30,marginLeft:30,backgroundColor:'red',height:50,borderRadius:10, padding:10}}>
      <Breadcrumbs 
    breadcrumbs={breadcrumbs}
  />
  </div>
    
  

    
    

    
    
    
    
    <div style={{borderRadius:10,borderColor:'#383C3D',borderWidth:'1px solid #deded7',boderStyle:'solid',height:300}}>
    {drawer}
      
     
    <div style={{marginLeft:300,marginTop:-250,marginBottom:300}}>
              <h2>My Account Page</h2>
              <p>
                Welcome to your personalized page, please select your required page to view its content.
              </p>
            </div>
    </div>
  

    <Navigation/>

    </div>
  )}
};
    
export default withStyles(styles)(MyAccount);