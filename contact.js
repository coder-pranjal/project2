function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    
    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }

    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    alert('Form submitted successfully!');
    document.getElementById('contactForm').reset(); 
}
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        alert('Form submitted successfully!');
    });
});