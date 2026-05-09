const links = document.querySelectorAll("nav a");

links.forEach(link => {

  link.addEventListener("click", function(e) {

    e.preventDefault();

    const targetId = this.getAttribute("href");

    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth"
    });

  });

});
// Contact Form Success Popup

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  // Create popup

  const popup = document.createElement("div");

  popup.innerText = "✅ Message sent successfully!";

  popup.classList.add("success-popup");

  document.body.appendChild(popup);

  // Remove popup after 3 seconds

  setTimeout(() => {

    popup.remove();

  }, 3000);

  // Reset form

  form.reset();

});