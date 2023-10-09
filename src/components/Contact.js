import React from 'react';
import '../App.css';

function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p>I'd love to hear from you! Whether you have a question or just want to say hi, feel free to reach out.</p>

            <div className="contact-details">
                <p><strong>Email:</strong>20-cp-9@students.uettaxila.edu.pk</p>
                <p><strong>Phone:</strong>+92 329 2912200, +92 321 1942519</p>
            </div>

            <div className="social-links">
            <a href="https://twitter.com/ubaid_is_here" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://instagram.com/in/obaid_chaudhary" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
    </div>
    );
}

export default Contact;
