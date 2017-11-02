import React, { Component } from 'react'

// MODULES
import axios from 'axios'

// COMPONENTS
import NavBar from '../navBar/NavBar'
import ActionButton from '../actionButton/ActionButton'

// CSS
import './create.css'

class Create extends Component {

    // LIFECYCLE FUNCS
    constructor(props) { // define state and biind methods
        super(props) // defines props in constructor, reduces bugs
        this.state = {
            nameInput: "",
            priceInput: 0
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.submitNewData = this.submitNewData.bind(this)
    }

    // CUSTOM FUNCS
    handleNameChange(val) {
        this.setState({nameInput: val})
    }

    handlePriceChange(val) {
        this.setState({priceInput: val.replace("$", "")})
    }

    submitNewData() {
        if (this.state.nameInput && this.state.priceInput) {
            const bin = this.props.match.params.bin[1]
            const shelf = this.props.match.params.bin[0]
            axios.put('/api/bins', {
                bin,
                shelf,
                name: this.state.nameInput,
                price: this.state.priceInput
            }).then(res => this.props.history.push(`/bins/${shelf}`))
        } else {
            
        }
    }


    // RENDER
    render() {
        const binPath = this.props.match.params.bin
        const shelf = binPath[0]
        const bin = binPath[1]
        return (
            <div>
                <NavBar logo shelf={shelf} addToBin={bin}/>
                <div className="create-container">
                    <p className="create-header-text">Name</p>
                    <input className="create-input" value={this.state.nameInput} onChange={(e) => this.handleNameChange(e.target.value)}/>
                    <p className="create-header-text">Price</p>
                    <input className="create-input" value={"$" + this.state.priceInput} onChange={(e) => this.handlePriceChange(e.target.value)}/>
                    <ActionButton text="+ Add to Inventory" type="green" action={this.submitNewData} />
                </div>
            </div>
        )
    }
}

// EXPORT
export default Create
