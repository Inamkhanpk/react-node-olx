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
import PrivateRoute from './containers/MyAccount/PrivateRoute/PrivateRoute.js'
import NotFound from './components/NotFound/NotFound';
import CategoryAdsPage from './containers/CategoryAdsPage/CategoryAdsPage';
import SingleListingPage from './containers/SingleListingPage/SingleListingPage'
import UserAdsPage from './containers/UserAdsPage/UserAdsPage';

//import AuthAction from './store/actions/authAction'

//import jwt_decode from 'jwt-decode';
import setAuthToken from './components/setAuthToken';

if(localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    
    //const decoded = jwt_decode(localStorage.jwtToken);

    //store.dispatch(AuthAction.setCurrentUser(decoded));
  
    //const currentTime = Date.now() / 1000;
    //if(decoded.exp < currentTime) {
     //store.dispatch(AuthAction.logout());
      //window.location.href = '/login'
   // }
  }







ReactDOM.render((<Provider store = {store}>
        <Router >
         <Switch>
      <Route exact   path="/" component = {App}/>
      <Route exact   path="/login" component = {Login}/>
      <Route exact   path="/register" component = {Register}/>
      <Route exact   path="/category/:category" component={CategoryAdsPage} />
      <Route exact path="/item/:adId" component={SingleListingPage}/>
      <Route exact path="/user-ads/:userId" component={UserAdsPage} />
      <PrivateRoute exact   path="/my-account" component = {MyAccount}/>
      <PrivateRoute exact  path="/post-your-ad" component ={PostAdPage}/>
      <PrivateRoute exact  path="/my-account/ads" component={AdListingPage}/>
      <PrivateRoute exact path ="/my-account/messages"component={MyMessages}/>
      <PrivateRoute exact path="/my-account/saved-ads" component ={SavedAds}/>
      <Route exact path="/terms-of-use" component={TermsOfUse}/>
      <Route component={NotFound} />
           </Switch>
      </Router>
      </Provider>
     )     , document.getElementById('root'));
registerServiceWorker();
