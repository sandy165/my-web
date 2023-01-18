var signupButton = document.getElementById("signup-button");
var signupForm = document.getElementById("signup-form");
var cancelButton = document.getElementById("cancel-button");

signupButton.addEventListener("click", function() {
    signupForm.style.display = "block";
});

cancelButton.addEventListener("click", function() {
    signupForm.style.display = "none";
});
