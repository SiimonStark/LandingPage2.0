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
            <h5>
              Phone: <a href="tel:+18044043999">(804)404-3999</a>
            </h5>
            <h5>
              Email:{" "}
              <a href="mailto: siimonstark@gmail.com" target="blank">
                SiimonStark@gmail.com
              </a>
            </h5>
            <h5>
              Github:{" "}
              <a href="https://github.com/SiimonStark" target="blank">
                github.com/SiimonStark
              </a>
            </h5>
            <h5>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/justinpyktel/"
                target="blank"
              >
                linkedin.com/in/justinpyktel
              </a>
            </h5>
            <h5>
              Twitter:{" "}
              <a href="https://twitter.com/SiimonStark" target="blank">
                twitter.com/SiimonStark
              </a>
            </h5>
          </article>
        </section>
      </section>
    </div>
  );
}

export default Contact;