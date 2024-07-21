Overview
In this lab, you will use regular expressions with JavaScript to validate a user registration form. Error messages will be displayed at the bottom of the form, as shown below.

User registration form with invalid input showing styling and error messages.

Step 1: Inspect the project
The project contains HTML, CSS, and JavaScript files. The register.js file registers a click event handler for the Register button that prevents the form from submitting. The event handler calls checkForm() to perform data validation.

Step 2: Implement checkForm()
Complete checkForm() in register.js to verify that the user-provided information is valid.

If form validation errors exist:

Display the formErrors <div> by removing the hide class.
Display each of the associated error messages in the formErrors <div> using an unordered list. The error message must be displayed in the order the validation is performed, following the order specified below.
Add the error class to each <input> element with invalid input.

If no form validation errors exist:

Hide the formErrors <div> by adding the hide class.
Remove the error class from all test, email, and password <input> elements.

Perform the following form validations in the order provided and display all error messages that apply:

Ensure a full name with a length greater than or equal to 1 was provided.
Otherwise, display "Missing full name."
Ensure that an email address was provided and that the email address matches the regular expression:
/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/
Otherwise, display "Invalid or missing email address."
Ensure the password has 10 to 20 characters.
Otherwise, display "Password must be between 10 and 20 characters."
Ensure the password contains at least one lowercase character (use a regular expression).
Otherwise, display "Password must contain at least one lowercase character."
Ensure the password contains at least one uppercase character (use a regular expression).
Otherwise, display "Password must contain at least one uppercase character."
Ensure the password contains at least one digit (use a regular expression).
Otherwise, display "Password must contain at least one digit."
Ensure the password and confirmation password match.
Otherwise, display "Password and confirmation password don't match."
Test your solution by typing invalid data in each input and pressing the Register button. Verify a red border surrounds the input with invalid data and the correct error message displays.
