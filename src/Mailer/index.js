import React, {Component} from "react";

class Mailer extends Component {
  constructor(props) {
    super(props);
    this.state = { feedback: "", name: "", email: "" };
  }

  render() {
    const {name, email, feedback} = this.state;

    return (
      <form 
        className="Mailer" 
        onSubmit={this.handleSubmit}
      >
      <p>
        To reach out, please complete this form.
      </p>
        <div className="fields">
          <input
            name="name"
            type="text"
            
            onChange={this.handleChange}
            placeholder="Name or Company"
            value={name}
          />
          <input
            name="email"
            type="email"
            
            onChange={this.handleChange}
            placeholder="Contact email"
            value={email}
          />
          <textarea
            id="test-mailing"
            name="feedback"
            
            onChange={this.handleChange}
            placeholder="This will be the body of the email..."
            required
            value={feedback}
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn btn--submit retro-button"
          disabled={!feedback || !email}
        />
      </form>
    );
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({ [name]: value });
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

export default Mailer;