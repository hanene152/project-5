function checkForm() {
   var fullName = document.getElementById("fullName");
   var email = document.getElementById("email");
   var password = document.getElementById("password");
   var confirmPassword = document.getElementById("passwordConfirm");
   var formErrors = document.getElementById("formErrors");

   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
   var lowercasePattern = /[a-z]/;
   var uppercasePattern = /[A-Z]/;
   var digitPattern = /\d/;

   var errors = [];

   if (fullName.value.trim().length < 1) {
      errors.push("Missing full name.");
      fullName.classList.add("error");
   } else {
      fullName.classList.remove("error");
   }

   if (!email.value.match(emailPattern)) {
      errors.push("Invalid or missing email address.");
      email.classList.add("error");
   } else {
      email.classList.remove("error");
   }

   var isPasswordValid = true;

   if (password.value.length < 10 || password.value.length > 20) {
      errors.push("Password must be between 10 and 20 characters.");
      password.classList.add("error");
      isPasswordValid = false;
   }

   if (!password.value.match(lowercasePattern)) {
      errors.push("Password must contain at least one lowercase character.");
      if (isPasswordValid) password.classList.add("error");
      isPasswordValid = false;
   }

   if (!password.value.match(uppercasePattern)) {
      errors.push("Password must contain at least one uppercase character.");
      if (isPasswordValid) password.classList.add("error");
      isPasswordValid = false;
   }

   if (!password.value.match(digitPattern)) {
      errors.push("Password must contain at least one digit.");
      if (isPasswordValid) password.classList.add("error");
      isPasswordValid = false;
   }

   if (isPasswordValid) {
      password.classList.remove("error");
   }

   if (password.value !== confirmPassword.value) {
      errors.push("Password and confirmation password don't match.");
      confirmPassword.classList.add("error");
   } else {
      confirmPassword.classList.remove("error");
   }

   if (errors.length > 0) {
      formErrors.classList.remove("hide");
      formErrors.innerHTML = "<ul><li>" + errors.join("</li><li>") + "</li></ul>";
   } else {
      formErrors.classList.add("hide");
      formErrors.innerHTML = "";
   }
}

document.getElementById("submit").addEventListener("click", function (event) {
   checkForm();
   event.preventDefault();
});
