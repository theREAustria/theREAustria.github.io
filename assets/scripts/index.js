document.getElementById('projects-button').addEventListener('click', function() {
    window.location.href = 'https://visuallingo.webflow.io/';
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show/hide scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const projectsSection = document.getElementById('projects-section');

window.addEventListener('scroll', () => {
    const rect = projectsSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Function to check if scroll is at the top
function checkScrollPosition() {
    if (window.scrollY === 0) {
        scrollToTopBtn.style.display = 'none';
    }
}

// Add an event listener to handle the completion of the scroll event
window.addEventListener('scroll', () => {
    checkScrollPosition();
});

// Initial check
checkScrollPosition();

// For the about and contact page
function setActiveLink() {
    const links = document.querySelectorAll('.nav-child');
    links.forEach(link => {
        link.classList.remove('active');
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
}

window.onload = setActiveLink;

const navLinks = document.querySelectorAll('.nav-child');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        this.classList.add('active');
    });
});
