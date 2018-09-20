import React ,{Component} from 'react';
import Appbar from './../../AppBar/AppBar.js'
import Navigation from './../../Navigation/Navigation'

class MyMessages extends Component{
    render(){
        return(
            <div>
                <Appbar/>
                <Navigation/>
                </div>
        )
    }
}
export default MyMessages;