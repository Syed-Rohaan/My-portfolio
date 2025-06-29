// DOM Elements
const header = document.getElementById('header');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const contactForm = document.getElementById('contact-form');
const scrollToTopBtn = document.getElementById('scroll-to-top');

// Enhanced Animation Controller
class AnimationController {
    constructor() {
        this.observers = new Map();
        this.animatedElements = new Set();
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupScrollAnimations();
        this.setupParallaxEffects();
        this.setupMouseFollowEffects();
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animatedElements.has(entry.target)) {
                    this.triggerAnimation(entry.target);
                    this.animatedElements.add(entry.target);
                }
            });
        }, observerOptions);

        // Observe all animatable elements
        const animatableElements = document.querySelectorAll(`
            .section-header,
            .about-text,
            .stats-grid .stat-card,
            .values-grid .value-card,
            .skill-category,
            .project-card,
            .timeline-item,
            .sidebar-card,
            .contact-form-container,
            .contact-card,
            .tech-item,
            .info-item
        `);

        animatableElements.forEach(el => observer.observe(el));
        this.observers.set('main', observer);
    }

    triggerAnimation(element) {
        // Add staggered animations for child elements
        const children = element.querySelectorAll('.skill-item, .tech-tag, .achievement-item');
        children.forEach((child, index) => {
            setTimeout(() => {
                child.style.animation = `slideInRight 0.6s ease-out ${index * 0.1}s both`;
            }, index * 100);
        });

        // Animate skill bars
        if (element.classList.contains('skill-category')) {
            this.animateSkillBars(element);
        }

        // Animate counters
        if (element.classList.contains('stat-card')) {
            this.animateCounter(element);
        }

        // Animate project cards with enhanced effects
        if (element.classList.contains('project-card')) {
            this.animateProjectCard(element);
        }
    }

       animateSkillBars(skillCategory) {
        const skillItems = skillCategory.querySelectorAll('.skill-item');
        skillItems.forEach((skillItem, index) => {
            setTimeout(() => {
                const skillBar = skillItem.querySelector('.skill-bar');
                const skillProgress = skillItem.querySelector('.skill-progress');
                
                if (skillBar && skillProgress) {
                    // Get the skill level from data attribute or calculate from skill name
                    const skillName = skillItem.querySelector('.skill-name').textContent;
                    const skillLevel = skillItem.querySelector('.skill-level').textContent;
                    const percentage = parseInt(skillLevel.replace('%', ''));
                    
                    // Reset the progress bar
                    skillProgress.style.width = '0%';
                    skillProgress.style.transition = 'none';
                    
                    // Force reflow
                    skillProgress.offsetHeight;
                    
                    // Animate to target width
                    setTimeout(() => {
                        skillProgress.style.transition = 'width 1.5s ease-out';
                        skillProgress.style.width = percentage + '%';
                        
                        // Add shimmer effect
                        skillProgress.style.animation = 'progressGlow 2s ease-in-out infinite';
                    }, 100);
                }
            }, index * 200);
        });
    }

    animateCounter(statCard) {
        const valueElement = statCard.querySelector('.stat-value');
        if (valueElement) {
            const target = parseInt(valueElement.textContent.replace(/\D/g, ''));
            const suffix = valueElement.textContent.replace(/\d/g, '');
            let current = 0;
            const increment = target / 60;
            const duration = 2000;
            const stepTime = duration / 60;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                valueElement.textContent = Math.floor(current) + suffix;
            }, stepTime);
        }
    }

    animateProjectCard(projectCard) {
        // Add hover enhancement
        projectCard.addEventListener('mouseenter', () => {
            const image = projectCard.querySelector('.project-image img');
            if (image) {
                image.style.transform = 'scale(1.15) rotate(2deg)';
            }
        });

        projectCard.addEventListener('mouseleave', () => {
            const image = projectCard.querySelector('.project-image img');
            if (image) {
                image.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    }

    setupScrollAnimations() {
        let ticking = false;

        const updateScrollAnimations = () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;

            // Parallax for floating shapes
            const shapes = document.querySelectorAll('.floating-shape, .glow-particle');
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.1;
                const yPos = rate * speed;
                const rotation = scrolled * 0.05;
                shape.style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`;
            });

            // Header background blur effect
            const header = document.getElementById('header');
            if (header) {
                const blurAmount = Math.min(scrolled / 100, 1) * 20;
                header.style.backdropFilter = `blur(${blurAmount}px)`;
            }

            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollAnimations);
                ticking = true;
            }
        });
    }

    setupParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.parallax-element');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const rate = scrolled * -0.3;
                element.style.transform = `translateY(${rate}px)`;
            });
        });
    }

    // setupMouseFollowEffects() {
    //     // Create cursor follower
    //     const cursorFollower = document.createElement('div');
    //     cursorFollower.className = 'cursor-follower';
    //     cursorFollower.style.cssText = `
    //         position: fixed;
    //         width: 20px;
    //         height: 20px;
    //         background: radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent);
    //         border-radius: 50%;
    //         pointer-events: none;
    //         z-index: 9999;
    //         transition: transform 0.1s ease;
    //         display: none;
    //     `;
    //     document.body.appendChild(cursorFollower);

//         // Mouse move effect
//         document.addEventListener('mousemove', (e) => {
//             if (window.innerWidth > 768) {
//                 cursorFollower.style.display = 'block';
//                 cursorFollower.style.left = e.clientX - 10 + 'px';
//                 cursorFollower.style.top = e.clientY - 10 + 'px';
//             }
//         });

//         // Enhanced hover effects for interactive elements
//         const interactiveElements = document.querySelectorAll('a, button, .project-card, .stat-card');
//         interactiveElements.forEach(element => {
//             element.addEventListener('mouseenter', () => {
//                 cursorFollower.style.transform = 'scale(2)';
//                 cursorFollower.style.background = 'radial-gradient(circle, rgba(147, 197, 253, 0.5), transparent)';
//             });

//             element.addEventListener('mouseleave', () => {
//                 cursorFollower.style.transform = 'scale(1)';
//                 cursorFollower.style.background = 'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)';
//             });
//         });
//     }
}

// Simple Navigation functionality (restored to previous version)
function initNavigation() {
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.contains('mobile');
        
        if (isOpen) {
            navMenu.classList.remove('mobile');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        } 
        else {
            navMenu.classList.add('mobile');
            navToggle.classList.add('active');
            navToggle.setAttribute('aria-expanded', 'true');
        }
    });

    // Close mobile menu when clicking on links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('mobile');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('mobile');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
 }
 document.addEventListener('DOMContentLoaded', initNavigation);

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Header scroll effect (simplified)
function initHeaderScroll() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Enhanced scroll to top functionality
function initScrollToTop() {
    let ticking = false;

    const updateScrollToTop = () => {
        const scrolled = window.pageYOffset;
        
        if (scrolled > 300) {
            scrollToTopBtn.style.display = 'block';
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.transform = 'scale(1)';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.transform = 'scale(0.8)';
            setTimeout(() => {
                if (window.pageYOffset <= 300) {
                    scrollToTopBtn.style.display = 'none';
                }
            }, 300);
        }
        
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollToTop);
            ticking = true;
        }
    });

    // Enhanced scroll to top with animation
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Add click animation
        scrollToTopBtn.style.animation = 'buttonPulse 0.3s ease-out';
        setTimeout(() => {
            scrollToTopBtn.style.animation = '';
        }, 300);
    });
}

// Enhanced form validation and submission
function initContactForm() {
    const formInputs = {
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        subject: document.getElementById('subject'),
        message: document.getElementById('message')
    };

    const errorElements = {
        name: document.getElementById('name-error'),
        email: document.getElementById('email-error'),
        subject: document.getElementById('subject-error'),
        message: document.getElementById('message-error')
    };

    // Enhanced validation functions
    function validateName(name) {
        return name.trim().length >= 2 && /^[a-zA-Z\s]+$/.test(name.trim());
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email.trim());
    }

    function validateSubject(subject) {
        return subject.trim().length >= 3 && subject.trim().length <= 100;
    }

    function validateMessage(message) {
        return message.trim().length >= 10 && message.trim().length <= 1000;
    }

    // Enhanced error display with animations
    function showError(field, message) {
        const errorElement = errorElements[field];
        const inputElement = formInputs[field];
        
        errorElement.textContent = message;
        errorElement.classList.add('show');
        inputElement.style.borderColor = '#ef4444';
        inputElement.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
        inputElement.setAttribute('aria-invalid', 'true');
        
        // Add shake animation
        inputElement.style.animation = 'inputShake 0.5s ease-in-out';
        setTimeout(() => {
            inputElement.style.animation = '';
        }, 500);
    }

    function clearError(field) {
        const errorElement = errorElements[field];
        const inputElement = formInputs[field];
        
        errorElement.classList.remove('show');
        inputElement.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        inputElement.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        inputElement.setAttribute('aria-invalid', 'false');
    }

    // Enhanced real-time validation with debouncing
    Object.keys(formInputs).forEach(field => {
        const input = formInputs[field];
        let timeout;
        
        input.addEventListener('input', () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                if (input.value.trim()) {
                    validateField(field, input.value);
                } else {
                    clearError(field);
                }
            }, 300);
        });

        input.addEventListener('blur', () => {
            validateField(field, input.value);
        });

        // Enhanced focus effects
        input.addEventListener('focus', () => {
            input.style.transform = 'translateY(-2px) scale(1.01)';
            input.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.2)';
        });

        input.addEventListener('blur', () => {
            input.style.transform = 'translateY(0) scale(1)';
            if (!input.classList.contains('error')) {
                input.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            }
        });
    });

    function validateField(field, value) {
        let isValid = true;
        let errorMessage = '';

        switch (field) {
            case 'name':
                if (!validateName(value)) {
                    isValid = false;
                    errorMessage = 'Name must be at least 2 characters and contain only letters';
                }
                break;
            case 'email':
                if (!validateEmail(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email address';
                }
                break;
            case 'subject':
                if (!validateSubject(value)) {
                    isValid = false;
                    errorMessage = 'Subject must be between 3-100 characters';
                }
                break;
            case 'message':
                if (!validateMessage(value)) {
                    isValid = false;
                    errorMessage = 'Message must be between 10-1000 characters';
                }
                break;
        }

        if (isValid) {
            clearError(field);
            // Add success animation
            formInputs[field].style.borderColor = '#22c55e';
            setTimeout(() => {
                if (isValid) {
                    formInputs[field].style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }
            }, 1000);
        } else {
            showError(field, errorMessage);
        }

        return isValid;
    }

    // Enhanced form submission with loading states
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate all fields
        let isFormValid = true;
        Object.keys(formInputs).forEach(field => {
            const isFieldValid = validateField(field, formInputs[field].value);
            if (!isFieldValid) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            const submitButton = contactForm.querySelector('.form-submit');
            const originalText = submitButton.innerHTML;
            
            // Enhanced loading state
            submitButton.innerHTML = `
                <div class="loading-spinner"></div>
                Sending...
            `;
            submitButton.disabled = true;
            submitButton.style.background = 'linear-gradient(135deg, #93c5fd, #3b82f6)';

            // Add loading spinner styles
            const style = document.createElement('style');
            style.textContent = `
                .loading-spinner {
                    width: 20px;
                    height: 20px;
                    border: 2px solid #ffffff;
                    border-top: 2px solid transparent;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin-right: 8px;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);

            // Simulate API call with enhanced feedback
            setTimeout(() => {
                // Reset form with animation
                Object.keys(formInputs).forEach(field => {
                    formInputs[field].style.animation = 'fadeOut 0.3s ease-out';
                    setTimeout(() => {
                        formInputs[field].value = '';
                        formInputs[field].style.animation = 'fadeIn 0.3s ease-out';
                    }, 300);
                });
                
                // Reset button with success animation
                submitButton.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    Sent Successfully!
                `;
                submitButton.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
                
                setTimeout(() => {
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                    submitButton.style.background = 'linear-gradient(135deg, #ffffff, #e5e7eb)';
                }, 2000);
                
                // Show enhanced success message
                showSuccessMessage();
                
                // Clear any remaining errors
                Object.keys(errorElements).forEach(field => {
                    clearError(field);
                });
                
                // Remove loading spinner styles
                document.head.removeChild(style);
            }, 2000);
        } else {
            // Enhanced error feedback
            const firstInvalidField = Object.keys(formInputs).find(field => 
                errorElements[field].classList.contains('show')
            );
            if (firstInvalidField) {
                formInputs[firstInvalidField].focus();
                formInputs[firstInvalidField].style.animation = 'inputShake 0.5s ease-in-out';
            }
        }
    });

    // Enhanced success message with better animations
    function showSuccessMessage() {
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <div style="
                background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.1));
                border: 2px solid #22c55e;
                color: #ffffff;
                padding: 1.5rem;
                border-radius: 0.75rem;
                margin-bottom: 1.5rem;
                text-align: center;
                animation: successSlideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: 0 10px 30px rgba(34, 197, 94, 0.3);
            ">
                <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 0.5rem;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 0.5rem;">
                        <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <strong>Message sent successfully!</strong>
                </div>
                <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
            </div>
        `;
        
        contactForm.insertBefore(successMessage, contactForm.firstChild);
        
        // Enhanced removal with fade out
        setTimeout(() => {
            successMessage.style.animation = 'successSlideOut 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            setTimeout(() => {
                successMessage.remove();
            }, 600);
        }, 5000);
    }
}

// // Enhanced typing effect for hero title
// function initTypingEffect() {
//     const titleElement = document.querySelector('.hero-title');
//     if (titleElement) {
//         const text = titleElement.textContent;
//         titleElement.textContent = '';
//         titleElement.style.borderRight = '2px solid #93c5fd';
        
//         let i = 0;
//         const typeWriter = () => {
//             if (i < text.length) {
//                 titleElement.textContent += text.charAt(i);
//                 i++;
//                 setTimeout(typeWriter, 80);
//             } else {
//                 setTimeout(() => {
//                     titleElement.style.borderRight = 'none';
//                 }, 10);
//             }
//         };
        
//         setTimeout(typeWriter, 0);
//     }
// }


// // Enhanced typing effect for hero title

function initTypingEffect() {
    const titleElement = document.querySelector('.hero-title');
    if (titleElement) {
        const text = titleElement.textContent;
        titleElement.textContent = '';
        titleElement.style.borderRight = '2px solid #93c5fd';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                titleElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            } else {
                setTimeout(() => {
                    titleElement.style.borderRight = 'none';
                }, 500);
            }
        };
        
        setTimeout(typeWriter, 200);
    }
}


// Enhanced particle system
function initParticleSystem() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    document.body.appendChild(particleContainer);

    function createParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: radial-gradient(circle, rgba(59, 130, 246, 0.6), transparent);
            border-radius: 50%;
            animation: particleFloat ${Math.random() * 10 + 5}s linear infinite;
        `;
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '100%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        particleContainer.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 15000);
    }

    // Create particles periodically
    setInterval(createParticle, 2000);
}

// Enhanced keyboard navigation
function initKeyboardNavigation() {
    // Enhanced skip link functionality
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(skipLink.getAttribute('href'));
            if (target) {
                target.focus();
                target.scrollIntoView();
            }
        });
    }

    // Enhanced escape key handling
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (navMenu.classList.contains('mobile')) {
                navMenu.classList.remove('mobile');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.focus();
            }
        }
        
        // Add keyboard shortcuts
        if (e.ctrlKey || e.metaKey) {
            switch (e.key) {
                case 'k':
                    e.preventDefault();
                    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'h':
                    e.preventDefault();
                    document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
                    break;
            }
        }
    });
}

// Enhanced performance optimizations
function initPerformanceOptimizations() {
    // Enhanced lazy loading with intersection observer
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Add loading animation
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.6s ease';
                    
                    img.src = img.dataset.src || img.src;
                    img.onload = () => {
                        img.style.opacity = '1';
                        img.classList.remove('lazy');
                    };
                    
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Enhanced scroll event debouncing
    let scrollTimeout;
    const scrollHandlers = [];
    
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(() => {
            scrollHandlers.forEach(handler => handler());
        }, 16); // ~60fps
    });

    // Resource preloading
    const preloadResources = [
        '/images/hero-bg.jpg',
        '/images/about-image.jpg'
    ];

    preloadResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = resource;
        document.head.appendChild(link);
    });
}

// Enhanced error handling with user feedback
function initErrorHandling() {
    window.addEventListener('error', (e) => {
        console.error('JavaScript error:', e.error);
        showErrorNotification('Something went wrong. Please refresh the page.');
    });

    window.addEventListener('unhandledrejection', (e) => {
        console.error('Unhandled promise rejection:', e.reason);
        showErrorNotification('Network error. Please check your connection.');
    });

    function showErrorNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, rgba(239, 68, 68, 0.9), rgba(220, 38, 38, 0.9));
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            animation: slideInRight 0.4s ease-out;
            max-width: 300px;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.4s ease-out';
            setTimeout(() => notification.remove(), 400);
        }, 5000);
    }
}

// Enhanced analytics with user interaction tracking
function initAnalytics() {
    // Track page view with enhanced data
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: document.title,
            page_location: window.location.href,
            custom_map: {
                'dimension1': 'user_engagement_level'
            }
        });
    }

    // Enhanced interaction tracking
    let interactionScore = 0;
    const interactions = ['click', 'scroll', 'keydown', 'mousemove'];
    
    interactions.forEach(event => {
        document.addEventListener(event, () => {
            interactionScore++;
        }, { passive: true });
    });

    // Track form interactions
    if (contactForm) {
        contactForm.addEventListener('submit', () => {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submit', {
                    event_category: 'Contact',
                    event_label: 'Contact Form',
                    value: interactionScore
                });
            }
        });
    }

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', () => {
        const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollDepth > maxScrollDepth) {
            maxScrollDepth = scrollDepth;
            
            if (maxScrollDepth % 25 === 0 && typeof gtag !== 'undefined') {
                gtag('event', 'scroll_depth', {
                    event_category: 'Engagement',
                    event_label: `${maxScrollDepth}%`,
                    value: maxScrollDepth
                });
            }
        }
    });

    // Track time on page
    const startTime = Date.now();
    window.addEventListener('beforeunload', () => {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        if (typeof gtag !== 'undefined') {
            gtag('event', 'time_on_page', {
                event_category: 'Engagement',
                value: timeOnPage
            });
        }
    });
}

// Enhanced theme detection with system preference changes
function initThemeDetection() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    function handleReducedMotion(e) {
        if (e.matches) {
            document.body.classList.add('reduced-motion');
            // Disable complex animations
            document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        } else {
            document.body.classList.remove('reduced-motion');
            document.documentElement.style.setProperty('--animation-duration', '');
        }
    }

    function handleThemeChange(e) {
        // Add theme-specific enhancements
        if (e.matches) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }

    // Initial setup
    handleReducedMotion(prefersReducedMotion);
    handleThemeChange(prefersDark);

    // Listen for changes
    prefersReducedMotion.addEventListener('change', handleReducedMotion);
    prefersDark.addEventListener('change', handleThemeChange);
}

// Add additional CSS animations
const additionalStyles = `
    @keyframes slideInRight {
        0% { transform: translateX(30px); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        0% { transform: translateX(0); opacity: 1; }
        100% { transform: translateX(30px); opacity: 0; }
    }
    
    @keyframes inputShake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    @keyframes fadeOut {
        0% { opacity: 1; }
        100% { opacity: 0; }
    }
    
    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    
    @keyframes successSlideIn {
        0% { transform: translateY(-20px) scale(0.95); opacity: 0; }
        100% { transform: translateY(0) scale(1); opacity: 1; }
    }
    
    @keyframes successSlideOut {
        0% { transform: translateY(0) scale(1); opacity: 1; }
        100% { transform: translateY(-20px) scale(0.95); opacity: 0; }
    }
    
    @keyframes buttonPulse {
        0% { transform: scale(1); }
        50% { transform: scale(0.95); }
        100% { transform: scale(1); }
    }
    
    @keyframes particleFloat {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
    
    .reduced-motion * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
`;

// Initialize all functionality
function init() {
    // Add additional styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = additionalStyles;
    document.head.appendChild(styleSheet);

    // Initialize animation controller
    const animationController = new AnimationController();
    
    // Core functionality
    initNavigation();
    initHeaderScroll();
    initSmoothScrolling();
    initScrollToTop();
    initContactForm();
    initKeyboardNavigation();
    
    // Enhanced features
    initTypingEffect();
    initParticleSystem();
    initPerformanceOptimizations();
    initErrorHandling();
    initThemeDetection();
    
    // Optional features
    initAnalytics();
    
    // Add loading complete class
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        init,
        initNavigation,
        initContactForm,
        AnimationController
    };
}