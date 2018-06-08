import React from 'react';
import PropTypes from 'prop-types';

// gray background
const backdropStyle = {
    position:'fixed',
    top: 0,
    bottom:0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    
    
};




export default class Modal extends React.Component {
    onClose = (e) => {
        console.log("BUTTON CLICKED");
        e.stopPropagation ();
        this.props.onClose && this.props.onClose(e);
    }

    onKeyUp = (e) => {
        // Lookout for ESC key (27)
        if (e.which === 27 && this.props.show) {
            this.onClose(e);
        }
    }

    componentDidMount() {
        document.addEventListener("keyup", this.onKeyUp);
    }

    componentWillUnmount() {
        document.removeEventListener("keyup", this.onKeyUp);
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div style={backdropStyle}>
                
                     
                        {this.props.children}
               
            </div>
                    )

                   
         if (!this.props.showw) {
            return null;
        }
        return (
            <div style={backdropStyle}>
                
                    
                        {this.props.children}
                    
                            
            </div>    
            
        )

    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired
}