import React from 'react';
import { Form, Button } from 'react-bootstrap'
import Hero from '../components/Hero'
import Content from '../components/Content'

class ContactPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ' ',
      email: ' ',
      message: ' ',
      disabled: false,
      emailSent: null,
    }
  }
  handleChange = (event) => {

    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    

    this.setState({
      [name] : value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);

    this.setState({
        disabled: true
    });
  }

  render() {
    return (
      <div>
        <Hero title={this.props.title} />

        <Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="full-name">Full Name</Form.Label>
              <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">Email address</Form.Label>
              <Form.Control id="email-address" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control id="message" name="message" type="textarea" rows="5"  value={this.state.name} onChange={this.handleChange} placeholder="Send A Message" />
            </Form.Group>

            <Button className="d-inline-block" type="submit" disabled={this.state.disabled}>
              Send
            </Button>
  <hr/>
  <hr/>
  <hr/>
  <hr/>
          </Form>
        </Content>
      </div>
    )
  }
}

export default ContactPage;
