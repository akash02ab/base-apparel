const email = document.getElementById("email-address");
const submitBtn = document.getElementById("submit-btn");
const errorIcon = document.getElementById("error-icon");
const errorMsg = document.getElementById("error");

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return String(email)
    .toLowerCase()
    .match(re) !== null;
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const isValid = validateEmail(email.value);
  if (isValid) {
    errorIcon.classList.add("d-none");
    errorMsg.classList.add("d-none");
  } else {
    errorIcon.classList.remove("d-none");
    errorMsg.classList.remove("d-none");
  }
  console.log(isValid);
});