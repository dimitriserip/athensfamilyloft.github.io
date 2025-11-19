// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    } else {
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Form submission handler
const inquiryForm = document.querySelector('.inquiry-form');
if (inquiryForm) {
    inquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(this);
        
        // Show success message
        alert('Thank you for your inquiry! We will get back to you soon.\n\nFor immediate booking, please visit our Airbnb listing or contact us directly.');
        
        // Reset form
        this.reset();
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.feature-card, .review-card, .location-card, .gallery-item').forEach(el => {
    observer.observe(el);
});

// Add hover effect to gallery items
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Interactive book now buttons with tracking
const bookButtons = document.querySelectorAll('.book-now-btn, .book-now-large');
bookButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Add a subtle animation effect
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Add dynamic year to footer
const footerBottom = document.querySelector('.footer-bottom p');
if (footerBottom) {
    const currentYear = new Date().getFullYear();
    footerBottom.textContent = `© ${currentYear} Athens Family Loft. All rights reserved.`;
}

// Mobile menu toggle (if needed in future)
const createMobileMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    const navContainer = document.querySelector('.nav-container');
    
    if (window.innerWidth <= 768) {
        // Mobile view adjustments
        navLinks.style.transition = 'all 0.3s ease';
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// Add entrance animations with stagger effect
const animateElements = document.querySelectorAll('.feature-card, .gallery-item, .review-card');
animateElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    }, index * 100);
});

// Console message for developers
console.log('%cAthens Family Loft', 'color: #e74c3c; font-size: 24px; font-weight: bold;');
console.log('%cWebsite designed for the perfect Airbnb experience', 'color: #3498db; font-size: 14px;');
