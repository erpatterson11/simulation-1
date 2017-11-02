import React, { Component } from 'react'

// MODULES

// COMPONENTS
import { Link } from 'react-router-dom'


// CSS
import './button.css'

class Button extends Component {

    // LIFECYCLE FUNCS
    constructor(props) { // define state and biind methods
        super(props) // defines props in constructor, reduces bugs
        this.state = {
            disabled: false
        }
    }

    // CUSTOM FUNCS

    // RENDER
    render() {
        return (
            <Link to={this.props.redirect} >
                <button 
                    className={`button button-${this.props.type}`} 
                    disabled={this.state.disabled} 
                    onClick={this.props.onClick} 
                    style={this.props.style} 
                >
                    {this.props.text}
                </button>
            </Link>
        )
    }
}


// EXPORT

export default Button

// REDUX EXPORT

// export default connect( mapStateToProps, mapActionsToProps )(Button)