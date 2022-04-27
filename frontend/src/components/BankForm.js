import React, { Component } from 'react';
import { connect } from 'react-redux';
import FundCard from '../components/FundCard';
import {createBank} from '../actions/fetchBanks';

class BankForm extends Component {

    constructor(){
        super();
        this.state = {
            name: '',
            gender: '',
            fund: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleFunds = this.handleFunds.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName(event){
        this.setState({
            name: event.target.value
        })
        //, console.log(this.state))
    }

    handleChange(event){
        this.setState({
            gender: event.target.value,
        })
    }

    handleFunds(addedMoney){
        this.setState( (state) => {
            return {
                fund: addedMoney + state.fund
            }       
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        const submittedData = {...this.state};
        this.props.createBank(submittedData)

        this.setState({
            name: '',
            gender: '',
            fund: ''
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h2 className="piggy-bank-form">MAKE YOUR OWN 🐷💰</h2>
                    <br></br>
                    <div className="piggy-bank-form-text">
                        <label>NAME: </label>
                        <input id="name" type="text" value={this.state.name} onChange={this.handleName} placeholder="Add Name Here"required/>
                    </div>
                    <br></br>
                    <div className="piggy-bank-form-dropdown">
                        <label >GENDER: </label>
                        <select id="gender" value={this.state.gender} onChange={this.handleChange} >
                            <option>GIRL</option>
                            <option>BOY</option>
                        </select>
                    </div>
                    <br></br>
                    <div>
                        <FundCard dollars={this.state.fund} updateBankFund={this.handleFunds} id="fund"/>

                        <button className="form-button" type="submit">
                            Create Piggy Bank
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, {createBank})(BankForm);