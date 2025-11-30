import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>Designed & Built by Sudhananda Biswas</p>
                <p>&copy; <span id="year">{new Date().getFullYear()}</span> Mad Coder</p>
            </div>
        </footer>
    );
};

export default Footer;
