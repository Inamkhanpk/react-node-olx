import React ,{Component} from 'react';
import Appbar from './../../AppBar/AppBar.js'
import Navigation from './../../Navigation/Navigation'
import Breadcrumbs from './../Breadcrumbs/Breadcrumbs.js'

const breadcrumbs = [
    {
      link: '/my-account',
      text: '/My Account'
    },
    {
      text: '/My Messages'
    }
  ]

class MyMessages extends Component{
    render(){

        return(
            
            <div>
                
                <Appbar/>
                <div style={{marginTop:30,marginLeft:30,backgroundColor:'red',height:50,borderRadius:10, padding:10}}>
                <Breadcrumbs
          breadcrumbs={breadcrumbs}
        />
        </div>
                <Navigation/>
                </div>
        )
    }
}
export default MyMessages;