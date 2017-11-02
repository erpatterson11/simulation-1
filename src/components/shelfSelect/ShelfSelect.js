import React, { Component } from 'react'

// MODULES

// COMPONENTS
import NavBar from '../navBar/NavBar'
import Button from '../button/Button'

// CSS
import './shelfSelect.css'

class ShelfSelect extends Component {

    // LIFECYCLE FUNCS
    constructor(props) { // define state and biind methods
        super(props) // defines props in constructor, reduces bugs
        this.state = {
            shelves: ["A", "B", "C", "D"]
        }
    }

    // CUSTOM FUNCS

    // RENDER
    render() {
        return (
            <div>
                <NavBar />
                <div className="button-container">
                    {this.state.shelves.map( val => {
                        return <Button 
                                    key={val} 
                                    text={`Shelf ${val}`} 
                                    type="red" 
                                    redirect={`/bins/${val}`} 
                                />
                            })
                    }
                </div>
            </div>
        )
    }
}

// EXPORT

export default ShelfSelect
