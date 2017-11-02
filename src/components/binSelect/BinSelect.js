import React, { Component } from 'react'

// MODULES
import axios from 'axios'

// COMPONENTS
import NavBar from '../navBar/NavBar'
import Button from '../button/Button'


// CSS
import './binSelect.css'

class ShelfSelect extends Component {

    // LIFECYCLE FUNCS
    constructor(props) { // define state and biind methods
        super(props) // defines props in constructor, reduces bugs
        this.state = {
            bins: [{bin: 1, name: null}, {bin: 2, name: null}, {bin: 3, name: null}, {bin: 4, name: null}, {bin: 5, name: null}]
        }
    }

    // CUSTOM FUNCS
    componentDidMount() {
        axios.get(`http://localhost:3005/api/shelf/${this.props.match.params.bin}`).then( data => {   
            this.setState({bins: data.data})
        } )
    }

    // RENDER
    render() {
        
        const { bin } = this.props.match.params
        return (
            <div>
                <NavBar logo bin={bin} />
                <div className="button-container">
                    {this.state.bins.map( val => {
                        return <Button 
                                    key={val.bin} 
                                    text={val.name ? `Bin ${val.bin}` : "+ Add inventory to bin"} 
                                    type={val.name ? "light-red" : "lightest-red"}
                                    redirect={val.name ? `/bin/${bin + val.bin}` : `/create/${bin + val.bin}`} 
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