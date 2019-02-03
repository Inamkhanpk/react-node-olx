import React, { Component } from 'react';

import { connect } from 'react-redux';

import AdMiddleware  from './../../store/middleware/admiddleware';
import WatchLaterIcon from '@material-ui/icons/WatchLater';



function mapStateToProps(state) {
    return {
      isAuthenticated: state.AdReducer.isAuthenticated,
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
    adViewLater:()=>dispatch(AdMiddleware.adViewLater())
    };
  }

class SaveToViewLater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adId: props.adId,
      isAuthenticated: props.isAuthenticated,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if ((nextProps.isAuthenticated == false || nextProps.isAuthenticated) && nextProps.authenticated != prevState.authenticated) {
      return { isAuthenticated: nextProps.isAuthenticated }
    }
    return null;
  }

  handleClick = () => {
    this.props.adViewLater(this.state.adId);
  }

  render() {
    if (!this.state.isAuthenticated) {
      return (<span></span>);
    } else if (!this.state.adId) {
      return (
        <span>Invalid Ad Id Provided</span>
      );
    }
    return (
      <a href="javascript:void(0)" className={this.props.className} title="Save to View Later" onClick={this.handleClick}><WatchLaterIcon /></a>
    );
  }
}





export default connect(mapStateToProps, mapDispatchToProps)(SaveToViewLater);