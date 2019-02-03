import React, { Component } from 'react';
import { connect } from 'react-redux';

import AdMiddleware from './../../store/middleware/admiddleware'
import DeleteIcon from "@material-ui/icons/Delete";
import toastr from 'toastr';

function mapStateToProps(state) {
    return {
      isAuthenticated: state.AdReducer.isAuthenticated,
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
    deleteAd:(adId)=>dispatch(AdMiddleware.deleteAd(adId))
    };
  }
  

class DeleteAd extends Component {
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

  handleDelete = () => {
    let confirm = window.confirm("Are you sure you want to delete this Ad Listing?");
    if (confirm) {
      this.props.deleteAd(this.state.adId);
    } else {
      toastr.success("Thanks for confirmation, Ad is not being deleted");
    }
  }

  render() {
    if (!this.state.isAuthenticated) {
      return (<span>You do not have permission to delete the ad listing. please login first</span>);
    } else if (!this.state.adId) {
      return (
        <span>Invalid Ad Id Provided</span>
      );
    }
    return (
      <a href="javascript:void(0)" className={this.props.className} title="Delete this listing" onClick={this.handleDelete}><DeleteIcon /></a>
    );
  }
}



function mapStateToProps(state) {
  return {
    authenticated: state.session.authenticated,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(adActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(DeleteAd);