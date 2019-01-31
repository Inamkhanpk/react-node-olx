import React,{Component } from 'react';
import TextField from '@material-ui/core/TextField'
import Appbar from './../../AppBar/AppBar.js'
import Navigation  from './../../Navigation/Navigation.js'
import {FormControl,Select,InputLabel,Input} from '@material-ui/core'
import {Link} from'react-router-dom'
import {Button,FormHelperText}from '@material-ui/core'
import Breadcrumbs from './../Breadcrumbs/Breadcrumbs.js'
import MenuItem  from '@material-ui/core/MenuItem';
import {isEmpty,isNumeric} from 'validator';
import {connect} from 'react-redux'
import  AdMiddleware  from './../../../store/middleware/admiddleware';




function mapStateToProps(state){
  return{
   resetForm :state.AdReducer.resetForm,
   
  }
}

function mapDispatchToProps(dispatch){
return {
  submitAd : (fd) => dispatch(AdMiddleware.submitAd(fd))
}

}

const resetAd = () => {
  return {
    adTitle: '',
    category: '',
    model: '',
    condition: '',
    price: '',
    adDescription: '',
    image: '',
    sellerName: '',
    sellerPhoneNumber: '',
    itemCity: ''
  }
};


const resetErrors = () => {
  return {
    adTitle: '',
    category: '',
    model: '',
    condition: '',
    price: '',
    adDescription: '',
    image: '',
    sellerName: '',
    sellerPhoneNumber: '',
    itemCity: ''
  }
};


class PostAdPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      ad:resetAd(),
      errors: resetErrors(),
      validateOnChange: false,
      resetForm:false
      
    
      

    };
   
    
  }

  static getDerivedStateFromProps(nextProps,prevState){
     console.log(" getDerivedStateFromProps",nextProps)
     console.log(" getDerivedStateFromProps",prevState)
    if(prevState.resetForm && nextProps.resetForm === true)
    return{ad:resetAd(),resetForm:true}

    
    return null
  }

  


  validateForm =() =>  {
      
    let { ad } = this.state;
    let errors = resetErrors();
    let valid = true;

    if (isEmpty(ad.adTitle)) {
      valid = false;
      errors.adTitle = "Please provide an ad title";
      
    } else if (ad.adTitle.length < 3) {
      valid = false;
      errors.adTitle = "Please provide a valid ad title";
      
    } else if (ad.adTitle.length > 50) {
      valid = false;
      errors.adTitle = "Title is too long";
      
    }

    if (isEmpty(ad.category)) {
      valid = false;
      errors.category = "Please select a category";
      
    }

    if (isEmpty(ad.model)) {
      valid = false;
      errors.model = "Please provide a model";
      
    } else if (ad.model.length > 50) {
      valid = false;
      errors.model = "Model is too long, max characters allowed is 50";
      
    }

    if (isEmpty(ad.condition)) {
      valid = false;
      errors.condition = "Please select a condition of your item";
      
    }

    if (isEmpty(ad.price)) {
      valid = false;
      errors.price = "Please enter price of the item";
      
    } else if (!isNumeric(ad.price)) {
      valid = false;
      errors.price = "price should be in numbers";
      
    } 

    let maxDescriptionChars = 1200;
    if (isEmpty(ad.adDescription)) {
      valid = false;
      errors.adDescription = "Please provide ad description";
      
    } else if (ad.adDescription.length < 50) {
      valid = false;
      errors.adDescription = "Ad description is not enough, please provide detailed description";
      
    } else if (ad.adDescription.length > maxDescriptionChars) {
      valid = false;
      errors.adDescription = `Ad description is too long, please provide breif description within the ${maxDescriptionChars} characters`;
      
    } 

    // debugger;
    if (Object.keys(ad.image).length < 1) {
      valid = false;
      errors.image = "Please upload atleast one image of your item";
      
    }

    if (isEmpty(ad.sellerName)) {
      valid = false;
      errors.sellerName = "Please provide seller's name is required";
      
    } else if (ad.sellerName.length < 3 || ad.sellerName.length > 50) {
      valid = false;
      errors.sellerName = "Please provide a valid seller name";
      
    }

    if (isEmpty(ad.itemCity)) {
      valid = false;
      errors.itemCity = "Please provide the city in which item to be sold";
      
    } else if (ad.itemCity.length < 3) {
      valid = false;
      errors.sellerName = "Please provide a valid city name in which item to be sold";
      
    }

    if (isEmpty(ad.sellerPhoneNumber)) {
      valid = false;
      errors.sellerPhoneNumber = "Please provide seller's phone number";
      
    } else if (!isNumeric(ad.sellerPhoneNumber)) {
      valid = false;
      errors.sellerPhoneNumber = "Please provide valid phone number";
      
    } else if (ad.sellerPhoneNumber.length < 10 || ad.sellerPhoneNumber.length > 15) {
      valid = false;
      errors.sellerPhoneNumber = "Please provide valid phone number";
      
    }

    this.setState({ errors });
    
    return valid;
  };



  


  handleChange = (e) => {
    let ad = this.state.ad;
    ad[e.target.name] = e.target.value;
    this.setState({ ad });
    
    

    if (this.state.validateOnChange) {
      this.validateForm();
    }
  };


  handleSelect = (e) => {
    let ad = this.state.ad;
    ad[e.target.name] = e.target.value;
    this.setState({ ad });
    
    

    if (this.state.validateOnChange) {
      this.validateForm();
    }

  };



  handleFiles = (e) => {
    let ad = this.state.ad;

      ad.image = e.target.files[0];
    
    
    this.setState({ ad });

    if (this.state.validateOnChange) {
      this.validateForm();
    }
  }



  
  
    /*console.log(this.state.ad)
    console.log(this.form)

    console.log(this.form.adTitle.value)
    
    const {adTitle,category,model,condition,price,adDescription,image,sellerName,itemCity,sellerPhoneNumber} =this.form
    
    
    console.log(adTitle,adTitle.value)
    console.log(category,category.value)
    console.log(model,model.value)
    console.log(condition,condition.value)
    console.log(price,price.value)
    console.log(adDescription,adDescription.value)
    console.log(image,image.value)
    console.log(sellerName,sellerName.value)
    console.log(itemCity,itemCity.value)
    console.log(sellerPhoneNumber,sellerPhoneNumber.value)
  
 for (var value of fd.values()) {
  console.log(value);}*/

  handleSubmit = () =>  {

    if(!this.validateForm()) {
      this.setState({ validateOnChange: true });
    
       }
    
       let fd = new FormData(this.form);

       for (var value of fd.values()) {
        console.log(value);}

        //for (var value of fd.entries())
       console.log(value)
      this.props.submitAd(fd)
    
    }
  




render() {
      
 

  
      const categories = [
        'Mobiles', 'Laptops', 'Clothes', 'Vehicles', 'Accessories',
        'Property', 'Bikes', 'Electronics', 'Jobs', 'Services', 'Business',
        'Furniture', 'Books', 'Kids'
      ];
      
      
      const categoryList = categories.map((category, index) => {
        return (
         
        <MenuItem key={index} value={category}>{category} </MenuItem >
      )
        
        
      });
      
      
      const breadcrumbs = [
        {
          link: '/my-account',
          text: '/My Account'
        },
        {
          text:  '/Post Your Ad'
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
                
                <form ref={(form) => this.form = form}   >
                
                    <h4>Post Your Ad</h4>
            
            <div className="form-group">
              <TextField
                label="Ad Title"
                name="adTitle"
                type="text"
                helperText={this.state.errors.adTitle}
                fullWidth={true}
                onChange={this.handleChange}
                value={this.state.ad.adTitle}
                error={this.state.errors.adTitle ? true : false}
                required={true}
                InputLabelProps={{ disableAnimation: false, focused: false, margin: 'dense' }}
              />
            </div>



            <div className="form-group">
              <FormControl error={this.state.errors.category ? true : false} fullWidth={true} required={true}>
                <InputLabel htmlFor="ad-category">Category</InputLabel>
                <Select
                  value={this.state.ad.category}
                  onChange={this.handleSelect}
                  autoWidth={true}
                  name="category"
                  renderValue={value => value}
                  input={<Input id="ad-category" />}
                >
                  {categoryList}
                </Select>
              {<FormHelperText>{this.state.errors.category}</FormHelperText>}
              </FormControl>
            </div>

            <div className="form-group">
              <TextField
                label="Model"
                name="model"
                type="text"
                helperText={this.state.errors.model}
                fullWidth={true}
                onChange={this.handleChange}
                value={this.state.ad.model}
                error={this.state.errors.model ? true : false}
                required={true}
              />
            </div>



              <div className="form-group">
              <FormControl  error={this.state.errors.condition ? true : false} fullWidth={true} required={true}>
                <InputLabel htmlFor="ad-item-condition">Condition</InputLabel>
                <Select
                  value={this.state.ad.condition}
                  onChange={this.handleSelect}
                   autoWidth={true}
                  name="condition"
                  renderValue={value => value}
                  input={<Input id="ad-item-condition" />}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="new">new</MenuItem>
                  <MenuItem value="used">used</MenuItem>
                </Select>
                {<FormHelperText>{this.state.errors.condition}</FormHelperText>}
              </FormControl>
            </div>



              <div className="form-group">
              <TextField
                label="Price"
                name="price"
                type="text"
                helperText={this.state.errors.price}
                fullWidth={true}
                onChange={this.handleChange}
                value={this.state.ad.price}
                error={this.state.errors.price ? true : false}
                required={true}
              />
            </div>



              <div className="form-group">
              <TextField
                label="Description"
                name="adDescription"
                multiline={true}
                rows={7}
                helperText={this.state.errors.adDescription}
                fullWidth={true}
                onChange={this.handleChange}
                value={this.state.ad.adDescription}
                error={this.state.errors.adDescription ? true : false}
                required={true}
              />
            </div>
            
            
{             
              
        <div  className="form-group">
          <input
          
            accept="image/*"
            type="file"
            name="image"
            onChange={ this.handleFiles}
          />
          <label htmlFor="image">
            <Button variant="contained" component="span" >
              Image 
            </Button>
          </label> 
</div>}
          
            
            
            

              <h4>Seller Information</h4>
              <div className="form-group">
              <TextField
                label="Seller Name"
                name="sellerName"
                type="text"
                helperText={this.state.errors.sellerName}
                fullWidth={true}
                onChange={this.handleChange}
                value={this.state.ad.sellerName}
                error={this.state.errors.sellerName ? true : false}
                required={true}
              />
            </div>


               <div className="form-group">
              <TextField
                label="Item to be sold in which city?"
                name="itemCity"
                type="text"
                helperText={this.state.errors.itemCity}
                fullWidth={true}
                onChange={this.handleChange}
                value={this.state.ad.itemCity}
                error={this.state.errors.itemCity ? true : false}
                required={true}
              />
            </div>


              <div className="form-group">
              <TextField
                label="Seller phone number"
                name="sellerPhoneNumber"
                type="text"
                helperText={this.state.errors.sellerPhoneNumber}
                fullWidth={true}
                onChange={this.handleChange}
                value={this.state.ad.sellerPhoneNumber}
                error={this.state.errors.sellerPhoneNumber ? true : false}
                required={true}
              />
            </div>

            <div className="form-group">
              <small>
                  By clicking {'Submit'} you confirm that you have carefully read and understood all the facts, statements and conditions stated in the <Link to="/terms-of-use">Terms of Use</Link> &amp; Posting Rules of our website to which you unconditionally agree and accept as true and correct and constituting a binding agreement between us.
                </small>
                </div>

              <div className="form-group">  
                <Button
                variant="contained" color="primary"
                onClick={this.handleSubmit} 
                >
                SUBMIT YOUR AD
                </Button>
              </div>
        
          
        
        </form>
        <Navigation/>

            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostAdPage);
