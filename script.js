
document.addEventListener('DOMContentLoaded', () => {
  const registerLink = document.querySelector('.register-link');
  const loginLink = document.querySelector('.login-link');

  if (registerLink) {
      registerLink.addEventListener('click', (event) => {
          event.preventDefault();
          window.location.href = 'register.html';
      });
  }

  if (loginLink) {
      loginLink.addEventListener('click', (event) => {
          event.preventDefault();
          window.location.href = 'index.html';
      });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const forgotLink = document.querySelector('.forgot-password-link');
    const loginLink = document.querySelector('.login-link');

    if (forgotLink) {
      forgotLink.addEventListener('click', (event) => {
          event.preventDefault();
          window.location.href = 'forgot.html';
      });
  }
  
});
