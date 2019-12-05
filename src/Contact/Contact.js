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
          <p>Justin's Contact Form.exe</p>
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
            <h5>Phone:</h5>
            <p>(540)287-9664</p>
            <h5>Email:</h5>
            <p>SiimonStark@gmail.com</p>
            <h5>Github:</h5>
            <p>Example</p>
            <h5>LinkedIn:</h5>
            <p>Example</p>
            <h5>Twitter:</h5>
            <p>Example</p>
          </article>
        </section>
      </section>
    </div>
  );
}

export default Contact;