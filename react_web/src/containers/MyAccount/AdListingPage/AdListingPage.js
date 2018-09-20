import React,{Component} from 'react'
import Appbar from './../../AppBar/AppBar.js'
import Navigation from './../../Navigation/Navigation.js'
import Breadcrumbs from './../Breadcrumbs/Breadcrumbs.js'
const breadcrumbs = [
    {
      link: '/my-account',
      text: 'My Account'
    },
    {
      text: 'My Ads'
    }
  ]
  
class  AdListingPage extends Component{
    render(){
        return(
            <div>
                <Appbar/>
                <Breadcrumbs
          breadcrumbs={breadcrumbs}
        />



                <Navigation/>

            </div>

        )
    }
}
export default AdListingPage;