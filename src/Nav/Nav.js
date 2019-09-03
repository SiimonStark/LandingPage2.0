import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      displayContact: false,
      displayResume: false
    }
  }

  togglePopup = (e) => {
    let { name } = e.target;
    let bool = this.state[`display${name}`];

    this.setState({[`display${name}`]: !bool})
  }

  render() {
    console.log('Toggle that bitch!', this.state)
    return (
      <nav>
        <NavLink>About</NavLink>
        <NavLink>Projects</NavLink>
        <button 
          name="Contact"
          onClick={this.togglePopup}
        >
          Contact
        </button>
        <button 
          name="Resume"
          onClick={this.togglePopup}
        >
          Resume
        </button>
      </nav>
    )
  }
}

export default Nav;