// 代码生成时间: 2025-08-02 21:41:23
 * @author [Your Name]
 *
 * This script provides a basic form validation functionality.
 * It can be easily expanded to include more rules as needed.
 */

(function() {
    "use strict";

    const form = document.getElementById('myForm');
    const validator = {
        // Validate an email address
        validateEmail: function(email) {
            const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return re.test(String(email).toLowerCase());
        },

        // Validate a password, must be at least 6 characters long and include a number
        validatePassword: function(password) {
            const re = /^(?=.*[0-9]).{6,}$/;
            return re.test(String(password));
        },

        // Validate a username, must be between 3 and 15 characters
        validateUsername: function(username) {
            const re = /^[a-zA-Z0-9_]{3,15}$/;
            return re.test(String(username));
        },

        // Combine all validation rules and show messages accordingly
        validateForm: function() {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const username = document.getElementById('username').value;
            let errors = [];

            if (!this.validateEmail(email)) {
                errors.push("Email is invalid.");
            }

            if (!this.validatePassword(password)) {
                errors.push("Password is invalid.");
            }

            if (!this.validateUsername(username)) {
                errors.push("Username is invalid.");
            }

            // Display errors or submit the form
            if (errors.length > 0) {
                this.displayErrors(errors);
            } else {
                // If no errors, submit form
                console.log('Form is valid, submitting...');
                // form.submit(); // Uncomment this line to actually submit the form
            }
        },

        // Display error messages on the form
        displayErrors: function(errors) {
            const errorContainer = document.getElementById('errorMessages');
            errorContainer.innerHTML = '';
            errors.forEach(function(error) {
                const errorElement = document.createElement('div');
                errorElement.textContent = error;
                errorElement.className = 'error';
                errorContainer.appendChild(errorElement);
            });
        }
    };

    // Event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validator.validateForm();
    });
})();

/*
 * HTML Example:
 * <form id="myForm">
 *     <input type="email" id="email" required>
 *     <input type="password" id="password" required>
 *     <input type="text" id="username" required>
 *     <div id="errorMessages"></div>
 *     <button type="submit">Submit</button>
 * </form>
 *
 * CSS Example:
 * .error {
 *     color: red;
 * }
 */