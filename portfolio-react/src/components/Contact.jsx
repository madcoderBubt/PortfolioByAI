import React from 'react';

const Contact = ({ profile }) => {
    return (
        <section className="section contact-section" id="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <p className="contact-text">
                        I am currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <a href={`mailto:${profile.email}`} className="btn">Say Hello</a>
                    <div className="social-links">
                        <a href={profile.social.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href={profile.social.twitter} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href={profile.social.facebook} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
