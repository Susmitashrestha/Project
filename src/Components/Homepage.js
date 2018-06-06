import React,{Component} from 'react';
import Banner from './Banner';
import Header from './Header';
import BtNav from './BtNav';

class Homepage extends Component{

	render(){
		return(
			<div>
				<div>
				
				<Header/>
				<Banner/>
				
				</div>
				<BtNav/>
			</div>
);
	}
}
export default Homepage;