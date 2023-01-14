const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mailVal = formElements.email.value;
  const passwordVal = formElements.password.value;

  const formDataObj = {
    email: mailVal,
    password: passwordVal,
  };

  if (mailVal === '' || passwordVal === '') {
    alert('All fields must be completed!');
  }

  if (mailVal && passwordVal) {
    console.log(formDataObj);

    formEl.reset();
  }
}
