// script.js - Interactive functionality for CodeCon 2025

document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 240, 255, 0.1)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Animate hamburger lines
        const spans = hamburger.querySelectorAll('span');
        if (hamburger.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation link highlighting
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);

    // Add floating particles animation
    function createFloatingParticle() {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: #00f0ff;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            box-shadow: 0 0 10px #00f0ff;
            left: ${Math.random() * 100}vw;
            top: 100vh;
            animation: floatUp ${5 + Math.random() * 10}s linear forwards;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 15000);
    }

    // Create floating particles periodically
    setInterval(createFloatingParticle, 3000);

    // Add CSS for floating particles animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        .nav-link.active {
            color: #00f0ff;
        }
        
        .nav-link.active::after {
            width: 100%;
        }
        
        @media (max-width: 768px) {
            .nav-menu {
                position: fixed;
                left: -100%;
                top: 70px;
                flex-direction: column;
                background: rgba(10, 10, 10, 0.98);
                width: 100%;
                text-align: center;
                transition: 0.3s;
                box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
            }
            
            .nav-menu.active {
                left: 0;
            }
            
            .nav-menu li {
                margin: 1rem 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Enhanced hover effects for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Enhanced speaker card interactions
    const speakerCards = document.querySelectorAll('.speaker-card');
    speakerCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const avatar = this.querySelector('.speaker-avatar');
            avatar.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            const avatar = this.querySelector('.speaker-avatar');
            avatar.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Portfolio button enhanced interaction
    const portfolioButton = document.querySelector('.portfolio-button');
    if (portfolioButton) {
        portfolioButton.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-3px) scale(1.05)';
            }, 150);
            
            // Simulate navigation (replace with actual portfolio URL)
            setTimeout(() => {
                alert('Portfolio navigation would go here!');
            }, 300);
        });
    }

    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = this.querySelector('.submit-button');
            const originalText = submitButton.textContent;
            
            // Simulate form submission
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                submitButton.textContent = 'Message Sent!';
                submitButton.style.background = 'linear-gradient(135deg, #00ff88, #00aa55)';
                
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    submitButton.style.background = 'linear-gradient(135deg, #00f0ff, #0077ff)';
                    contactForm.reset();
                }, 2000);
            }, 1500);
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .speaker-card, .contact-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Add animation styles
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
        .feature-card,
        .speaker-card,
        .contact-item {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .feature-card.animate-in,
        .speaker-card.animate-in,
        .contact-item.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .feature-card:nth-child(2).animate-in {
            transition-delay: 0.1s;
        }
        
        .feature-card:nth-child(3).animate-in {
            transition-delay: 0.2s;
        }
        
        .feature-card:nth-child(4).animate-in {
            transition-delay: 0.3s;
        }
        
        .speaker-card:nth-child(2).animate-in {
            transition-delay: 0.1s;
        }
        
        .speaker-card:nth-child(3).animate-in {
            transition-delay: 0.2s;
        }
        
        .speaker-card:nth-child(4).animate-in {
            transition-delay: 0.3s;
        }
    `;
    document.head.appendChild(animationStyle);

    // Dynamic background effects
    function createBackgroundEffect() {
        const effect = document.createElement('div');
        effect.style.cssText = `
            position: fixed;
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
            left: ${Math.random() * window.innerWidth}px;
            top: ${Math.random() * window.innerHeight}px;
            animation: backgroundPulse 4s ease-in-out infinite;
        `;
        
        document.body.appendChild(effect);
        
        setTimeout(() => {
            if (effect.parentNode) {
                effect.parentNode.removeChild(effect);
            }
        }, 4000);
    }

    // Create background effects periodically
    setInterval(createBackgroundEffect, 8000);

    // Add background pulse animation
    const backgroundStyle = document.createElement('style');
    backgroundStyle.textContent = `
        @keyframes backgroundPulse {
            0%, 100% {
                opacity: 0;
                transform: scale(0.5);
            }
            50% {
                opacity: 1;
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(backgroundStyle);

    // Enhanced CTA button interactions
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    console.log('CodeCon 2025 website loaded successfully! 🚀');
});