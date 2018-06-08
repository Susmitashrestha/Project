import React,{Component} from 'react';
import Home from './Home.css';
import Modal from './Modal/Modal';
import Signup from './Signup';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import green from '@material-ui/core/colors/green';
import purple from '@material-ui/core/colors/purple';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Link } from 'react-router-dom';





const styles = theme => ({
  card: {
  	maxWidth:550,
  	height:500,
    display:"flex",
    marginTop:100,
    marginLeft:450,
    paddingTop:'0%',
    
  },
  
  avatar: {
    backgroundColor: purple[500],
    

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
  	backgroundColor:green[600],
  },
  form:{
  	marginLeft:20,
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
class Login extends Component{

	constructor(props){
	super(props)
	this.state={
		UserName:'',
		Password:'',
		Remember:'true',
		
	}
}
state = {
    
    showw:false
  }

   showModall = () => {
    this.setState({
      ...this.state,
      showw: !this.state.showw
    });
}

 
	render(){
		const { classes } = this.props;

		return(
				<div>
				
					
					<Card className={classes.card}>
						<Avatar className={classes.avatar}>
						L
						</Avatar><br/>
					
							<h3 className={classes.h1}>Login<br/></h3><br/>

            			<form className={classes.form}>
							<TextField
							required
						         id= "name"
  								 label="UserName"
						         placeholder="Enter username"
					         	 className={classes.cont}
					         	 InputLabelProps={{
								            shrink: true,
									          }}
							     value={this.state.UserName}
							     onChange={(e) =>this.onChangeUserName(e)}  	
					        /><br /><br/>
					        
					        <TextField
					        required
						         id= "name"
  								 label="Password"
						         placeholder="Enter Password"
								className={classes.cont}
								InputLabelProps={{
								shrink: true,
								}}
					         	 value={this.state.Password}
					         	 onChange={(e) =>this.onChangePassword(e)}
					       			/><br/>
					   
						            <FormControlLabel
						            	control={
							              <Checkbox
											checked={this.state.Remember}
							                onChange={this.handleChange('Remember')}
							                value="Remember Me"
							              />
							         	 }
							              label="Remember Me"
						              /><br/>
						              <Button variant="flat" className={classes.button}>
        				Login
      					</Button>
      					
      					<p className={classes.p}>Do not have an account?|<Button variant="flat" onClick={this.showModall}className={classes.buttonn}>
      					
        				Register Here..
      					</Button></p>
      					</form>
      					
						       
					</Card>

				<Modal onClose={this.showModall} show={this.state.showw}>
					              <Signup/>
					        </Modal>	
				</div>
	)}
	onChangeUserName(e) {
    this.setState({
    	UserName:e.target.value
    })
  }
  onChangePassword(e) {
    this.setState({
    	Password:e.target.value
    })
  
}
handleChange = Remember => event => {
    this.setState({ [Remember]: event.target.checked });
  };

			
}
export default withStyles(styles) (Login);