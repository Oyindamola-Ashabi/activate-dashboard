// src/pages/contact/ContactSupport.jsx

import React, { useState } from 'react';
import './Contact.css';

// Assuming you use MUI Icons or similar for visual appeal
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Support Request Submitted:", formData);
        alert('Your support request has been sent! We will respond shortly.');
        // Clear the form
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="contact-support-page">
            <header className="contact-header">
                <h1 className="contact-title">Need Help? Contact Our Support Team</h1>
                <p className="contact-subtitle">
                    Fill out the form below, and we will get back to you as soon as possible, or use the direct contact information provided.
                </p>
            </header>

            <div className="contact-grid">
                
                {/* --- 1. Submission Form (Left Side) --- */}
                <div className="support-form-container">
                    <h2 className="form-title">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="support-form">
                        
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input 
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input 
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="oyin@gmail.com"
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input 
                                id="subject"
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="e.g., Issue with payment"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea 
                                id="message"
                                name="message"
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Describe your issue or question here..."
                                required
                            />
                        </div>

                        <button type="submit" className="submit-btn">
                            Submit
                        </button>
                    </form>
                </div>

                {/* --- 2. Contact Details (Right Side) --- */}
                <div className="support-details-container">
                    <h2 className="details-title">Direct Contact</h2>
                    
                    <div className="contact-info-block">
                        <EmailIcon className="contact-icon" />
                        <div className="info-content">
                            <h3>Email Support</h3>
                            <p>oyindamolaashabi24@gmail.com</p>
                        </div>
                    </div>

                    <div className="contact-info-block">
                        <PhoneIcon className="contact-icon" />
                        <div className="info-content">
                            <h3>Call Us</h3>
                            <p>+2349044575020</p>
                        </div>
                    </div>

                    <div className="contact-info-block hours-block">
                        <AccessTimeIcon className="contact-icon" />
                        <div className="info-content">
                            <h3>Operating Hours</h3>
                            <p>Mon - Fri: 9:00 AM - 5:00 PM (WAT)</p>
                            <p>Sat - Sun: Closed</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;