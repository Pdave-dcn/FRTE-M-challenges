import {
  checkInputs,
  emailValidation,
  verifyRadioSelection,
  checkboxVerification,
  showPopup,
  clearForm,
} from "./functions.js";

const radioButtonElement = document.querySelectorAll(".js-radio-option input");

radioButtonElement.forEach((option) => {
  option.addEventListener("click", (event) => {
    const value = event.target.value;

    if (value === "1") {
      document.querySelector(".js-option-1").classList.add("option-1");
      document.querySelector(".js-option-1").classList.remove("options");
    } else {
      document.querySelector(".js-option-1").classList.remove("option-1");
      document.querySelector(".js-option-1").classList.add("options");
    }

    if (value === "2") {
      document.querySelector(".js-option-2").classList.add("option-2");
      document.querySelector(".js-option-2").classList.remove("options");
    } else {
      document.querySelector(".js-option-2").classList.remove("option-2");
      document.querySelector(".js-option-2").classList.add("options");
    }
  });
});

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isInputValid = checkInputs();
  const isEmailValid = emailValidation();
  const isRadiovalid = verifyRadioSelection();
  const isCheckboxValid = checkboxVerification();

  if (isInputValid && isEmailValid && isRadiovalid && isCheckboxValid) {
    showPopup();
    clearForm();
  }
});
