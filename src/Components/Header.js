import React, { Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Homepage from './Homepage';

import head from '../Images/head.jpg'

class Header extends Component{
	appStyle = {
       backgroundColor: '#D4914E',
       justifyContent: "center",
       height:"10.5vh"

  } 

	render(){
		return(
			
			<div>
			<AppBar style={this.appStyle}  position="static" >
        <Toolbar>
          <Typography variant="title">
            <Link to="/Homepage"><img src={head} height="70.5" width="90"/></Link>
          </Typography>
        </Toolbar>
      </AppBar>
		 
			</div>
			
		);
	}
}
export default Header; 