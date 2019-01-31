import React, { Component } from 'react';
import { connect } from 'react-redux';
import Breadcrumbs from './../MyAccount/Breadcrumbs/Breadcrumbs';
import Appbar from './../AppBar/AppBar';
import Navigation from './../Navigation/Navigation';
import { AdMiddleware } from '../../store';
import DisplayAdsPage from './../DisplayAds/DisplayAds'


function mapStateToProps(state) {
    return {
     ads:state.AdReducer.ads
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      filterAd:(filters)=>dispatch(AdMiddleware.filterAds(filters))
    };
  }

const breadcrumbs = [
  {
    text: 'User Ads'
  }
];
class UserAdsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userAds: [],
      userId: this.props.match.params.userId,
    }
    
  }

  componentDidMount(){
    this.props.filterAds({ uploader: this.state.userId });
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.ads) {
      return { userAds: nextProps.ads }
    }
    return null;
  }

  render() {
    return (
      <div className="container">
          
          <Appbar/>

          <Breadcrumbs
            breadcrumbs={breadcrumbs}
          />
          <DisplayAdsPage
          ads={this.state.userAds}
          
          />

          <Navigation/>
        
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAdsPage);
