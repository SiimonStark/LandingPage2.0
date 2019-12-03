import React from 'react';
import Mailer from '../Mailer';

const Contact = ({togglePopup}) => {

  return (
    <div
      className="overlay x-overlay"
      name="Contact"
      onClick={e => togglePopup(e, false, "Contact")}
    >
      <section className="Contact">
        <header className="retro-header">
          <img
            className="retro-logo"
            src={require("../resource/sunset.png")}
            alt="Justin's Sunset Logo"
          />
          <p>Justin's Resume.exe</p>
          <button
            className="retro-button close x-overlay"
            onClick={e => togglePopup(e, false, "Contact")}
          >
            _
          </button>
        </header>
        <section className="Contact-content">
          <Mailer />
          <article className="info">
            <h3>Phone:</h3>
            <p>(540)287-9664</p>
            <h3>Email:</h3>
            <p>SiimonStark@gmail.com</p>
            <h3>Github:</h3>
            <p>Example</p>
            <h3>LinkedIn:</h3>
            <p>Example</p>
            <h3>Twitter:</h3>
            <p>Example</p>
          </article>
        </section>
      </section>
    </div>
  );
}

export default Contact;