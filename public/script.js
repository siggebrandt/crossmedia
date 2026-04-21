const messageView = document.getElementById("messageView");
const allMessagesView = document.getElementById("allMessagesView");
const unknownMessager = document.querySelector("#unknownMessager");
const timeUnknownMessanger = document.querySelector("#timeUnknownMessanger")

const headerBack = document.querySelector("#headerBack");

unknownMessager.addEventListener("click", function () {
  messageView.style.display = "block";
  allMessagesView.style.display = "none";
});

headerBack.addEventListener("click", function () {
  messageView.style.display = "none";
  allMessagesView.style.display = "block";
});

function timeOnMessage(messagerDiv) {
  const timeNow = new Date();
  const timeString = timeNow.toLocaleTimeString("sv-SE",
    {
      hour: "2-digit",
      minute: "2-digit"
    }
  );

  messagerDiv.textContent = timeString;
}

timeOnMessage(timeUnknownMessanger);
