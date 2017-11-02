import React, { Component } from 'react'

// MODULES


// COMPONENTS
import Logo from './logo/Logo'
import { Link } from 'react-router-dom'

// CSS
import './navBar.css'

class NavBar extends Component {

    // LIFECYCLE FUNCS
    constructor(props) { // define state and biind methods
        super(props) // defines props in constructor, reduces bugs
        this.state = {}
    }

    // CUSTOM FUNCS

    // RENDER
    render() {
        return (
            <nav className={`navbar-container ${this.props.bin ? `bin-button` : this.props.shelf ? `shelf-button` : '' }`}>
                    <div className="nav-button logo-button">
                <Link to="/">
                        <Logo />
                        {
                            !this.props.logo
                            &&
                            <p>Shelfie</p>
                        }
                </Link>
                    </div>
                {
                        this.props.shelf 
                        &&
                        <div className="nav-button shelf-button">
                    <Link to={`/bins/${this.props.shelf}`}>
                            <p>Shelf {this.props.shelf}</p>
                    </Link>
                        </div>
                }
                {   
                    this.props.bin 
                    &&
                    <div className="nav-button bin-button bin-last-button">
                        <p>Bin {this.props.bin}</p>
                    </div>
                }
                {   
                    this.props.addToBin 
                    &&
                    <div className="nav-button bin-button bin-last-button">
                        <p>Add to Bin {this.props.addToBin}</p>
                    </div>
                }
            </nav>  
        )
    }
}

// EXPORT

export default NavBar
