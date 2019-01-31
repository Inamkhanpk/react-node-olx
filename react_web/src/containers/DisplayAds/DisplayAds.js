import React,{Component } from 'react';
import {connect} from 'react-redux'
import  AdMiddleware  from './../../store/middleware/admiddleware';
import {Link} from 'react-router-dom'


function mapStateToProps(state){
  return{
  
    ads:state.AdReducer.ads,
    filterCategory:state.AdReducer.filterCategory,
    catCounts:state.AdReducer.catCounts,
    totalAdsCount:state.AdReducer.totalAdsCount,
    queryData:state.AdReducer.queryData
    
    

  }
}

function mapDispatchToProps(dispatch){
  return{
   loadAllAdsLogic:()=>dispatch(AdMiddleware.loadAllAdsLogic()),
   getAllAdsCount:()=>dispatch(AdMiddleware.getAllAdsCount()),
   
   
   
  }
}






class DisplayAds extends Component{
  constructor(props){
    super(props)
    this.state = {
      ads: [],
      
      
      
    }
    
    console.log("state 1 constructor",this.state)
    console.log("props 1 constructor",this.props)
  }
  

 
    

     
  

componentDidMount(){
  
  this.props.loadAllAdsLogic()
  this.props.getAllAdsCount()
  
  
  
  console.log("componentDidMount props",this.props)
  console.log("componentDidMount state",this.state)
}

 componentDidUpdate(){
   console.log("componentDidUpdate",this.props.filterCategory)
   console.log("componentDidUpdate",this.props.totalAdsCount)
   console.log("componentDidUpdate",this.props.catCounts)
   console.log("componentDidUpdate",this.props.queryData)
 }

 
 static getDerivedStateFromProps(nextProps) {
   console.log(nextProps)
  if (nextProps.ads) {
    return { ads: nextProps.ads }
  }
  return null;
}

  render(){
    console.log("render 6",this.state)
    console.log("render 7",this.props)
  
const pageTitle = `Displaying ${this.props.filterCategory? this.props.filterCategory : `All` } Ads`
  
    
         const adsListings = this.state.ads.map((ad,index) => {
           return(

            <div key={index} className="all-listings-single-listing border">
            <div className="row mr-0 ml-0">
            <div className="col-12 col-sm-3 single-listing-img-container">
            <Link to={`/item/${ad._id}`}><img className="img-fluid" src={`image/${ad.image}`} alt={ad.title} /></Link>
            </div>
            <div className="col-12 col-sm-9 single-listing-description-container">
            <div className="item-title">
            <h3><Link to={`/item/${ad._id}`}>{ad.title}</Link></h3>
            <p>
                Category: <Link to={`/category/${ad.category}`}>{ad.category}</Link>
              </p>
              <div className="row bottom">
              <div className="col-6">
                  <span className="price">Rs. {ad.price}</span>
                </div>

            </div>
            </div>
            </div>
            </div>
            </div>

           )
         })




         


    return(
        <div>
        <h2 >{pageTitle}</h2>
        We found {this.props.filterCategory.length?this.props.filterCategory.length :this.props.totalAdsCount } items
        {adsListings}
        
      </div>
    )
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(DisplayAds);




