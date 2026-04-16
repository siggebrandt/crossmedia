const messageView = document.getElementById("messageView");
const allMessagesView = document.getElementById("allMessagesView");
const unknownNumber = document.querySelector("#unknownMessager");
const timeUnknown = document.querySelector("#timeUnknown");

const headerBack = document.querySelector("#headerBack");

unknownNumber.addEventListener("click", function () {
  messageView.style.display = "block";
  allMessagesView.style.display = "none";
});

headerBack.addEventListener("click", function () {
  messageView.style.display = "none";
  allMessagesView.style.display = "block";
});

function timeOnMessage(messagerDiv) {
  const timeNow = new Date();
  const timeString = timeNow.toLocaleTimeString();

  messagerDiv.textContent = timeString;
}

timeOnMessage(timeUnknown);