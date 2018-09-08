import React,{Component} from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './BrowseStyle.jsx';

class Browse extends Component{
    constructor(props){
    super(props)
    this.state={
        name:[],
        product:[]
    }

}
handleChange =(e) => {
    this.setState({name:e.target.value})
    
}
handleProduct=(e) => {
    this.setState({product:e.target.value})
}

render(){
    const names = [
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
      const products=[

      ]
    return(
<div style={styles.drop}>
<ul>
  <li style={styles.list}>
    <FormControl fullWidth >
    <InputLabel htmlFor="select-multiple" >
    Browse Categories
    </InputLabel>
    <Select
            
            multiple
            value={this.state.name}
            onChange={this.handleChange}
            input={<Input id="select-multiple" />}
            
          >
          {names.map(name => (
              <MenuItem
                key={name}
                value={name}
                
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </li>
<li style={styles.list}>
        <FormControl fullWidth>
    <InputLabel htmlFor="select-multiple" >
    Search for a Specific Products
    </InputLabel>
    <Select
            
            multiple
            autoWidth
            value={this.state.product}
            onChange={this.handleProduct}
            input={<Input id="select-multiple"/>}
            
          >
          {products.map(product => (
              <MenuItem
                key={product}
                value={product}
                
              >
                {product}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </li>
        </ul>


        

        
        
        </div>
    )
}
}
export default Browse;