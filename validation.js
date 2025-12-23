document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default submission

    const form = event.target;
    const fullName = form.fullName;
    const email = form.email;
    const password = form.password;
    const confirmPassword = form.confirmPassword;
    const terms = form.terms;

    let isValid = true;

    // Validate Full Name
    if (fullName.value.trim().length < 2 || fullName.value.trim().length > 50) {
        setInvalid(fullName);
        isValid = false;
    } else {
        setValid(fullName);
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        setInvalid(email);
        isValid = false;
    } else {
        setValid(email);
    }

    // Validate Password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password.value)) {
        setInvalid(password);
        isValid = false;
    } else {
        setValid(password);
    }

    // Validate Confirm Password
    if (confirmPassword.value !== password.value) {
        setInvalid(confirmPassword);
        isValid = false;
    } else {
        setValid(confirmPassword);
    }

    // Validate Terms
    if (!terms.checked) {
        setInvalid(terms);
        isValid = false;
    } else {
        setValid(terms);
    }

    if (isValid) {
        // Simulate success (replace with actual submission)
        document.getElementById('successMessage').classList.remove('d-none');
        form.reset();
        // Clear success message after 3 seconds
        setTimeout(() => {
            document.getElementById('successMessage').classList.add('d-none');
        }, 3000);
    }
});

// Helper functions for validation feedback
function setInvalid(element) {
    element.classList.add('is-invalid');
    element.classList.remove('is-valid');
}

function setValid(element) {
    element.classList.add('is-valid');
    element.classList.remove('is-invalid');
}

// Real-time validation on input
document.querySelectorAll('.form-control, .form-check-input').forEach(element => {
    element.addEventListener('input', function() {
        // Clear validation classes on input
        element.classList.remove('is-invalid', 'is-valid');
    });
});