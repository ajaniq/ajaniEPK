// Initialize EmailJS with your public key
emailjs.init("uAZMRTYeK7uSdAKSb");

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Send email using EmailJS
            emailjs.sendForm('service_4o4ajbs', 'template_z6txw7k', contactForm)
                .then(function() {
                    alert('Thank you for your message! We will get back to you soon.');
                    contactForm.reset();
                })
                .catch(function(error) {
                    alert('Sorry, there was an error sending your message. Please try again later.');
                    console.error('EmailJS error:', error);
                })
                .finally(function() {
                    // Reset button state
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                });
        });
    }
}); 

// Send email function
function sendEmail(e) {
  e.preventDefault();
  emailjs.sendForm('service_4o4ajbs', 'template_z6txw7k', e.target)
    .then(() => alert('Message sent!'))
    .catch(err => alert('Error sending message'));
} 
