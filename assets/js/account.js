document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("createAccountForm");
  const phoneInput = document.getElementById("phone");
  const passwordInput = document.getElementById("password");
  const confirmPassInput = document.getElementById("confirmPassword");

  const successModal = new bootstrap.Modal(document.getElementById("accountSuccessModal"));

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;

    const fullName = document.getElementById("fullName");
    if (fullName.value.trim().length < 3) {
          fullName.classList.add("is-invalid");
          isValid = false;
    } else fullName.classList.remove("is-invalid");

    const email = document.getElementById("email");
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value.trim())) {
          email.classList.add("is-invalid");
          isValid = false;
    } else email.classList.remove("is-invalid");

    const phonePattern = /^\d{11}$/;
    if (!phonePattern.test(phoneInput.value.trim())) {
          phoneInput.classList.add("is-invalid");
          isValid = false;
    } else phoneInput.classList.remove("is-invalid");

    if (passwordInput.value.length < 6) {
          passwordInput.classList.add("is-invalid");
          isValid = false;
    } else passwordInput.classList.remove("is-invalid");

    if (confirmPassInput.value !== passwordInput.value) {
          confirmPassInput.classList.add("is-invalid");
          isValid = false;
    } else confirmPassInput.classList.remove("is-invalid");

    if (!isValid) return;

    localStorage.setItem("accountCreated", "true");

    successModal.show();

    setTimeout(() => {
      window.location.href = "tickets.html";
    }, 2000);
  });
});