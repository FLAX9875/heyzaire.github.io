// DOM Elements
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');
const discordBtn = document.getElementById('discord-btn');
const readBlogBtn = document.getElementById('read-blog-btn');
const discordModal = document.getElementById('discord-modal');
const closeModal = document.querySelector('.close');
const copyDiscordBtn = document.getElementById('copy-discord');

// Initialize the page
function init() {
    setupEventListeners();
}

// Set up all event listeners
function setupEventListeners() {
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            switchPage(page);
            
            // Update active states
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
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
        navLinks.forEach(nav => {
            nav.classList.remove('active');
            if (nav.getAttribute('data-page') === 'blog') {
                nav.classList.add('active');
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
    pages.forEach(p => p.classList.remove('active'));
    
    // Show selected page
    document.getElementById(`${page}-page`).classList.add('active');
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
