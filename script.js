document.getElementById("joinForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var formData = {
        name: name,
        email: email,
        message: message
    };

    // Send the form data to the specified email address
    sendFormData(formData);
});

function sendFormData(formData) {
    // You can use a service like Formspree or a server-side script to send the form data via email
    // For simplicity, I'll simulate sending an email by logging the form data to the console
    console.log("Form Data:", formData);
    console.log("Form submitted successfully!");
    // Optionally, you can display a thank you message or redirect the user to a thank you page
}
