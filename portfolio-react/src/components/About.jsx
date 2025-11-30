import React from 'react';

const About = ({ about }) => {
    return (
        <section className="section about-section" id="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>{about.bio}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
