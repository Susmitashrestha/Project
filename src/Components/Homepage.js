import React,{Component} from 'react';
import Banner from './Banner';
import Header from './Header';
import BtNav from './BtNav';

class Homepage extends Component{
top={
	maxHeight:"500vh"
};
	render(){
		return(
			<div>
				<div style={this.top}>
				
				<Header/>
				<Banner/>
				</div>
				<BtNav/>

			</div>

);
	}
}
export default Homepage;