import React, { Component } from 'react';

import piggy from '../images/piggy.jpg';
import one from '../images/money/one.jpg';
import five from '../images/money/five.jpg';
import ten from '../images/money/ten.jpg';
import twenty from '../images/money/twenty.jpg';
import fifty from '../images/money/fifty.jpg';
import hundred from '../images/money/hundred.jpg';

export default class FundCard extends Component {

        AddMoney(event){
                this.props.updateBankFund(parseInt(event.target.value), console.log('clicked'))
        }

       render(){
        return (
        <div className="fund-container">
                <div className="pig-container">
                        <img src={piggy} className='piggy-img' alt='' />
                        <div className="pig-text">
                                { <h1>{this.props.dollars}</h1>}
                        </div>
                </div>
                <br></br>
                <div className="fund-text">
                        CLICK ON DOLLARS BELOW TO ADD $$ TO YOUR PIGGY BANK
                </div>
                
                <div>
                        <p id="one-bill" className="photo"> $1
                                <img src={one} alt=''></img>
                                <button className='btn-mon' onClick={(event) => {this.AddMoney(event)}} value={1} type="button"></button>
                        </p>

                        <p id="five-bill" className="photo"> $5
                                <img src={five} alt=''></img>
                                <button className='btn-mon' onClick={(event) => {this.AddMoney(event)}} value={5} type="button"></button>
                        </p>
                
                        <p id="ten-bill" className="photo"> $10
                                <img src={ten} alt=''></img>
                                <button className='btn-mon' onClick={(event) => {this.AddMoney(event)}} value={10} type="button"></button>
                        </p>

                        <p id="twenty-bill" className="photo"> $20
                                <img src={twenty} alt=''></img>
                                <button className='btn-mon' onClick={(event) => {this.AddMoney(event)}} value={20} type="button"></button>
                        </p>

                        <p id="fifty-bill" className="photo"> $50
                                <img src={fifty} alt='' ></img>
                                <button className='btn-mon' onClick={(event) => {this.AddMoney(event)}} value={50} type="button"></button>
                        </p>

                        <p id="hundred-bill" className="photo"> $100
                                <img src={hundred} alt=''></img> 
                                <button className='btn-mon' onClick={(event) => {this.AddMoney(event)}} value={100} type="button"></button>
                        </p>
                </div> 
        </div>
        )}
}