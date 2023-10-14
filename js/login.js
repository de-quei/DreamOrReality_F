function togglePassword() {
    var passwordInput = document.querySelector('.inputPW');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}