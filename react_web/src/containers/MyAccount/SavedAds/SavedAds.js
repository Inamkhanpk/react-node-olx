import React,{Component } from 'react'
import Appbar from './../../AppBar/AppBar.js'
import Navigation from './../../Navigation/Navigation';
import Breadcrumbs from './../Breadcrumbs/Breadcrumbs';
import DisplayAdsPage from './../../DisplayAds/DisplayAds'

const breadcrumbs = [
    {
      link: '/my-account',
      text: '/My Account'
    },
    {
      text: '/Saved Ads'
    }
  ];
class SavedAds extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          savedAds: [],
          
        }
      }

      static getDerivedStateFromProps(nextProps) {
        if (nextProps.savedAds) {
          return { savedAds: nextProps.savedAds };
        }
        return null;
      }


      componentDidMount = () => {
        this.props.loadSavedAdsLogic();
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
                ads={this.state.savedAds}
                // filterCategory={this.props.filterCategory}
                title="Saved Ads"
                userId={this.props.userId}
                //removeSaved={true}
              />
                <Navigation/>

            </div>
        )
    }
}
export default SavedAds;