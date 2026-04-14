const messageView = document.getElementById("messageView");
const allMessagesView = document.getElementById("allMessagesView");
const messagePerson = document.querySelectorAll(".messagePerson");

messagePerson.forEach((person) => {
  person.addEventListener("click", function () {
    messageView.style.display = "block";
    allMessagesView.style.display = "none";
  });
});
