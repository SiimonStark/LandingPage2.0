import React from "react";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedback: "", name: "", email: "" };


  }

  render() {
    const {name, email, feedback} = this.state;

    return (
      <form className="test-mailing" onSubmit={this.handleSubmit}>
        <h1>Let's see if it works</h1>
        <div>
          <input
            name="name"
            type="text"
            className={!name ? "incomplete" : "complete"}
            onChange={this.handleChange}
            placeholder="Please provide your name or org..."
            value={name}
          />
          <input
            name="email"
            type="email"
            className={!email ? "incomplete" : "complete"}
            onChange={this.handleChange}
            placeholder="Contact email"
            value={email}
          />
          <textarea
            id="test-mailing"
            name="feedback"
            className={!feedback ? "incomplete" : "complete"}
            onChange={this.handleChange}
            placeholder="This will be the body of the email..."
            required
            value={feedback}
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn btn--submit"
          disabled={!feedback || !email}
        />
      </form>
    );
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  }

  handleIncomplete = (event) => {
    return this.state[event.target.name] ? "complete" : "incomplete"
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const templateId = "template_38FtOS7A";

    this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
    this.setState({name: '', email: '', feedback: ''})
  }

  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'gmail', templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
}
