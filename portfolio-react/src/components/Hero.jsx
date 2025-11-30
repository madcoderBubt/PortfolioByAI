import React from 'react';

const Hero = ({ profile }) => {
    return (
        <section className="hero-section" id="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <p className="hero-greeting">Hi, my name is</p>
                        <h1 className="hero-name">{profile.name}.</h1>
                        <h2 className="hero-subtitle">I build things for the web.</h2>
                        <p className="hero-desc">{profile.title} based in {profile.location}. {profile.subtitle}.</p>
                        <div className="hero-cta">
                            <a href="#projects" className="btn">Check out my work!</a>
                            <a href={profile.cvLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ marginLeft: '1rem' }}>Get Resume</a>
                        </div>
                    </div>
                    <div className="hero-image-container">
                        <div className="hero-img-wrapper">
                            <img src={profile.image} alt={profile.name} className="hero-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
