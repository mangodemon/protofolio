// JavaScript code goes here
// You can add interactivity and dynamic functionality to your website using JavaScript

// Example code: Display an alert when the contact form is submitted
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Display an alert with the form values
    alert("Form submitted:\nName: " + name + "\nEmail: " + email + "\nMessage: " + message);

    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
});
