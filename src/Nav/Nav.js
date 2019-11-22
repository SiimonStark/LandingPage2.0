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

  togglePopup = (e, bool, modal) => {
    let { classList } = e.target;

    if (classList.contains('x-overlay'))
      this.setState({[`display${modal}`]: bool});
  }

  render() {
    return (
      <nav>
        <NavLink>About</NavLink>
        <NavLink>Projects</NavLink>
        <button
          name="Contact"
          className="x-overlay"
          onClick={(e) => this.togglePopup(e, true, "Contact")}
        >
          Contact
        </button>
        <button className="x-overlay" name="Resume" onClick={(e) => this.togglePopup(e, true, "Resume")}>
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