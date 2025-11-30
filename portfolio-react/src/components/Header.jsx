import React, { useState, useEffect } from 'react';

const Header = ({ theme, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="logo">&lt;MadCoder /&gt;</a>
                <nav className="nav">
                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <li><a href="#hero" onClick={closeMenu}>Home</a></li>
                        <li><a href="#about" onClick={closeMenu}>About</a></li>
                        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                        <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
                        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                    </ul>

                    <button
                        id="theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle Theme"
                    >
                        <i className={`fas ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`}></i>
                    </button>

                    <div
                        className={`hamburger ${isMenuOpen ? 'toggle' : ''}`}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
