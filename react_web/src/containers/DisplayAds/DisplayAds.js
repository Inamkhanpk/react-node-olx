import React,{ Component } from 'react';
import styles from './DisplayAdsStyle.jsx';
class DisplayAds extends Component{
    render(){
        return(
            <div style={styles.fontBig}>
                Displaying All Ads
                We Found    items
           </div>
        )
    }
}
export default DisplayAds;