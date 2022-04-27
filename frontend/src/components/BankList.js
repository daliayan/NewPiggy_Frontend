import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchBanks} from '../actions/fetchBanks';
import LikeButton from '../components/LikeButton'
// import AdderButton from '../components/AdderButton'
// import Counter from '../components/Counter';
// import PlusMinus from '../components/PlusMinus';
// import GenderFilter from '../components/GenderFilter';
// import AddToString from './AddToString';

class BankList extends Component {

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

    deleteBank(bank){
        const byePiggy = this.state.bankData.filter(index => index !== bank);
        const config = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        fetch(`http://localhost:3000/banks/${bank.id}`, config)
        .then(resp => resp.json())
        .then(bankData => this.setState({bankData: byePiggy}))
        window.location.replace('http://localhost:3001')

    };

    mapBanks(){
        return this.props.banks.map((bank) => <div className="bank-list-data">
        <ol>
         {bank.name} is a {bank.gender} 🐖 with ${bank.fund} 💰
            <button onClick={() => {this.deleteBank(bank)}}  key={bank.key} className="delete-button" >
                DELETE
            </button>
            <LikeButton />
        </ol>
        </div>)
    }

    componentDidMount(){
        this.props.fetchBanks();
    }

    render(){

        return (
            <div id="bank-container" className="bank-container">
                {/* <AddToString header="Hello World"/> */}
                {/* <PlusMinus /> */}
                <h2> ALL PIGGY BANKS</h2>
                {this.mapBanks()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      banks: state.banks,
    }
}

const mapDispatchToProps = (globalDispatch) => {
    return {
      fetchBanks: () => globalDispatch(fetchBanks()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BankList);