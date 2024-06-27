
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
});
