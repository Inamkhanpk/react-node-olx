import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import {connect} from 'react-redux'

function mapStateToProps(state){
  return {
  isAuthenticated:state.AuthReducer.isAuthenticated
  }
}
class PrivateRoute extends Component {
  
  state = {
    isAuthenticated: false,
  }

// state ko manage setState krta hai getderivedstatefromprops
  static getDerivedStateFromProps(nextProps, prevState) {
    if ( (nextProps.isAuthenticated === false || nextProps.isAuthenticated) && nextProps.isAuthenticated !== prevState.isAuthenticated) {
      return { isAuthenticated: nextProps.isAuthenticated }
    }
    return null;
  }

  render() {
    const Component = this.props.component;
    
    const props = { ...this.props };
    delete props["component"];
    return (
      <Route {...props} render={(props) => {
        return (
          this.state.isAuthenticated ?
            <Component {...props} />
            : <Redirect to={{
              pathname: "/login",
              state: { from: props.location }
              
            }} />
        )
      }} />
    );
  }
}
export default connect(mapStateToProps)(PrivateRoute);


