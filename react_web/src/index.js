import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {store} from './store';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import Login from './containers/Login/Login.js';
import Register from './containers/Register/Register.js';
import MyAccount from './containers/MyAccount/MyAccount.js';
import AdListingPage from './containers/MyAccount/AdListingPage/AdListingPage.js'
import MyMessages from './containers/MyAccount/MyMessages/MyMessages.js'
import PostAdPage from './containers/MyAccount/PostAdPage/PostAdPage.js'
import SavedAds from './containers/MyAccount/SavedAds/SavedAds.js'
import TermsOfUse from './components/TermsOfUse/TermsOfUse.js'



ReactDOM.render((
    <Provider store = {store}>
    
    <div>
     <Router >
         <div>
             <Switch>
      <Route exact   path="/" component = {App}/>
      <Route exact   path="/login" component = {Login}/>
      <Route exact   path="/register" component = {Register}/>
      <Route exact   path="/my-account" component = {MyAccount}/>
      <Route exact  path="/post-your-ad" component ={PostAdPage}/>
      <Route exact  path="/my-account/ads" component={AdListingPage}/>
      <Route exact path ="/my-account/messages"component={MyMessages}/>
      <Route exact path="/my-account/saved-ads" component ={SavedAds}/>
      <Route exact path="/terms-of-use" component={TermsOfUse}/>
           </Switch>
      
      
         </div>
     </Router>
     </div>
    
     </Provider>
     )
    
, document.getElementById('root'));
registerServiceWorker();
