import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './Home.css';
import Login from './Login';
import Signup from'./Signup';
import Button from '@material-ui/core/Button';
import Modal from './Modal/Modal';

//import RaisedButton from 'material-ui/RaisedButton';


class Banner extends Component{
	state = {
    show: false,
    showw:false
  }

   showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
}

     showModall = () => {
    this.setState({
      ...this.state,
      showw: !this.state.showw
    });
  }
	render(){
	return(
		<div>
			<div className="Main">
				<div className="title">Craving for FOOD?
					Let the search begin..
					<div>
						<Button  variant="raised" className="button"  onClick={this.showModal}>
        				Login
      					</Button>
      					<Button variant="raised" className="sign" onClick={this.showModall}>
        				Signup
      					</Button>

      					<Modal onClose={this.showModal} show={this.state.show}>
					              <Login/>
					        </Modal>
					        <Modal onClose={this.showModall} show={this.state.showw}>
					              <Signup/>
					        </Modal>
      				</div>
      			</div>
				
				</div>
		
			</div>
		
);
}
}
export default Banner;