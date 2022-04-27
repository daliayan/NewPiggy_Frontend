import {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import  Header from './components/Header';
import BankList from './components/BankList';
import BankForm from './components/BankForm';
import  NavBar from './components/NavBar';
import About from './components/About';
import Biography from './components/Biography';
// import OrderedBanks from './components/OrderedBanks';
// import Counter from './components/Counter';


class App extends Component {

  render(){
    return (
      <div className="App">
        <Header />
        <Router>
          <NavBar />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/biography">
            <Biography />
          </Route>
          <Route path="/banks" />
          
          <Switch>
            <>
              <BankList />
              <BankForm />
            </>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default (App);