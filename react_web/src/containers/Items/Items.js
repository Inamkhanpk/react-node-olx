import React,{Component } from 'react';
import {connect} from 'react-redux';
import AdMiddleware  from './../../store/middleware/admiddleware';
import {Link} from 'react-router-dom';
import styles from './ItemsStyle'


function mapStateToProps(state){
    return{
    
    catCounts:state.AdReducer.catCounts
    }
}

function mapDispatchToProps(dispatch){
    return{
   getCategoriesCountLogic:()=> dispatch(AdMiddleware.getCategoriesCountLogic())
    }
}

class Items extends Component{
    
         

componentDidMount(){
   this.props.getCategoriesCountLogic()
}

  render(){
    console.log(this.props.catCounts)
    
    const categories = [
        'Mobiles', 'Laptops', 'Clothes', 'Vehicles', 
        'Property', 'Bikes', 'Electronics', 'Jobs', 'Services', 'Business',
        'Furniture', 'Books', 'Kids','Accessories',
      ];

    const categoryList = categories.map((category, index) => {
        return (
          <li key={index} style={styles.list}>
          <Link to={`/category/${category}`}>{category}</Link> 
          <span >({this.props.catCounts[category] ? this.props.catCounts[category] : 0})</span></li>
        );
      });
    return(
      
         <div  style={styles.itemStyle}>
        <ul className="categories-list">
          {categoryList}
        </ul>
      </div>
    
    )
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Items);
