// Forgot Password Modal
const forgotPasswordLink = document.getElementById('forgot-password-link');
const modal = document.getElementById('forgot-password-modal');
const closeModal = document.getElementById('close-modal');
const sendReset = document.getElementById('send-reset');
const resetMessage = document.getElementById('reset-message');

forgotPasswordLink.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'block';
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
    resetMessage.textContent = '';
});

sendReset.addEventListener('click', function() {
    const email = document.getElementById('reset-email').value;
    if (email.trim() === '') {
        resetMessage.style.color = 'red';
        resetMessage.textContent = 'Please enter your email address.';
    } else {
        resetMessage.style.color = 'green';
        resetMessage.textContent = `A password reset link has been sent to ${email}.`;
    }
});

// Facebook Reaction
const fbLoginBtn = document.getElementById('fb-login-btn');
fbLoginBtn.addEventListener('click', function() {
    alert('Logging in with Facebook... 🎉');
    fbLoginBtn.style.backgroundColor = '#4267B2'; // Facebook blue
    fbLoginBtn.style.color = '#fff';
});

// Sign Up Reaction
const signupLink = document.querySelector('.signup-container a');
signupLink.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Redirecting you to Sign Up page 🚀');
    signupLink.style.color = '#0095f6'; // Instagram blue
    signupLink.style.fontWeight = 'bold';
});
