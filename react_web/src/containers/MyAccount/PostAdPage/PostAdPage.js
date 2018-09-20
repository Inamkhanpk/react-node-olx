import React,{Component } from 'react';
import TextField from '@material-ui/core/TextField'
import Appbar from './../../AppBar/AppBar.js'
import Navigation  from './../../Navigation/Navigation.js'
import {FormControl,Select,InputLabel}from'@material-ui/core'
import {Link} from'react-router-dom'
import Button from '@material-ui/core/Button'
import Breadcrumbs from './../Breadcrumbs/Breadcrumbs.js'

class PostAdPage extends Component{
    render(){
      const breadcrumbs = [
        {
          link: '/my-account',
          text: 'My Account'
        },
        {
         // text: ad._id ? 'Edit Ad' : 'Post Your Ad'
        }
        
      ];
        return(
            <div>
                
            <Appbar/>
            <Breadcrumbs
          breadcrumbs={breadcrumbs}
        />
                <form>
                    <h4>Post Your Ad</h4>
                <TextField
          
          
          
          placeholder="Ad Title"
        
          fullWidth
          margin="normal"
        />
        <FormControl   fullWidth required={true}>
                <InputLabel >Category</InputLabel>
                <Select
                  
                  
                  // autoWidth={true}
                  name="category"
                  
                
                >
                  
                </Select>
                
              </FormControl>
              <TextField
                label="Model"
                name="model"
                type="text"
                
                fullWidth
            
                
                
                required={true}
              />
              <FormControl  fullWidth required={true}>
                <InputLabel htmlFor="ad-item-condition">Condition</InputLabel>
                <Select
                
                  
                  // autoWidth={true}
                  name="condition"
                
                  
                >
                  
                  
                </Select>
            
              </FormControl>
              <TextField
                label="Price"
                name="price"
                type="text"
                
                fullWidth
                
                
                
                required
              />
              <TextField
                label="Description"
                name="adDescription"
            
                
            
                fullWidth={true}
                
                
                
                required={true}
              />
              <h4>Seller Information</h4>
              <TextField
                label="Seller Name"
                name="sellerName"
                type="text"
                
                fullWidth
                
                
                
                required={true}
              />
              <TextField
                label="Item to be sold in which city?"
                name="itemCity"
                type="text"
                
                fullWidth
                
                
                
                required={true}
              />
              <TextField
                label="Seller phone number"
                name="sellerPhoneNumber"
                type="text"
                
                fullWidth
                
                
            
                required={true}
              />
              <small>
                  By clicking {'Submit'} you confirm that you have carefully read and understood all the facts, statements and conditions stated in the <Link to="/terms-of-use">Terms of Use</Link> &amp; Posting Rules of our website to which you unconditionally agree and accept as true and correct and constituting a binding agreement between us.
                </small>
                <Button
                variant="contained" color="primary" 
            
                
              >
              SUBMIT YOUR AD
                
                
              </Button>
        
          
        
        </form>
        <Navigation/>

            </div>
        )
    }
}
export default PostAdPage;
