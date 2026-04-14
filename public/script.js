const messageView = document.getElementById("messageView");
const allMessagesView = document.getElementById("allMessagesView");
const unknownNumber = document.querySelector("#unknown");

const headerBack = document.querySelector("#headerBack");

unknownNumber.addEventListener("click", function () {
  messageView.style.display = "block";
  allMessagesView.style.display = "none";
});

headerBack.addEventListener("click", function () {
  messageView.style.display = "none";
  allMessagesView.style.display = "block";
});
