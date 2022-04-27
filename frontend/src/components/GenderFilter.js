import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchBanks} from '../actions/fetchBanks'

class GenderFilter extends Component {

    state = {
        bankData: [],
    }

    fetchBankData(bankData) {
        this.setState((state) => {
            return {
                banks: [...state.banks, bankData]
            }
        })
    }

    filteredBanks = () => {
        return this.props.banks.filter(bank => bank.gender === "GIRL").map((bank) => <div className="bank-nav-data">
            <ol>
            {bank.name} is a {bank.gender} 🐖 with ${bank.fund} 💰
            </ol>
        </div>)
        //return this.props.banks.filter(bank => bank.gender.includes(this.state.bankData.gender))
    }

    componentDidMount(){
        this.props.fetchBanks();
    }

    render(){
        return (
            <div>
            {this.filteredBanks()}
            {/* <select value={this.state.bankData.gender} name="gender" onChange={this.filteredBanks}>
                <option value="GIRL">GIRL</option>
                <option value="BOY">BOY</option>
            </select> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      banks: state.banks,
    }
}

export default connect(mapStateToProps, {fetchBanks})(GenderFilter);

//const banks = this.state.bankData == "GIRL" ? this.props.gender : this.filteredBanks()