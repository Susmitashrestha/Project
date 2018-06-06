import React,{Component} from 'react';
import Header from './Header';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {Link } from 'react-router-dom';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';



const styles = theme => ({
  card: {
  	maxWidth:500,
  	height:500,
    display:"flex",
    marginTop:100,
    marginLeft:450,
    paddingTop:'0%',

  },
  
  
  
  cont:{
  	marginTop:theme.spacing.unit,
	marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
 
  },
  h1:{
  	color:purple[500],
  	marginLeft:20,
  },
  button:{
  	buttonSize:100,
  	backgroundColor:green[300],
  },
  form:{
  	marginLeft:20,
  },
  FormLabel:{
  	fontSize:24,
  },
  button:{
  	buttonSize:100,
  	backgroundColor:green[300],
  },

});

class Signup extends Component{
	constructor(props){
		super(props)
				this.state={
					firstname:'',
					lname:'',
					email:'',
					username:'',
					password:'',
				}
		
		}
		
render(){
		const { classes } = this.props;

		return(
			<div>
					<Header/>
					<Card className={classes.card}>
								
									<h1 className={classes.h1}>Sign up<br/></h1><br/>
									<CardContent>

		            			<form className={classes.form}>
									<TextField
									required
								         name= "firstname"
		  								 label="First Name"
								         placeholder="Enter FirstName"
							         	 className={classes.cont}
							         	 InputLabelProps={{
									            shrink: true,
									            className: classes.FormLabel,
									          }}
								         value={this.state.firstname}
								         onChange={(e) => this.change(e)}
									/><br/><br/>

									<TextField
									required
								         name= "lname"
		  								 label="Last Name"
								         placeholder="Enter LastName"
							         	 className={classes.cont}
							         	 InputLabelProps={{
									            shrink: true,
									            className: classes.FormLabel,
									          }}
									          value={this.state.lname}
								         onChange={(e) => this.change(e)}
									/><br /><br/>

									<TextField
									required
								         name= "email"
		  								 label="Email"
								         placeholder="abc@email.com"
							         	 className={classes.cont}
							         	 InputLabelProps={{
									            shrink: true,
									            className: classes.FormLabel,
									          }}
									          value={this.state.email}
								         onChange={(e) => this.change(e)}
									/><br /><br/>

									<TextField
									required
								         name= "username"
		  								 label="Username"
								         placeholder="username"
							         	 className={classes.cont}
							         	 InputLabelProps={{
									            shrink: true,
									            className: classes.FormLabel,
									          }}
									        value={this.state.username}
								         	onChange={(e) => this.change(e)}
									/><br /><br/>
									<TextField
									required
								         name= "password"
		  								 label="password"
										 placeholder="********"
							         	 className={classes.cont}
							         	 InputLabelProps={{
									            shrink: true,
									            className: classes.FormLabel,
									          }}
									     value={this.state.password}
								         onChange={(e) => this.change(e)}
									/><br /><br/>

								 </form><br/>
								 <Button className={classes.button} onClick={()=>this.onSubmit()} >
        				Create Account
      					</Button><br/>
      					<p>Already have an account?  | <Button component={Link} to="/Login"className="button" >
        				Sign in
      					</Button></p>

      					</CardContent>
      					
			        </Card>
			</div>
			);
	}
	change = e =>{
			this.setState({
				[e.target.name]:e.target.value
			})
		}
}
export default withStyles(styles) (Signup);