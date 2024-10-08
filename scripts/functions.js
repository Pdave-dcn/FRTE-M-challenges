export function checkInputs() {
  const requiredField = [
    document.querySelector(".js-first-name"),
    document.querySelector(".js-last-name"),
    document.getElementById("message"),
  ];

  let isValid = true;

  requiredField.forEach((element) => {
    const errorElement = element.nextElementSibling;
    if (element.value.trim() === "" || element.value.trim() === null) {
      if (errorElement && errorElement.classList.contains("js-error")) {
        errorElement.innerHTML = "This field is required";
        element.classList.add("js-error-input");
        isValid = false;
      }
    } else {
      if (errorElement && errorElement.classList.contains("js-error")) {
        errorElement.innerHTML = "";
        element.classList.remove("js-error-input");
      }
    }
  });
  return isValid;
}

export function emailValidation() {
  const emailElement = document.querySelector(".js-email");
  const email = emailElement.value.trim();

  let regex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  let isValid = true;

  if (!regex.test(email)) {
    document.querySelector(".js-email-error").innerHTML =
      "Please enter a valid email address";
    emailElement.classList.add("js-error-input");
    isValid = false;
  } else {
    document.querySelector(".js-email-error").innerHTML = "";
    emailElement.classList.remove("js-error-input");
  }
  return isValid;
}

export function verifyRadioSelection() {
  const radio1 = document.getElementById("radio1");
  const radio2 = document.getElementById("radio2");
  let isValid = true;

  if (!radio1.checked && !radio2.checked) {
    document.querySelector(".js-option-error").innerHTML =
      "Please select a query type";

    isValid = false;
  } else {
    document.querySelector(".js-option-error").innerHTML = "";
  }
  return isValid;
}

export function checkboxVerification() {
  const checkboxElement = document.querySelector(".js-checkbox");
  let isValid = true;
  if (!checkboxElement.checked) {
    document.querySelector(".js-checkbox-error").innerHTML =
      "To submit this form, please consent to being contact";

    isValid = false;
  } else {
    document.querySelector(".js-checkbox-error").innerHTML = "";
  }
  return isValid;
}

export function showPopup() {
  document.querySelector(".popup").classList.remove("hidden");

  setTimeout(() => {
    document.querySelector(".popup").classList.add("hidden");
  }, 3000);
}

export function clearForm() {
  const form = document.getElementById("my-form");
  form.reset();

  const elementOne = document.querySelector(".js-option-1");
  const elementTwo = document.querySelector(".js-option-2");

  if (elementOne) {
    elementOne.classList.remove("option-1");
    elementOne.classList.add("options");
  }

  if (elementTwo) {
    elementTwo.classList.remove("option-2");
    elementTwo.classList.add("options");
  }
}
