import React from 'react';
import MyEmail from './Email.js';
import { renderEmail } from 'react-html-email'
import axios from 'axios' ;
// const messageHtml =  renderEmail(<MyEmail name={this.state.name} />); // HTML code

export default class extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: 'Name', email: 'email@example.com' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
  	<form className="test-mailing">
    	<h1>Let's see if it works</h1>
    	<div>
      	<textarea
        	id="test-mailing"
        	name="test-mailing"
        	onChange={this.handleChange}
        	placeholder="Post some lorem ipsum here"
        	required
        	value={this.state.feedback}
        	style={{width: '100%', height: '150px'}}
      	/>
    	</div>
    	<input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
  	</form>
	)
  }

  handleChange(event) {
    this.setState({feedback: event.target.value})
  }

  handleSubmit (event) {
	const templateId = 'template_id';

	this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
	const messageHtml =  renderEmail(
		<MyEmail name={this.state.name}> {this.state.feedback}</MyEmail>
	  );
	  
			  axios({
				  method: "POST", 
				  url:"http://localhost:3000/send", 
				  data: {
				name: this.state.name,
				email: this.state.email,
				messageHtml: messageHtml
				  }
			  }).then((response)=>{
				  if (response.data.msg === 'success'){
					  alert("Email sent, awesome!"); 
					  this.resetForm()
				  }else if(response.data.msg === 'fail'){
					  alert("Oops, something went wrong. Try again")
				  }
			  })
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
  resetForm(){

	this.setState({feedback: ''});
}
  
}