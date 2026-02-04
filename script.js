// Smooth scroll behavior for navigation links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

// Update active navigation link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// WhatsApp Form Submission Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Ambil data dari form
        const name = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Format pesan untuk WhatsApp
        let whatsappMessage = `*New Contact from Portfolio*\n\n`;
        whatsappMessage += `*Name:* ${name}\n`;
        whatsappMessage += `*Email:* ${email}\n`;
        if (phone) whatsappMessage += `*Phone:* ${phone}\n`;
        if (subject) whatsappMessage += `*Subject:* ${subject}\n`;
        whatsappMessage += `\n*Message:*\n${message}`;
        
        // Encode message untuk URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // GANTI NOMOR INI DENGAN NOMOR WA LU (format: 628123456789)
        const whatsappNumber = '6281222628052'; // <-- GANTI INI
        
        // Buat WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Buka WhatsApp di tab baru
        window.open(whatsappURL, '_blank');
        
        // Reset form
        contactForm.reset();
    });
}

// Add animation on scroll (optional enhancement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe skill boxes and hobby boxes for fade-in animation
const animateElements = document.querySelectorAll('.skill-box, .hobby-box, .timeline-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});
