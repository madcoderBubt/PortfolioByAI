console.log('Script loaded!');
document.addEventListener('DOMContentLoaded', () => {
    // Theme Switcher
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const icon = themeToggle.querySelector('i');

    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        if (theme === 'dark') {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }

    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });

    // Fetch and Render Data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            renderHero(data.profile);
            renderAbout(data.about);
            renderSkills(data.skills);
            renderExperience(data.experience);
            renderProjects(data.projects);
            renderContact(data.profile);
            renderFooter(data.profile);
        })
        .catch(error => console.error('Error loading data:', error));

    // Render Functions
    function renderHero(profile) {
        const heroContent = document.getElementById('hero-content');
        const html = `
            <div class="hero-text">
                <p class="hero-greeting">Hi, my name is</p>
                <h1 class="hero-name">${profile.name}.</h1>
                <h2 class="hero-subtitle">I build things for the web.</h2>
                <p class="hero-desc">${profile.title} based in ${profile.location}. ${profile.subtitle}.</p>
                <div class="hero-cta">
                    <a href="#projects" class="btn">Check out my work!</a>
                    <a href="${profile.cvLink}" target="_blank" class="btn btn-outline" style="margin-left: 1rem;">Get Resume</a>
                </div>
            </div>
            <div class="hero-image-container">
                <div class="hero-img-wrapper">
                    <img src="${profile.image}" alt="${profile.name}" class="hero-img">
                </div>
            </div>
        `;
        heroContent.innerHTML = html;
    }

    function renderAbout(about) {
        const aboutContent = document.getElementById('about-content');
        aboutContent.innerHTML = `
            <div class="about-text">
                <p>${about.bio}</p>
            </div>
        `;
    }

    function renderSkills(skills) {
        const skillsContainer = document.getElementById('skills-grid');
        skillsContainer.className = 'skills-container';

        // Get unique categories
        const categories = ['All', ...new Set(skills.map(skill => skill.category || 'Other'))];

        // Define category order preference
        const categoryOrder = ['All', 'Languages', 'Frameworks', 'Database', 'Tools', 'Architecture'];

        // Sort categories based on preference
        categories.sort((a, b) => {
            const indexA = categoryOrder.indexOf(a);
            const indexB = categoryOrder.indexOf(b);
            if (indexA !== -1 && indexB !== -1) return indexA - indexB;
            if (indexA !== -1) return -1;
            if (indexB !== -1) return 1;
            return a.localeCompare(b);
        });

        // Create Filter Buttons
        const filterContainer = document.createElement('div');
        filterContainer.className = 'skills-filter';

        categories.forEach(category => {
            const btn = document.createElement('button');
            btn.className = `filter-btn ${category === 'All' ? 'active' : ''}`;
            btn.textContent = category;
            btn.dataset.filter = category;
            btn.addEventListener('click', () => filterSkills(category, btn));
            filterContainer.appendChild(btn);
        });

        // Create Skills Grid
        const skillsGrid = document.createElement('div');
        skillsGrid.className = 'skills-grid-filtered';
        skillsGrid.id = 'skills-display-grid';

        skillsContainer.innerHTML = '';
        skillsContainer.appendChild(filterContainer);
        skillsContainer.appendChild(skillsGrid);

        // Initial Render
        renderSkillsGrid(skills);

        function filterSkills(category, activeBtn) {
            // Update active button
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            activeBtn.classList.add('active');

            // Filter logic
            const filteredSkills = category === 'All'
                ? skills
                : skills.filter(skill => (skill.category || 'Other') === category);

            // Animate out
            skillsGrid.classList.add('fade-out');

            setTimeout(() => {
                renderSkillsGrid(filteredSkills);
                skillsGrid.classList.remove('fade-out');
            }, 300);
        }

        function renderSkillsGrid(items) {
            skillsGrid.innerHTML = items.map(skill => `
                <a href="${skill.link || '#'}" target="_blank" class="skill-card" style="animation-delay: ${Math.random() * 0.2}s">
                    <span class="skill-name">${skill.name}</span>
                </a>
            `).join('');
        }
    }

    function renderExperience(experience) {
        const timeline = document.getElementById('timeline');
        experience.forEach(job => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.innerHTML = `
                <div class="timeline-date">${job.date}</div>
                <h3 class="timeline-role">${job.role}</h3>
                <h4 class="timeline-company">${job.company}</h4>
                <p>${job.description}</p>
            `;
            timeline.appendChild(item);
        });
    }

    function renderProjects(projects) {
        const projectsGrid = document.getElementById('projects-grid');
        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.style.cursor = 'pointer';
            card.innerHTML = `
                <div class="project-header">
                    <i class="far fa-folder folder-icon"></i>
                    <div class="project-links">
                        <a href="${project.link}" target="_blank" onclick="event.stopPropagation()"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="project-tech">
                    <span>${project.category}</span>
                </div>
            `;

            card.addEventListener('click', () => openModal(project));
            projectsGrid.appendChild(card);
        });
    }

    // Modal Logic
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = document.querySelector('.close-modal');

    function openModal(project) {
        let techHtml = '';
        if (project.technologies) {
            techHtml = `<div class="modal-tech-list">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>`;
        }

        let linksHtml = '';
        if (project.repoLink) {
            linksHtml += `<a href="${project.repoLink}" target="_blank" class="btn btn-outline"><i class="fab fa-github"></i> View Code</a>`;
        }
        if (project.liveLink) {
            linksHtml += `<a href="${project.liveLink}" target="_blank" class="btn"><i class="fas fa-external-link-alt"></i> Live Demo</a>`;
        }

        modalBody.innerHTML = `
            <h2 class="section-title" style="margin-bottom: 1rem;">${project.title}</h2>
            <p class="project-desc" style="font-size: 1.1rem;">${project.description}</p>
            
            <h4>Team</h4>
            <p>${project.team || 'Solo Developer'}</p>
            
            <h4>Technologies</h4>
            ${techHtml}
            
            <div class="modal-links">
                ${linksHtml}
            </div>
        `;

        modal.style.display = 'flex';
        void modal.offsetWidth;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    closeModalBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    function renderContact(profile) {
        const contactContent = document.getElementById('contact-content');
        contactContent.innerHTML = `
            <p class="contact-text">
                I am currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href="mailto:${profile.email}" class="btn">Say Hello</a>
            <div class="social-links">
                <a href="${profile.social.github}" target="_blank"><i class="fab fa-github"></i></a>
                <a href="${profile.social.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="${profile.social.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="${profile.social.facebook}" target="_blank"><i class="fab fa-facebook"></i></a>
            </div>
        `;
    }

    function renderFooter(profile) {
        document.getElementById('year').textContent = new Date().getFullYear();
    }
});
