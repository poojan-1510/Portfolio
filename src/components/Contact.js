// src/components/Contact.js

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then(() => setStatus('Message sent successfully!'))
            .catch(() => setStatus('Failed to send message. Please try again later.'));
    };

    return (
        <section id="contact">
            <h2>Contact</h2>
            <p><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:er.poojan@yahoo.com">er.poojan@yahoo.com</a></p>
            <p><FontAwesomeIcon icon={faLink} /> LinkedIn: <a href="https://www.linkedin.com/in/poojan-shah-a744a61b2/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
            {status && <p>{status}</p>}
        </section>
    );
}

export default Contact;
