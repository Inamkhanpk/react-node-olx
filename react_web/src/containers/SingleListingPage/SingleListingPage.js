import React,{Component } from 'react';
import Breadcrumbs from './../MyAccount/Breadcrumbs/Breadcrumbs';
import {connect} from 'react-redux';
import  AppBar from './../AppBar/AppBar'
import  AdMiddleware  from './../../store/middleware/admiddleware';
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import TextField from '@material-ui/core/TextField'
import { isEmpty, isNumeric } from 'validator';
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import DialogActions from '@material-ui/core/DialogActions'

function mapStateToProps(state){
  return{
   ads:state.AdReducer.ads
  }
}

function mapDispatchToProps(dispatch){
  return{
   getAdById :(adId)=>dispatch(AdMiddleware.getAdById(adId))
   //adViewLater:(adId) =>dispatch(Admiddleware.adViewLater(adId))
   //sendMessage :(contactMessage)=>dispatch(AdMiddleware.sendMessage(contactMessage))
  }
}

function resetContact() {
  return { name: '', contactNumber: '', message: '' };
}

class SingleListingPage extends Component {
  constructor(props){
    super(props)
    this.state={
      ad:this.props.match.params.adId,
      openMessageDialog: false,
      contactToSeller: resetContact(),
      contactToSellerErrors: resetContact(),
      validateOnChange: false,
    }
  }



  validateContactForm = () => {
    let contact = this.state.contactToSeller;
    let errors = resetContact();
    let valid = true;

    if (isEmpty(contact.name)) {
      errors.name = "Please provide your name";
      valid = false;
    } else if (contact.name.length < 3 || contact.name.length > 30) {
      errors.name = "Please provide a valid name";
      valid = false;
    }

    if (isEmpty(contact.contactNumber)) {
      errors.contactNumber = "Please provide your contact number so that seller can contact you";
      valid = false;
    } else if (!isNumeric(contact.contactNumber)) {
      errors.contactNumber = "Only digits are allowed in contact number";
      valid = false;
    } else if (contact.contactNumber.length < 10 || contact.contactNumber.length > 15) {
      errors.contactNumber = "Please provide a valid phone number";
      valid = false;
    }

    if (isEmpty(contact.message)) {
      errors.message = "Please Enter your message";
      valid = false;
    } else if (contact.message.length < 25) {
      errors.message = "Message is too short, please describe your message breifly.";
      valid = false;
    } 

    this.setState({ contactToSellerErrors: errors });
    return valid;
  };

  componentDidMount() {
    console.log("componentDidMount",this.props)
/*if (!this.state.ad) {*/
      //getAdById({adId:this.state.ad})
        /*.then(ad => {
          this.setState({ ad: ad });
        }).catch(err => console.error(err));
    }*/
  }


  handleChange = (e) => {
    let contactToSeller = this.state.contactToSeller;
    contactToSeller[e.target.name] = e.target.value;
    this.setState({ contactToSeller });

    if (this.state.validateOnChange) {
      this.validateContactForm();
    }
  };
  
  handleOpenMessageDialog = () => {
    this.setState({ openMessageDialog: true });
  };


  handleCloseMessageDialog = () => {
    this.setState({ openMessageDialog: false, contactToSeller: resetContact() });
  };

  adViewLater(adId) {
    this.props.adViewLater(adId);
  };

  handleSubmitContactForm = () => {
    if (!this.validateContactForm()) {
      return this.setState({ validateOnChange: true });
    }
    let contactMessage = this.state.contactToSeller;
    contactMessage.adId = this.state.ad._id;
    contactMessage.receiver = this.state.ad.uploader._id;
    this.props.sendMessage(contactMessage);
    this.handleCloseMessageDialog();
  };

  render(){
   const {adById} = this.props
     const {openMessageDialog,contactToSellerErrors,contactToSeller}= this.state

    const breadcrumbs = [
      {
        link: `/category/${adById.category}`,
        text: adById.category
      },
      {
        text: adById.title
      }
    ]

    return(
      <div>

        
        <AppBar/>
           
        <Breadcrumbs
          breadcrumbs={breadcrumbs}
        />


            <h2>{adById.title}</h2>
                  <div >
                    <ul >
                      <li ><i ></i> {adById.itemCity}</li>
                      <li ><span className="text-muted">|</span></li>
                      <li ><i ></i> added on {/*adDate*/}</li>
                      <li >Ad ID: {adById._id.substring(adById._id.length - 8)}</li>
                    </ul>
                  </div>

                   <div >
                      <ul >
                        <li >Model: {adById.model}</li>
                        <li >Condition: {adById.condition}</li>
                      </ul>
                    </div>

                    <div >{adById.description}</div>

                <span className="item-price">Rs. {adById.price}</span>
                

                 <img className="img-fluid" /*src={userIcon}*/ /*alt={ad.sellerName}*/ />

                 <h3>Selling</h3>
                      <p className="text-muted">
                        (Member since {/*memberSince*/})
                    </p>
                      <Link to={`/user-ads/${adById.uploader._id}`}>User Ads</Link>


                      <h3>Seller Information</h3>
                      <span className="text-muted">
                        Name: {adById.sellerName} <br/>
                        Phone: {adById.sellerPhoneNumber}
                      </span>

                      <h3 className="text-center">Safety Tips for Buyers</h3>
                      <ol className="safety-tips">
                        <li>Meet seller at a safe location</li>
                        <li>Check the item before you buy</li>
                        <li>Pay only after collecting item</li>
                      </ol>



                      <div className="custom-listing-btn">
                      <span><a href="javascript:void(0)" //onClick={/*() => adViewLater(ad._id,)*/
                      ><i className="fa fa-clock-o"></i> Save to view later</a></span>
                      </div>


                <div className="custom-listing-btn">
                    <a href="javascript:void(0)" onClick={this.handleOpenMessageDialog}><i className="fa fa fa-send-o"></i> Send message to seller</a>
                  </div>



                  <Dialog
                    //fullScreen={fullScreen}
                    open={openMessageDialog}
                    onClose={this.handleCloseMessageDialog}
                    aria-labelledby="form-dialog-title"
                  >

                  <DialogTitle id="form-dialog-title">Message to seller</DialogTitle>
                  <DialogContent>
                      <DialogContentText>
                        Please provide your name and contact number so that seller can contact you back on your message.
                      </DialogContentText>


                      <div className="form-group">
                        <TextField
                          label="Your Name"
                          name="name"
                          type="text"
                          helperText={contactToSellerErrors.name}
                          fullWidth={true}
                          onChange={this.handleChange}
                          value={contactToSeller.name}
                          error={contactToSellerErrors.name ? true : false}
                          required={true}
                          InputLabelProps={{ disableAnimation: false, focused: false, margin: 'dense' }}
                        />
                        </div>


                        <div className="form-group">
                        <TextField
                          label="Contact Number"
                          name="contactNumber"
                          type="text"
                          helperText={contactToSellerErrors.contactNumber}
                          fullWidth={true}
                          onChange={this.handleChange}
                          value={contactToSeller.contactNumber}
                          error={contactToSellerErrors.contactNumber ? true : false}
                          required={true}
                          InputLabelProps={{ disableAnimation: false, focused: false, margin: 'dense' }}
                        />
                      </div>


                      <div className="form-group">
                        <TextField
                          label="Message"
                          name="message"
                          type="text"
                          multiline={true}
                          rows={6}
                          helperText={contactToSellerErrors.message}
                          fullWidth={true}
                          onChange={this.handleChange}
                          value={contactToSeller.message}
                          error={contactToSellerErrors.message ? true : false}
                          required={true}
                          InputLabelProps={{ disableAnimation: false, focused: false, margin: 'dense' }}
                        />
                      </div>
                      

                    </DialogContent>

                    <DialogActions>
                    <Button onClick={this.handleCloseMessageDialog} color="primary">
                      Cancel
                      </Button>
                    <Button onClick={this.handleSubmitContactForm} color="primary">
                      Send Message
                    </Button>
                  </DialogActions>
                  </Dialog>
      
                
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SingleListingPage);