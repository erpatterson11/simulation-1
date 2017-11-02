import React, { Component } from 'react'

// MODULES

// COMPONENTS

// CSS
import './actionButton.css'

class ActionButton extends Component {

    // LIFECYCLE FUNCS
    constructor(props) { // define state and biind methods
        super(props) // defines props in constructor, reduces bugs
        this.state = {
            disabled: false
        }
    }


    // RENDER
    render() {
        return (
                <button 
                    className={`button button-${this.props.type}`} 
                    disabled={this.state.disabled} 
                    onClick={this.props.action} 
                    style={this.props.style} 
                >
                    {this.props.text}
                </button>
        )
    }
}

// EXPORT

export default ActionButton
