import React, { useState, useEffect } from 'react';

const Skills = ({ skills }) => {
    const [filter, setFilter] = useState('All');
    const [filteredSkills, setFilteredSkills] = useState(skills);
    const [isAnimating, setIsAnimating] = useState(false);

    // Get unique categories
    const categories = ['All', ...new Set(skills.map(skill => skill.category || 'Other'))];

    // Sort categories
    const categoryOrder = ['All', 'Languages', 'Frameworks', 'Database', 'Tools', 'Architecture'];
    categories.sort((a, b) => {
        const indexA = categoryOrder.indexOf(a);
        const indexB = categoryOrder.indexOf(b);
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
        return a.localeCompare(b);
    });

    useEffect(() => {
        setIsAnimating(true);
        const timeout = setTimeout(() => {
            if (filter === 'All') {
                setFilteredSkills(skills);
            } else {
                setFilteredSkills(skills.filter(skill => (skill.category || 'Other') === filter));
            }
            setIsAnimating(false);
        }, 300);
        return () => clearTimeout(timeout);
    }, [filter, skills]);

    return (
        <section className="section skills-section" id="skills">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <div className="skills-container">
                    <div className="skills-filter">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`filter-btn ${filter === category ? 'active' : ''}`}
                                onClick={() => setFilter(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className={`skills-grid-filtered ${isAnimating ? 'fade-out' : ''}`}>
                        {filteredSkills.map((skill, index) => (
                            <a
                                key={index}
                                href={skill.link || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="skill-card"
                                style={{ animationDelay: `${Math.random() * 0.2}s` }}
                            >
                                <span className="skill-name">{skill.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
