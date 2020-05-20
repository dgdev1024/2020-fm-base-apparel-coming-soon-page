/* DOM Elements */
const emailForm = document.querySelector('#email-form');
const emailInput = document.querySelector('#email-input');
const emailError = document.querySelector('#email-error');

/* Email Address Regex */
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

/* Functions */
const setEmailError = (str = '') => {
  if (typeof str !== 'string' || str === '') {
    emailForm.classList.remove('error');
    emailError.classList.remove('error');
  } else {
    emailForm.classList.add('error');
    emailError.classList.add('error');
    emailError.innerHTML = str;
  }
}

const validateEmail = (str) => {
  if (typeof str !== 'string' || str === '') {
    setEmailError('Please provide an email address.');
    return false;
  }

  if (emailRegex.test(str) === false) {
    setEmailError('Please provide a valid email address.');
    return false;
  }

  setEmailError('');
  return true;
};

/* DOM Events */
const onEmailFormSubmit = (ev) => {
  ev.preventDefault();
  validateEmail(emailInput.value);
};

/* Main */
window.onload = () => {
  emailForm.addEventListener('submit', onEmailFormSubmit);
};
