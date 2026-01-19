// Page Navigation System - NO SCROLL
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page-section');
const breadcrumbLinks = document.querySelectorAll('.breadcrumb-link');

// Function to show specific page
function showPage(pageId) {
    // Hide all pages
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Remove active from all nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // Scroll to top when changing page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Add active to clicked nav link
    const activeLink = document.querySelector(`[data-page="${pageId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Navigation click events
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        showPage(pageId);
        
        // Close mobile menu if open
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    });
});

// Breadcrumb "Home" click events
breadcrumbLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        showPage(pageId);
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Team Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const teamCards = document.querySelectorAll('.team-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        teamCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                if (card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            }
        });
    });
});

// Set initial transition for team cards
teamCards.forEach(card => {
    card.style.transition = 'all 0.3s ease';
});

// Module Options Button
document.querySelectorAll('.btn-options').forEach(button => {
    button.addEventListener('click', (e) => {
        const card = e.target.closest('.module-card');
        const moduleName = card.querySelector('h4').textContent;
        alert(`📚 Module Information:\n\n${moduleName}\n\nMore details about this module will be available soon. Stay tuned!`);
    });
});

// View All Modules Button
const viewAllBtn = document.querySelector('.btn-view-all');
if (viewAllBtn) {
    viewAllBtn.addEventListener('click', () => {
        alert('📋 All modules will be displayed in a detailed view. This feature is coming soon!');
    });
}

// Activity Read More Button
document.querySelectorAll('.btn-read-more').forEach(button => {
    button.addEventListener('click', (e) => {
        const card = e.target.closest('.activity-card');
        const activityName = card.querySelector('h3').textContent;
        alert(`📖 ${activityName}\n\nFull details and registration information will be available soon. Check back later!`);
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const phone = contactForm.querySelector('input[type="tel"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Show success message
        alert(`✅ Message Sent Successfully!\n\nThank you ${name}!\nWe have received your message and will get back to you soon.\n\nBest regards,\nOPTICOM LABORATORY Team`);
        
        // Reset form
        contactForm.reset();
    });
}

// Team Card Click Event
teamCards.forEach(card => {
    card.addEventListener('click', () => {
        const name = card.querySelector('h4').textContent;
        const role = card.querySelector('.team-role').textContent;
        const category = card.getAttribute('data-category');
        
        alert(`👤 Team Member Profile\n\nName: ${name}\nRole: ${role}\nCategory: ${category.charAt(0).toUpperCase() + category.slice(1)}\n\nMore information about this team member will be available soon!`);
    });
});

// Handle recruitment status
const recruitmentBox = document.querySelector('.recruitment-box');
if (recruitmentBox) {
    recruitmentBox.addEventListener('click', () => {
        alert('⚠️ Open Recruitment\n\nStatus: EXPIRED\n\nThe recruitment period has ended. Please stay tuned for the next recruitment announcement!');
    });
}

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('header');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 255, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 255, 0.1)';
    }
});

// Prevent hash links from changing URL
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// Console Welcome Message
console.log('%c🔬 OPTICOM LABORATORY', 'color: #0000FF; font-size: 24px; font-weight: bold;');
console.log('%cExcellent Laboratory - Fiber Optics Transmission', 'color: #4169E1; font-size: 14px;');
console.log('%cWebsite loaded successfully! - Page Navigation System Active', 'color: #00AA00; font-size: 12px;');

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ OPTICOM LABORATORY website initialized!');
    console.log('📄 Page navigation system: ACTIVE');
    console.log('🚫 Scroll between sections: DISABLED');
    
    // Show About Us page by default
    showPage('about');
});