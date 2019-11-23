import React from 'react';
import Mailer from '../Mailer';

const Contact = ({togglePopup}) => {

  return (
    <div
      className="overlay x-overlay"
      name="Contact"
      onClick={(e) => togglePopup(e, false, "Contact")}
    >
      <section className="Contact">
        <button  className="close x-overlay" name="Contact" onClick={(e) => togglePopup(e, false, "Contact")}>
          Close
        </button>
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
        <div className="contact-divider" />
        <Mailer />
      </section>
    </div>
  );
}

export default Contact;