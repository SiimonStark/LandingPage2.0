import React, { Component } from 'react';
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
      this.setState({ [`display${modal}`]: bool });
  }

  render() {

    return (
      <nav>
        <iframe src="https://open.spotify.com/embed/playlist/641i9u2FmO1zUj36qG0Q20?utm_source=generator" width="60%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        <button className="retro-button">
          <a href='#About'>About</a>
        </button>
        <button className="retro-button">
          <a href='#Projects'>Projects</a>
        </button>
        <button
          className="retro-button x-overlay"
          name="Contact"
          onClick={e => this.togglePopup(e, true, "Contact")}
        >
          Contact
        </button>
        <button
          className="retro-button x-overlay"
          name="Resume"
          onClick={e => this.togglePopup(e, true, "Resume")}
        >
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