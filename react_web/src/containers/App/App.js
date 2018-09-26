import React, { Component } from 'react';

import Browse from './../Browse/Browse';
import Items from './../Items/Items';
import Home from './../Home/Home';
import DisplayAds from './../DisplayAds/DisplayAds';
import Navigation from './../Navigation/Navigation';


import Appbar from './../AppBar/AppBar';









class App extends Component {
  
  
  
  
  
  
render() {
  
    
  
  return (
    <div>
      
      <div>
        <Appbar/>
        </div>
        
        <div>
        <Browse/>
        </div>
        <div>
        <Items/>
        </div>
        <div>
        <Home/>
        </div>
        <div>
        <DisplayAds/>
        </div>
        <div>
        <Navigation/>
        </div>
      
          </div>
    )
  }
}


export default App;
