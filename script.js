function showSignUpFormValues(event) {
    event.preventDefault();
    let emailInput = document.querySelector("#email-input");
    let usernameInput = document.querySelector("#username-input");
    alert(`Your email is ${emailInput.value}`);
    alert(`Your username is ${usernameInput.value}`);
  }
  
  let signUpForm = document.querySelector("#signup-form");
  signUpForm.addEventListener("submit", showSignUpFormValues);

  alert("Hello Github!!");
  