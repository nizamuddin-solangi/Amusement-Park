const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email"); 
const modal = new bootstrap.Modal(document.getElementById("successModal"));

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameRegex = /^[A-Za-z\s]{3,}$/;
  const phoneRegex = /^\d{11}$/;
  const emailRegex = /^(?!\d+$)[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  document.querySelectorAll(".invalid-feedback").forEach((el) => el.remove());
  let valid = true;

  const showError = (input, message) => {
    input.classList.add("is-invalid");
    const error = document.createElement("div");
    error.className = "invalid-feedback d-block";
    error.textContent = message;
    input.parentElement.appendChild(error);
  };

  const clearError = (input) => input.classList.remove("is-invalid");

  if (!nameRegex.test(nameInput.value.trim())) {
    showError(nameInput, "Name must be at least 3 letters (no numbers).");
    valid = false;
  } else {
    clearError(nameInput);
  }

  if (!phoneRegex.test(phoneInput.value.trim())) {
    showError(phoneInput, "Phone number must be exactly 11 digits.");
    valid = false;
  } else {
    clearError(phoneInput);
  }

  if (!emailRegex.test(emailInput.value.trim())) {
    showError(emailInput, "Enter a valid email (must include letters, cannot be only numbers).");
    valid = false;
  } else {
    clearError(emailInput);
  }

  if (valid) {
    modal.show();
    setTimeout(() => form.reset(), 300);
  }
});
