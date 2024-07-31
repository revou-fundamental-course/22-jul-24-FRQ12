document.addEventListener("DOMContentLoaded", () => {
    // Auto-slide banner images
    const slides = document.querySelectorAll('.banner img');
    let currentSlide = 0;
    const slideInterval = setInterval(nextSlide, 5000);

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Form validation
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Validate the input values
        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // If validation passes, you can send the data to a server or show a success message
        alert("Thank you for reaching out, " + name + "!\nWe will get back to you soon.");
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
