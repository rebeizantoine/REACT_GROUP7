// Initialize the map
var map = L.map('map').setView([33.894207897447394, 35.479599808576545], 13);

// Add the OSM base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker
var marker = L.marker([33.894207897447394, 35.479599808576545]).addTo(map);
marker.bindPopup("Hello! This is FOODY!!.").openPopup();

// You can add more markers, polygons, etc. as needed

document.addEventListener("DOMContentLoaded", function () {
    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Get the form element
    const form = document.querySelector(".form-group");

    // Get the email input field
    const emailInput = document.getElementById("email");

    // Add event listener for form submission
    form.addEventListener("submit", function (event) {
        const emailValue = emailInput.value;

        if (!isValidEmail(emailValue)) {
            event.preventDefault(); // Prevent form submission
            alert("INVALID EMAIL"); // Show alert for invalid email
        }
    });
});