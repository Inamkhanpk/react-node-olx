import React,{Component} from 'react';
import Appbar from './../../AppBar/AppBar.js';
import Navigation from './../../Navigation/Navigation.js';
import Breadcrumbs from './../Breadcrumbs/Breadcrumbs.js';
import {connect} from 'react-redux';
import { AdMiddleware } from '../../../store/index.js';
import DisplayAdsPage from './../../DisplayAds/DisplayAds'

function mapStateToProps(state){
  return {
    myAds: state.myAds,
    userId: state.session.user.id
  }
}

function mapDispatchToProps(dispatch){
    return {
   loadMyAdsLogic :( )=>dispatch(AdMiddleware.loadMyAdsLogic())
    }

}
const breadcrumbs = [
    {
      link: '/my-account',
      text: '/My Account'
    },
    {
      text: '/My Ads'
    }
  ]
  
class  AdListingPage extends Component{
    constructor(){
        super()
        this.state={
            myAds: [],
        }
    }


    static getDerivedStateFromProps(nextProps) {
        if (nextProps.myAds) {
          return { myAds: nextProps.myAds };
        }
        return null;
      }

      componentDidMount = () => {
        this.props.loadMyAdsLogic();
      }
    

    render(){
        return(
            <div>
                <Appbar/>
                <div style={{marginTop:30,marginLeft:30,backgroundColor:'red',height:50,borderRadius:10, padding:10}}>
                <Breadcrumbs
          breadcrumbs={breadcrumbs}
        />
        </div>
        <DisplayAdsPage

        ads={this.state.myAds}
// filterCategory={this.props.filterCategory}
       title="My Ads"
       userId={this.props.userId}
        />



                <Navigation/>

            </div>

        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AdListingPage);