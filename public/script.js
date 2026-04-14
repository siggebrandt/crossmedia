const messageView = document.getElementById("messageView");
const allMessagesView = document.getElementById("allMessagesView");
const messagePerson = document.querySelectorAll(".messagePerson");

const headerBack = document.querySelector("#headerBack");

messagePerson.forEach((person) => {
  person.addEventListener("click", function () {
    messageView.style.display = "block";
    allMessagesView.style.display = "none";
  });
});

headerBack.addEventListener("click", function () {
  messageView.style.display = "none";
  allMessagesView.style.display = "block";
});
