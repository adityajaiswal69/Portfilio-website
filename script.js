// Modern Portfolio JavaScript

// Typed.js initialization
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#element', {
        strings: ['Full-Stack Developer', 'Software Developer', 'React.js Developer', 'Laravel Developer'],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
});

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

// Navigation scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Enhanced mobile menu functionality
var sidemenu = document.getElementById("sidebar");
var menuToggle = document.querySelector(".menu-toggle");

function openmenu(){
    if (sidemenu) {
        sidemenu.classList.add("show");
        document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
}

function closemenu(){
    if (sidemenu) {
        sidemenu.classList.remove("show");
        document.body.style.overflow = "auto"; // Restore scrolling
    }
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    if (sidemenu && sidemenu.classList.contains('show')) {
        if (!sidemenu.contains(event.target) && !menuToggle.contains(event.target)) {
            closemenu();
        }
    }
});

// Close menu on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && sidemenu && sidemenu.classList.contains('show')) {
        closemenu();
    }
});

// Enhanced tab functionality with better error handling
function opentab(tabname, element) {
    console.log('Opening tab:', tabname);

    // Get all tab elements
    var tablinks = document.querySelectorAll(".tab-link");
    var tabcontents = document.querySelectorAll(".tab-contents");

    console.log('Found', tablinks.length, 'tab links and', tabcontents.length, 'tab contents');

    // Remove active classes from all tabs
    tablinks.forEach(function(link) {
        link.classList.remove("active-link");
    });

    tabcontents.forEach(function(content) {
        content.classList.remove("active-tab");
        content.style.display = "none";
        content.style.visibility = "hidden";
        content.style.opacity = "0";
        content.style.height = "0";
        content.style.overflow = "hidden";
    });

    // Add active class to clicked tab link
    if (element) {
        element.classList.add("active-link");
        console.log('Added active-link to:', element);
    }

    // Show the target tab content
    const targetTabId = tabname.replace('#', ''); // Remove the # from tabname
    const targetTab = document.getElementById(targetTabId);

    console.log('Looking for tab with ID:', targetTabId);
    console.log('Found target tab:', targetTab);

    if (targetTab) {
        // Force show the tab content
        targetTab.classList.add("active-tab");
        targetTab.style.display = "block";
        targetTab.style.visibility = "visible";
        targetTab.style.height = "auto";
        targetTab.style.overflow = "visible";

        // Animate in
        setTimeout(function() {
            targetTab.style.opacity = "1";
            targetTab.style.transform = "translateY(0)";
        }, 10);

        console.log('Successfully activated tab:', targetTabId);
    } else {
        console.error('Tab element not found for ID:', targetTabId);
        // List all available tab IDs for debugging
        const allTabs = document.querySelectorAll('.tab-contents');
        console.log('Available tab IDs:', Array.from(allTabs).map(tab => tab.id));
    }
}

// Initialize tabs when page loads
window.addEventListener('load', function() {
    console.log('Initializing tabs...'); // Debug log

    // Hide all tab contents first
    const allTabContents = document.getElementsByClassName("tab-contents");
    for (var i = 0; i < allTabContents.length; i++) {
        allTabContents[i].classList.remove("active-tab");
        allTabContents[i].style.display = "none";
        allTabContents[i].style.opacity = "0";
        allTabContents[i].style.transform = "translateY(10px)";
    }

    // Remove active class from all tab links
    const allTabLinks = document.getElementsByClassName("tab-link");
    for (var i = 0; i < allTabLinks.length; i++) {
        allTabLinks[i].classList.remove("active-link");
    }

    // Make the first tab active
    const firstTabLink = document.querySelector('.tab-link');
    const firstTabContent = document.querySelector('.tab-contents');

    if (firstTabLink) {
        firstTabLink.classList.add('active-link');
        console.log('First tab link activated');
    }

    if (firstTabContent) {
        firstTabContent.classList.add('active-tab');
        firstTabContent.style.display = "block";
        setTimeout(function() {
            firstTabContent.style.opacity = "1";
            firstTabContent.style.transform = "translateY(0)";
        }, 100);
        console.log('First tab content shown');
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-card, .project-card, .about-content, .hero-content, .about-intro, .about-stats, .section-title');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
});

// EmailJS Configuration
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your public key
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual EmailJS public key
});

// Form submission with EmailJS
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const submitBtn = document.getElementById('submit-btn');
        const statusDiv = document.getElementById('form-status');
        const statusMessage = document.getElementById('status-message');
        const originalText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        statusDiv.style.display = 'block';
        statusDiv.className = 'form-status loading';
        statusMessage.textContent = 'Sending your message...';

        // Get form data
        const formData = new FormData(this);
        const templateParams = {
            from_name: formData.get('from_name'),
            from_email: formData.get('from_email'),
            message: formData.get('message'),
            to_email: 'aditya18.work.office@gmail.com'
        };

        // Send email using EmailJS
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);

                // Show success message
                statusDiv.className = 'form-status success';
                statusMessage.innerHTML = '<i class="fas fa-check-circle"></i> Message sent successfully! I\'ll get back to you soon.';
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';

                // Reset form after delay
                setTimeout(() => {
                    contactForm.reset();
                    statusDiv.style.display = 'none';
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 3000);

            }, function(error) {
                console.log('FAILED...', error);

                // Show error message
                statusDiv.className = 'form-status error';
                statusMessage.innerHTML = '<i class="fas fa-exclamation-circle"></i> Failed to send message. Please try again or contact me directly.';
                submitBtn.innerHTML = '<i class="fas fa-times"></i> Send Failed';

                // Reset button after delay
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    statusDiv.style.display = 'none';
                }, 5000);
            });
    });
}

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
});

console.log("🚀 Modern Portfolio Loaded Successfully!");