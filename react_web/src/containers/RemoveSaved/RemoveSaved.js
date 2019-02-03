import React, { Component } from 'react';

import { connect } from 'react-redux';

import AdMiddleware  from './../../store/middleware/admiddleware';
import RemoveIcon from '@material-ui/icons/RemoveCircle';

function mapStateToProps(state) {
    return {
      isAuthenticated: state.AdReducer.isAuthenticated,
    
  }
}
  function mapDispatchToProps(dispatch) {
    return {
      removeSaved:()=>dispatch(AdMiddleware.removeSaved())
    };
  }

class RemoveSaved extends Component {
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
    this.props.removeSaved(this.state.adId);
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
      <a href="javascript:void(0)" className={this.props.className} title="Remove from saved ads" onClick={this.handleClick}><RemoveIcon /></a>
    );
  }
}





export default connect(mapStateToProps, mapDispatchToProps)(RemoveSaved);