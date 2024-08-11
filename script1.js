// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handler (you can add this if you plan to handle form submissions)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted successfully!');
    // Handle the form submission here (e.g., sending the data to an email or server)
});
