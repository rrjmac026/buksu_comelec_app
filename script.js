// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Toggle mobile menu with animation
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('hidden');
        menuBtn.classList.toggle('text-[#f9b40f]');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.add('hidden');
            menuBtn.classList.remove('text-[#f9b40f]');
        }
    });

    // Close menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuBtn.classList.remove('text-[#f9b40f]');
        });
    });
});

// Add animation on scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate-fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Add Intersection Observer for feature cards
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe feature cards
document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    const featureIcons = document.querySelectorAll('.feature-icon');
    
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        observer.observe(card);
    });

    featureIcons.forEach(icon => {
        icon.style.opacity = '0';
        observer.observe(icon);
    });
});
