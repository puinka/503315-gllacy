var contact = document.querySelector(".contact-link");

var popup = document.querySelector(".modal-contact");

var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var contactName = popup.querySelector("[name=contact-name]");
var contactEmail = popup.querySelector("[name=contact-email]");

var storage = localStorage.getItem("contactName");

contact.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
        contactName.value = storage;
        contactEmail.focus();
      } else {
        contactName.focus();
      }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!contactName.value || !contactEmail.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      localStorage.setItem("contactName", contactName.value);
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });
