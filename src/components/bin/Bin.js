import React, { Component } from 'react'

// MODULES
import axios from "axios"

// COMPONENTS
import NavBar from '../navBar/NavBar'
import ActionButton from '../actionButton/ActionButton'


// CSS
import './bin.css'

class ShelfSelect extends Component {

    // LIFECYCLE FUNCS
    constructor(props) { // define state and biind methods
        super(props) // defines props in constructor, reduces bugs
        this.state = {
            canEdit: false,
            nameInput: "",
            priceInput: "$0",
            imgUrl: "",
            editBtnText: "Edit",
            editBtnColor: "grey"
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.submitEdits = this.submitEdits.bind(this)
        this.handleEditClick = this.handleEditClick.bind(this)
    }

    componentDidMount() {
        const shelf = this.props.match.params.bin[0]
        const bin = this.props.match.params.bin[1]
        axios.get(`http://localhost:3005/api/bins/${shelf}/${bin}`).then( bin => {
            this.setState({nameInput: bin.data[0].name, priceInput: bin.data[0].price || 0})
        })
    }

    handleNameChange(val) {
        this.setState({nameInput: val})
    }

    handlePriceChange(val) {
        this.setState({priceInput: `${val.slice(1)}`})
    }

    submitEdits() {
        if (this.state.canEdit) {
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

    handleEditClick() {
        if (!this.state.canEdit) {
            this.setState({
                canEdit: !this.state.canEdit,
                editBtnText: "Save",
                editBtnColor: "green"
            })
        } else {
            this.submitEdits()
        }
    }

    // CUSTOM FUNCS

    // RENDER
    render() {
        
        const binPath = this.props.match.params.bin
        const shelf = binPath[0]
        const bin = binPath[1]
        return (
            <div>
                <NavBar logo shelf={shelf} bin={bin} />
                <div className="bin-container">
                    <img className="bin-pic" src={this.props.src} alt="inventory" /> 
                    <div className="bin-info-container" >
                        <p className="bin-header-text">Name</p>
                        <input className="bin-input"
                               type="text"
                               value={this.state.nameInput} 
                               onChange={(e) => this.handleNameChange(e.target.value)}
                               disabled={!this.state.canEdit}
                        />
                        <p className="bin-header-text">Price</p>
                        <input className="bin-input" 
                               type="text"
                               value={"$" + this.state.priceInput} 
                               onChange={(e) => this.handlePriceChange(e.target.value)}
                               disabled={!this.state.canEdit}
                        />
                        <div className="bin-button-container">
                            <ActionButton text={this.state.editBtnText} type={this.state.editBtnColor} action={this.handleEditClick}/>
                            <ActionButton text="Delete" type="grey" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// EXPORT

export default ShelfSelect
