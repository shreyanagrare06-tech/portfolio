document.getElementById("contact-form")
.addEventListener("submit", function(event) {

  event.preventDefault();

  emailjs.sendForm(
    "service_hlqsotw",
    "template_4cjtp4v",
    this
  )
  .then(function() {

    emailjs.send(
      "service_hlqsotw",
      "template_oi8mvbs",
      {
        user_name: document.querySelector('[name="user_name"]').value,
        user_email: document.querySelector('[name="user_email"]').value
      }
    );

    alert("Message sent successfully!");

    document.getElementById("contact-form").reset();

  }, function(error) {

    alert("Failed to send message");

    console.log(error);

  });

});