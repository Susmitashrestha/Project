import React,{Component} from 'react';
import Modal from './Modal/Modal';
import Login from './Login';


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
  	maxWidth:550,
  	maxHeight:500,
    display:"flex",
    marginTop:100,
    marginLeft:450,
    paddingTop:'0%',
    overflow:'scroll'

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
  p:{
  	color:'#161616',
  	fontSize:16,
  },
  buttonn:{
  	backgroundColor:'#fff',
  	color:'#161616'
  }

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
		state = {
    		show: false,
  }
  		showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
}
		
render(){
		const { classes } = this.props;

		return(
			<div>
				<Card className={classes.card}>	
					<h3 className={classes.h1}>Signup</h3>
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
									/><br />
								<Button variant="flat" className={classes.button} onClick={()=>this.onSubmit()} >
		        				Create Account
		      					</Button>
		      					</form>
		      					<p className={classes.p}>Already have an account?|<Button variant="flat" className={classes.buttonn} onClick={this.showModal} >
		        				Sign in
		      					</Button></p>
		      					
		      			</CardContent>
      					
			   </Card> 
			   <Modal onClose={this.showModal} show={this.state.show}>
		              <Login/>
				</Modal>    
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