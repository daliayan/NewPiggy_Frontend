import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class NavBar extends Component {

  render() {
    return (
      <div id="nav-bar" className="nav-bar">
        <NavLink to="/banks"
          >🐷 HOME
        </NavLink>

        <NavLink to="/about" >
          | ABOUT APP |
        </NavLink>

        <NavLink to="/biography" >
          CREATOR BIOGRAPHY |
        </NavLink>

        {/* <NavLink to="/order" >
          456 🐷
        </NavLink> */}

      </div>
    )
  }
}