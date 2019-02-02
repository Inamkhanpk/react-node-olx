import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styles from './AppStyle.jsx';
import OLX_Logo from './../images/OLX_Logo.jpg'
import {connect} from 'react-redux';
import AuthMiddleware from './../../store/middleware/authmiddleware'



function mapStateToProps(state){
  return{
    isAuthenticated: state.AuthReducer.isAuthenticated,
    
    }
}


function mapDispatchToProps(dispatch){
  return {
  logoutUser:() => dispatch(AuthMiddleware.logoutUser())
  }
 }


class Appbar extends Component {
  constructor(props){
    super(props)
    this.state={
      isAuthenticated: false,

    }
  
  
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    //console.log("getDerivedStateFromProps nextProps",nextProps.authenticated )
    //console.log("getDerivedStateFromProps prevState",prevState.authenticated)
    if ((nextProps.isAuthenticated === false || nextProps.isAuthenticated) && nextProps.isAuthenticated !== prevState.isAuthenticated) {
      return { isAuthenticated: nextProps.isAuthenticated }
    }
    return null;
  }

  handleLogout = () => {
    this.props.logoutUser();
  }


    render(){
    return(
<div style={styles.containers}>
     <div>
      <ul>
       <li style={styles.listUpper}> 
       <div style={styles.logo}>
        <img src={OLX_Logo}  
        alt={OLX_Logo} 
        height="80" 
        width="100"/> 
        </div>
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
          <li>
          {this.state.isAuthenticated && <span onClick={this.handleLogout} className="btn btn-link"><i className="fa fa-logout"></i> Logout</span>}
            </li>
          </ul>
          </div>
</div>)}
        
};

        export default connect(mapStateToProps,mapDispatchToProps)(Appbar);