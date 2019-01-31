import React,{Component} from 'react';
import {connect} from 'react-redux';
import Appbar from './../AppBar/AppBar';
import Navigation from './../Navigation/Navigation';
import Breadcrumbs from './../MyAccount/Breadcrumbs/Breadcrumbs';
import  AdMiddleware from './../../store/middleware/admiddleware';
import DisplayAdsPage from './../DisplayAds/DisplayAds'


function mapStateToProps(state){
    return{
        filterCategory:state.AdReducer.filterCategory,
        ads:state.AdReducer.ads
    }
}

function mapDispatchToProps(dispatch){
    return{
        filterAdsLogic:(filters)=>dispatch(AdMiddleware.filterAdsLogic(filters))
    }
}
class CategoryAdsPage extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
            categoryAds: [],
            category:this.props.match.params.category,
        }
        //this.props.filterAdsLogic({ category: this.state.category })
      }
    
      
     componentDidMount(){
         console.log("componentDidMount", this.props)
         this.props.filterAdsLogic({category:this.state.category})
     }

      static getDerivedStateFromProps(nextProps) {
        
          console.log("getDerivedStateFromProps",nextProps)
        if (nextProps.ads) {
          return { categoryAds: nextProps.ads }
        }
        return null;
      }


    render(){

        const breadcrumbs = [
            {
              text: `${this.state.category}/ Ads`
            }
          ];
        return(
            <div>
                
             <Appbar/>
             <div style={{marginTop:30,marginLeft:30,backgroundColor:'red',height:50,borderRadius:10, padding:10}}>
             <Breadcrumbs
            breadcrumbs={breadcrumbs}
          />
          </div>
          <DisplayAdsPage 
          ads={this.state.categoryAds}
          filterCategory={this.state.filterCategory}
          
          
          />

             <Navigation/>
                </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CategoryAdsPage);