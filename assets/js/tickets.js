document.addEventListener("DOMContentLoaded", () => {
  const bookingModalEl = document.getElementById("bookingModal");
  const confirmModalEl = document.getElementById("confirmModal");
  const loginRequiredModalEl = document.getElementById("loginRequiredModal");

  const bookingModal = new bootstrap.Modal(bookingModalEl);
  const confirmModal = new bootstrap.Modal(confirmModalEl);
  const loginRequiredModal = new bootstrap.Modal(loginRequiredModalEl);

  const form = document.getElementById("bookingForm");
  const ticketInput = document.getElementById("ticketType");

  if (localStorage.getItem("autoOpenBooking") === "yes") {
    localStorage.removeItem("autoOpenBooking");

    const savedTicket = localStorage.getItem("ticketType");
    if (savedTicket) {
      ticketInput.value = savedTicket;
    }

    bookingModal.show();
  }

  document.querySelectorAll(".book-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      localStorage.setItem("ticketType", btn.dataset.ticket);
      loginRequiredModal.show();
    });
  });

  const goCreateBtn = document.getElementById("goCreateAccount");
  if (goCreateBtn) {
    goCreateBtn.addEventListener("click", () => {
      localStorage.setItem("autoOpenBooking", "yes");
      window.location.href = "account.html";
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();

    const name = document.getElementById("fullName");
    const email = document.getElementById("email");
    const address = document.getElementById("address");
    const visitor = document.getElementById("visitorType");
    const tickets = document.getElementById("tickets");
    const card = document.getElementById("cardNumber");
    const expiry = document.getElementById("expiry");
    const cvv = document.getElementById("cvv");

    let valid = true;

    const nameReg = /^[A-Za-z\s]{3,}$/;
    const emailReg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const cardReg = /^[0-9]{16}$/;
    const expiryReg = /^\d{1,2}\/\d{1,2}$/;
    const cvvReg = /^[0-9]{3}$/;

    if (!nameReg.test(name.value)) {
      showError(name, "Enter valid name");
      valid = false;
    }
    if (!emailReg.test(email.value)) {
      showError(email, "Enter valid email");
      valid = false;
    }
    if (address.value.trim().length < 5) {
      showError(address, "Enter valid address");
      valid = false;
    }
    if (visitor.value === "") {
      showError(visitor, "Select visitor type");
      valid = false;
    }
    if (tickets.value < 1) {
      showError(tickets, "Min 1 ticket");
      valid = false;
    }
    if (!cardReg.test(card.value)) {
      showError(card, "16-digit card only");
      valid = false;
    }
    if (!expiryReg.test(expiry.value)) {
      showError(expiry, "Format: MM/YY");
      valid = false;
    }
    if (!cvvReg.test(cvv.value)) {
      showError(cvv, "CVV must be 3 digits");
      valid = false;
    }

    if (!valid) return;

    const prices = {
      "Weekday Pass": 25,
      "Weekend Pass": 30,
      "VIP Pass": 50,
    };

    const price = prices[ticketInput.value] || 25;
    const total = price * Number(tickets.value);

    document.getElementById("confirmName").textContent = name.value;
    document.getElementById("confirmEmail").textContent = email.value;
    document.getElementById("confirmAddress").textContent = address.value;
    document.getElementById("confirmType").textContent = ticketInput.value;
    document.getElementById("confirmVisitor").textContent = visitor.value;
    document.getElementById("confirmTickets").textContent = tickets.value;
    document.getElementById("confirmTotal").textContent = "$" + total;

    localStorage.removeItem("autoOpenBooking");
    localStorage.removeItem("ticketType");

    bookingModal.hide();
    confirmModal.show();
    form.reset();
  });

  function showError(input, msg) {
    const err = document.createElement("div");
    err.className = "error-msg text-danger small";
    err.textContent = msg;
    input.parentElement.appendChild(err);
  }

  function clearErrors() {
    document.querySelectorAll(".error-msg").forEach((e) => e.remove());
  }

});
