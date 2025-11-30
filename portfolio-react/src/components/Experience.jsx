import React from 'react';

const Experience = ({ experience }) => {
    return (
        <section className="section experience-section" id="experience">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="timeline" id="timeline">
                    {experience.map((job, index) => {
                        let skillsArray = [];
                        if (job.skills) {
                            if (job.skills.includes('·')) {
                                skillsArray = job.skills.split('·').map(s => s.trim()).filter(s => s);
                            } else {
                                skillsArray = job.skills.split(',').map(s => s.trim()).filter(s => s);
                            }
                        }

                        return (
                            <div className="timeline-item" key={index}>
                                <div className="timeline-date">{job.date}</div>
                                <h3 className="timeline-role">{job.role}</h3>
                                <h4 className="timeline-company">{job.company}</h4>
                                {job.location && (
                                    <div className="timeline-location">
                                        <i className="fas fa-map-marker-alt"></i> {job.location}
                                    </div>
                                )}
                                <p className="timeline-description">{job.description}</p>
                                {skillsArray.length > 0 && (
                                    <div className="timeline-skills">
                                        {skillsArray.map((skill, i) => (
                                            <span className="timeline-skill-tag" key={i}>{skill}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
