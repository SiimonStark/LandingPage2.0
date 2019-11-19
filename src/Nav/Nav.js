import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';

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
    return (
      <nav>
        <NavLink>About</NavLink>
        <NavLink>Projects</NavLink>
        <button name="Contact" onClick={this.togglePopup}>
          Contact
        </button>
        <button name="Resume" onClick={this.togglePopup}>
          Resume
        </button>
        {this.state.displayContact && (
          <Contact togglePopup={this.togglePopup} />
        )}
        {this.state.displayResume && (
          <Resume togglePopup={this.togglePopup} />
        )}
      </nav>
    );
  }
}

export default Nav;