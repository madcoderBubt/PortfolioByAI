import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const Projects = ({ projects }) => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section className="section projects-section" id="projects">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid" id="projects-grid">
                    {projects.map((project, index) => {
                        const hasLink = project.liveLink || project.repoLink;
                        const techTags = project.technologies ? project.technologies.slice(0, 3) : [];
                        const categoryClass = project.category.toLowerCase().replace(/\s+/g, '-');

                        return (
                            <div
                                className="project-card"
                                key={index}
                                style={{ cursor: 'pointer' }}
                                onClick={() => openModal(project)}
                            >
                                <div className="project-header">
                                    <i className="far fa-folder folder-icon"></i>
                                    <div className="project-links">
                                        {hasLink && (
                                            <a
                                                href={project.liveLink || project.repoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <i className="fas fa-external-link-alt"></i>
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-footer">
                                    {techTags.length > 0 && (
                                        <div className="project-tech">
                                            {techTags.map((tech, i) => (
                                                <span className="project-tech-tag" key={i}>{tech}</span>
                                            ))}
                                        </div>
                                    )}
                                    <div className="project-badges">
                                        <span className={`project-category ${categoryClass}`}>{project.category}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={closeModal} />
            )}
        </section>
    );
};

export default Projects;
