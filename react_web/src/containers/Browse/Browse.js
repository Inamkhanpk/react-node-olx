import React,{Component} from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './BrowseStyle.jsx';
import {connect} from 'react-redux';
import AdMiddleware from '../../store/middleware/admiddleware';


function mapStateToProps(state){
  return{
    
  

  }
}

function mapDispatchToProps(dispatch){
  return{
    searchAdsLogic:(searchQuery)=>dispatch(AdMiddleware.searchAdsLogic(searchQuery)),
    filterAdsLogic:(filters)=>dispatch(AdMiddleware.filterAdsLogic(filters))

  }
}

class Browse extends Component{
    constructor(props){
    super(props)
    this.state={
        category:[],
        query:[]
        
    }

}

search = () => {
  this.props.searchAdsLogic(this.state.query);
}





handleChange =(e) => {
  
  
    this.setState({category: e.target.value},
      () => { this.props.filterAdsLogic({ category: e.target.value }) })
      console.log(e.target.value)
    
}

handleChanges =(e)=>{
  this.setState({query:e.target.value})
}



render(){
    const categories = [
        'Mobiles',
        'Laptops',
        'Clothes',
        'Vehiles',
        'Accessories',
        'Property',
        'Bikes',
        'Electronics',
        'Jobs',
        'Services',
        ' Business',
        'Furniture ',
        ' Books',
        'Kids'
        
      ];
      
    return(
      
        <div style={styles.drop}>
        <div>
          <ul>
        <li style={styles.list}>
        
        <FormControl fullWidth >
        <InputLabel htmlFor="ad-category" >
         Browse Categories
        </InputLabel>
         <Select
            
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
            renderValue={value => value}
            input={<Input id="ad-category" />}
            >
          {categories.map(category => (
              <MenuItem
                key={category}
                value={category}
                >
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        
        </li>
        </ul>
        </div>



        <div style={styles.gap}>
        <TextField
        label="Search for a specific product"
        name="query"
        type="text"
        // helperText={errors.adTitle}
        fullWidth={true}
        onChange={this.handleChanges}
        value={this.state.query}
        onKeyDown={(e) => { if (e.keyCode === 13) { this.search(); } }}
        // error={errors.adTitle ? true : false}
        required={true}
        
      />
          </div>
          </div>
   
)
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Browse);