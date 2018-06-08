import React,{Component} from 'react';

import Paper from '@material-ui/core/Paper';


class BtNav extends Component{
	paper={
		height:"10vh"
	}
	render(){
		return(
			<div>
			<Paper className={this.paper}>
			This is paper 
			</Paper>
			</div>
			)
	}
}
export default BtNav;