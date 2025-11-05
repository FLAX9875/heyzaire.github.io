// Sample blog posts data - you can replace this with dynamic content
const blogPosts = [
    {
        title: "Getting Started with Web Development",
        description: "My journey into the world of coding and how I built my first website.",
        date: "2024-01-15",
        link: "#"
    },
    {
        title: "Why I Love Open Source",
        description: "The beauty of contributing to open source projects and learning from the community.",
        date: "2024-01-10",
        link: "#"
    },
    {
        title: "Building My Portfolio",
        description: "The process of creating this very website and what I learned along the way.",
        date: "2024-01-05",
        link: "#"
    }
];

// Sample projects data
const projects = [
    {
        title: "Portfolio Website",
        description: "This responsive portfolio website built with HTML, CSS, and JavaScript.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "#",
        github: "https://github.com/yourusername/zaire-portfolio"
    },
    {
        title: "Task Management App",
        description: "A full-stack task management application with user authentication.",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "#",
        github: "https://github.com/yourusername/task-app"
    },
    {
        title: "Weather Dashboard",
        description: "Real-time weather information dashboard with location-based services.",
        technologies: ["JavaScript", "API", "CSS"],
        link: "#",
        github: "https://github.com/yourusername/weather-dashboard"
    }
];

// DOM elements
const blogLink = document.getElementById('blog-link');
const projectsLink = document.getElementById('projects-link');
const blogPostsSection = document.getElementById('blog-posts');
const projectsSection = document.getElementById('projects');
const postsContainer = document.getElementById('posts-container');
const projectsContainer = document.getElementById('projects-container');

// Load blog posts
function loadBlogPosts() {
    postsContainer.innerHTML = '';
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post-item';
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.description}</p>
            <small>${new Date(post.date).toLocaleDateString()}</small>
        `;
        postElement.addEventListener('click', () => {
            // You can add functionality to show full post
            alert(`Opening: ${post.title}`);
        });
        postsContainer.appendChild(postElement);
    });
}

// Load projects
function loadProjects() {
    projectsContainer.innerHTML = '';
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-item';
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-tags">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        `;
        projectElement.addEventListener('click', () => {
            window.open(project.github, '_blank');
        });
        projectsContainer.appendChild(projectElement);
    });
}

// Event listeners
blogLink.addEventListener('click', (e) => {
    e.preventDefault();
    blogPostsSection.style.display = 'block';
    projectsSection.style.display = 'none';
    loadBlogPosts();
});

projectsLink.addEventListener('click', (e) => {
    e.preventDefault();
    projectsSection.style.display = 'block';
    blogPostsSection.style.display = 'none';
    loadProjects();
});

// Add some CSS for tech tags
const style = document.createElement('style');
style.textContent = `
    .tech-tags {
        margin-top: 0.5rem;
    }
    
    .tech-tag {
        display: inline-block;
        background: #667eea;
        color: white;
        padding: 0.2rem 0.5rem;
        border-radius: 12px;
        font-size: 0.8rem;
        margin-right: 0.3rem;
    }
`;
document.head.appendChild(style);

// Initialize
console.log('Zaire Portfolio loaded successfully!');
