import React, { Component } from 'react'

import logo from './logo.png'

// CSS
import './logo.css'

class Logo extends Component {

    // LIFECYCLE FUNCS
    constructor(props) { // define state and biind methods
        super(props) // defines props in constructor, reduces bugs
        this.state = {}
    }

    // CUSTOM FUNCS

    // RENDER
    render() {
        return (
            <img src={logo} className="logo" />
        )
    }
}

export default Logo
