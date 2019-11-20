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

  togglePopup = (bool, modal) => {
    // let { name } = e.target;
    // let bool = this.state[`display${name}`];

    this.setState({[`display${modal}`]: bool})
  }

  render() {
    return (
      <nav>
        <NavLink>About</NavLink>
        <NavLink>Projects</NavLink>
        <button
          name="Contact"
          onClick={() => this.togglePopup(true, "Contact")}
        >
          Contact
        </button>
        <button name="Resume" onClick={() => this.togglePopup(true, "Resume")}>
          Resume
        </button>
        {this.state.displayContact && (
          <Contact togglePopup={this.togglePopup} />
        )}
        {this.state.displayResume && <Resume togglePopup={this.togglePopup} />}
      </nav>
    );
  }
}

export default Nav;