const contactForm = document.getElementById("contact-form");

const formValidMsg = document.getElementById("form-valid-msg");

contactForm.addEventListener("submit", (e) => {

  e.preventDefault();

  formValidMsg.style.display = "block";
  
});
