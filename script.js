// DOM Elements
const homePage = document.getElementById('home-page');
const blogPage = document.getElementById('blog-page');
const archivesPage = document.getElementById('archives-page');
const navButtons = document.querySelectorAll('.nav-btn');
const discordBtn = document.getElementById('discord-btn');
const readBlogBtn = document.getElementById('read-blog-btn');
const discordModal = document.getElementById('discord-modal');
const closeModal = document.querySelector('.close');
const copyDiscordBtn = document.getElementById('copy-discord');

// Sample data - replace with your actual data
const sampleData = {
    lastCommit: "Updated portfolio",
    latestPost: "Getting Started with Cybersecurity",
    scrobbled: "125 plays"
};

// Initialize the page
function init() {
    // Set sample data
    document.getElementById('last-commit').textContent = sampleData.lastCommit;
    document.getElementById('latest-post').textContent = sampleData.latestPost;
    document.querySelector('.stat-card .stat-value').textContent = sampleData.scrobbled;
    
    // Set up event listeners
    setupEventListeners();
}

// Set up all event listeners
function setupEventListeners() {
    // Navigation
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const page = button.getAttribute('data-page');
            switchPage(page);
            
            // Update active states
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
    
    // Discord button
    discordBtn.addEventListener('click', (e) => {
        e.preventDefault();
        discordModal.style.display = 'block';
    });
    
    // Read blog button
    readBlogBtn.addEventListener('click', (e) => {
        e.preventDefault();
        switchPage('blog');
        navButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-page') === 'blog') {
                btn.classList.add('active');
            }
        });
    });
    
    // Modal close
    closeModal.addEventListener('click', () => {
        discordModal.style.display = 'none';
    });
    
    // Copy Discord username
    copyDiscordBtn.addEventListener('click', () => {
        navigator.clipboard.writeText('zaire#0000').then(() => {
            const originalText = copyDiscordBtn.textContent;
            copyDiscordBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyDiscordBtn.textContent = originalText;
            }, 2000);
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === discordModal) {
            discordModal.style.display = 'none';
        }
    });
}

// Switch between pages
function switchPage(page) {
    // Hide all pages
    homePage.classList.remove('active');
    blogPage.classList.remove('active');
    archivesPage.classList.remove('active');
    
    // Show selected page
    switch(page) {
        case 'home':
            homePage.classList.add('active');
            break;
        case 'blog':
            blogPage.classList.add('active');
            loadBlogPosts();
            break;
        case 'archives':
            archivesPage.classList.add('active');
            loadArchives();
            break;
    }
}

// Load blog posts (sample data)
function loadBlogPosts() {
    const postsContainer = document.getElementById('blog-posts-container');
    const samplePosts = [
        {
            title: "Getting Started with Cybersecurity",
            date: "2024-01-15",
            excerpt: "My journey into cybersecurity and essential resources for beginners."
        },
        {
            title: "Setting Up My First Homelab",
            date: "2024-01-10",
            excerpt: "How I built my homelab to practice networking and security concepts."
        },
        {
            title: "Python for Security Automation",
            date: "2024-01-05",
            excerpt: "Using Python scripts to automate basic security tasks and analysis."
        }
    ];
    
    postsContainer.innerHTML = samplePosts.map(post => `
        <div class="blog-post">
            <h3>${post.title}</h3>
            <small>${new Date(post.date).toLocaleDateString()}</small>
            <p>${post.excerpt}</p>
        </div>
    `).join('');
}

// Load archives (sample data)
function loadArchives() {
    const archivesContainer = document.getElementById('archives-container');
    const sampleArchives = [
        { month: "January 2024", count: 3 },
        { month: "December 2023", count: 5 },
        { month: "November 2023", count: 2 }
    ];
    
    archivesContainer.innerHTML = sampleArchives.map(archive => `
        <div class="archive-item">
            <span>${archive.month}</span>
            <span>(${archive.count} posts)</span>
        </div>
    `).join('');
}

// Add some CSS for blog and archive items
const additionalStyles = `
    .blog-post {
        background: #1a1a1a;
        border: 1px solid #333;
        border-radius: 8px;
        padding: 1.5rem;
        margin-bottom: 1rem;
        transition: all 0.3s ease;
    }
    
    .blog-post:hover {
        border-color: #667eea;
        transform: translateX(5px);
    }
    
    .blog-post h3 {
        color: #ffffff;
        margin-bottom: 0.5rem;
    }
    
    .blog-post small {
        color: #b0b0b0;
    }
    
    .blog-post p {
        color: #e0e0e0;
        margin-top: 0.5rem;
    }
    
    .archive-item {
        display: flex;
        justify-content: space-between;
        background: #1a1a1a;
        border: 1px solid #333;
        border-radius: 8px;
        padding: 1rem 1.5rem;
        margin-bottom: 0.5rem;
        transition: all 0.3s ease;
    }
    
    .archive-item:hover {
        border-color: #667eea;
        transform: translateX(5px);
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
