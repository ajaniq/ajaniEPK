// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // I plan on setting up a server to send the form data when I use this website outside of class
            alert('Thank you for your message! We will get back to you soon.');
            
            // Clear the form
            contactForm.reset();
        });
    }
}); 