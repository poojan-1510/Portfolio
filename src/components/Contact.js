// src/components/Contact.js

import React from 'react';

function Contact() {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <p>If you’d like to get in touch, feel free to reach out via email: <a href="mailto:er.poojan@yahoo.com">er.poojan@yahoo.com</a></p>
            <p>You can also connect with me on LinkedIn: <a href="https://www.linkedin.com/in/poojan-shah-a744a61b2/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
        </section>
    );
}

export default Contact;
