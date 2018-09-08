import React,{Component} from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


class Navigation extends Component{
    state = {
        value: 'recents',
      };
      
  handleChange = (event, value) => {
    this.setState({ value });
  };
    render(){
        const { classes } = this.props;
    const { value } = this.state;
        return(
            <div>
       <BottomNavigation value={value} onChange={this.handleChange} showLabels>
       <BottomNavigationAction label="Location map{<br/>} Popular Searches <br/>sitemap" value="recents"  />
        <BottomNavigationAction label="Location map<br/> Popular Searches <br/>sitemap" value="recents"  />
        <BottomNavigationAction label="Terms of Use <br/>Help & contact us" value="favorites"  />
        <BottomNavigationAction label="who we are <br/>Join OLX<br/> Happy OLXers" value="nearby"  />
        <BottomNavigationAction label="Contact Us<br/>help@olx.com.pk<br/>080010101(9:30am to 6:30pm)<br/>
        Business Packages(featured ads, advertising)
        <br/>click here" value="folder"  />
      </BottomNavigation>
                </div>
        )
    }

}
export default Navigation;
