import React, {Component} from 'react';
import Mailer from '../Mailer';

class Contact extends Component {
  constructor() {
    super()

    this.state = {
      body: ''
    }
  }

  handleMailer = () => {

  }

  render() {
    return (
      <div className="overlay">
        <section className = "Contact">
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
          <div className="contact-divider"/>
          <Mailer />
        </section>
      </div>
    )
  }
}

export default Contact;