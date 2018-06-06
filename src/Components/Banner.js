import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './Home.css';
//import Login from './Login'
import Button from '@material-ui/core/Button';

//import RaisedButton from 'material-ui/RaisedButton';


const Banner = () =>{
	return(
		<div>
			<div className="Main">
				<div className="title">Craving for FOOD?
					Let the search begin..
					<div>
						<Button component={Link} to="/Login"className="button" >
        				Login
      					</Button>
      					<Button component={Link} to="/Signup"className="sign" >
        				Signup
      					</Button>
      				</div>
      			</div>
				
				</div>
		
			</div>
		

		
		
		);
}
export default Banner;