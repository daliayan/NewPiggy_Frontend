import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchBanks} from '../actions/fetchBanks'

class OrderedBanks extends Component {

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

    orderedPig(){
        return this.props.banks.filter(bankMoney => bankMoney.fund >= 456).map((bank) => <div className="bank-nav-data">
        <ol>
         {bank.name} is a {bank.gender} 🐖 with ${bank.fund} 💰
        </ol>
        </div>)
    }

    componentDidMount(){
        this.props.fetchBanks();
    }

    render(){
        return (
            <div className="orderedList">
                <h2>
                PIGS IN THE 456 CLUB - WATCH SQUID GAMES FOR REFERENCE
                </h2>
                {this.orderedPig()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      banks: state.banks,
    }
}

export default connect(mapStateToProps, {fetchBanks})(OrderedBanks);