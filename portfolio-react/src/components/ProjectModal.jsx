import React, { useEffect, useState } from 'react';

const ProjectModal = ({ project, onClose }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Small delay to allow animation
        requestAnimationFrame(() => setShow(true));
    }, []);

    const handleClose = () => {
        setShow(false);
        setTimeout(onClose, 300);
    };

    return (
        <div
            className={`modal ${show ? 'show' : ''}`}
            style={{ display: 'flex' }}
            onClick={handleClose}
        >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-modal" onClick={handleClose}>&times;</span>
                <div className="modal-body">
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>{project.title}</h2>
                    <p className="project-desc" style={{ fontSize: '1.1rem' }}>{project.description}</p>

                    <h4>Team</h4>
                    <p>{project.team || 'Solo Developer'}</p>

                    <h4>Status</h4>
                    <p>{project.status || 'Complete'}</p>

                    <h4>Technologies</h4>
                    {project.technologies && (
                        <div className="modal-tech-list">
                            {project.technologies.map((tech, i) => (
                                <span className="tech-tag" key={i}>{tech}</span>
                            ))}
                        </div>
                    )}

                    <div className="modal-links">
                        {project.repoLink && (
                            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                                <i className="fab fa-github"></i> View Code
                            </a>
                        )}
                        {project.liveLink && (
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn">
                                <i className="fas fa-external-link-alt"></i> Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
