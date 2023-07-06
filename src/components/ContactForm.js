import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../index.css';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0 && name && email && message) {
      // Perform form submission logic here

      // Reset form fields and state
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className='mt-3 '>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => {
              if (!name.trim()) {
                setErrors((errors) => ({ ...errors, name: 'Name is required' }));
              } else {
                setErrors((errors) => {
                  const { name, ...rest } = errors;
                  return rest;
                });
              }
            }}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail" className='mt-3'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (!isValidEmail(e.target.value)) {
                setErrors((errors) => ({ ...errors, email: 'Invalid email address' }));
              } else {
                setErrors((errors) => {
                  const { email, ...rest } = errors;
                  return rest;
                });
              }
            }}
            onBlur={() => {
              if (!email.trim()) {
                setErrors((errors) => ({ ...errors, email: 'Email address is required' }));
              }
            }}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formMessage" className='mt-3'>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => {
              if (!message.trim()) {
                setErrors((errors) => ({ ...errors, message: 'Message is required' }));
              } else {
                setErrors((errors) => {
                  const { message, ...rest } = errors;
                  return rest;
                });
              }
            }}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
        </Form.Group>

        <Button  type="submit " style={{color: 'white', backgroundColor: "red"}} className='mt-2 w-100' >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
