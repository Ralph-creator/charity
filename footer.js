function submitForm() {
    const emailInput = document.querySelector('.mail');
    const email = emailInput.value;

    if (email) {
        alert(`Thank you for subscribing with the email: ${email}`);
        emailInput.value = ''; // Clear the email field
    } else {
        alert('Please enter a valid email address.');
    }
}