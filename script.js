// ===================================
// SMOOTH SCROLL & NAVIGATION
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Update active nav link on page load
    updateActiveNavLink();
    
    // Add scroll-based header shadow
    handleHeaderShadow();
    
    // Animate elements on scroll
    observeElements();
    
    // Add loading animation
    document.body.classList.add('loaded');
});

// Update active navigation link based on current page
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Add shadow to header on scroll
function handleHeaderShadow() {
    const nav = document.querySelector('.main-nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            nav.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });
}

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards and other elements
    const elements = document.querySelectorAll('.highlight-card, .course-card, .publication, .project-card, .resource-card');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover effect to timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(8px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Add stagger animation to publication links
const pubLinks = document.querySelectorAll('.pub-links a');
pubLinks.forEach((link, index) => {
    link.style.animationDelay = `${index * 0.1}s`;
});

// Console message (optional - can be customized or removed)
console.log('%cPortfolio Site', 'font-size: 24px; font-weight: bold; color: #c17a3f;');
console.log('%cBuilt with care and attention to detail', 'font-size: 14px; color: #6b6b6b;');

// ===================================
// RESPONSIVE MENU (Optional Enhancement)
// ===================================

// If you want to add a mobile hamburger menu in the future, 
// you can implement it here. For now, the CSS handles the responsive layout.
