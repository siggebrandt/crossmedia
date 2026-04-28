const messages = [
  {
    name: "anna",
    messages: [
      {
        id: 1,
        text: "Jag har fått tips att Johannes Karlsson har något fuffens på gång...",
      },
      { id: 2, text: "hej" },
    ],
  },
  {
    name: "player",
    messages: [{ id: 1, text: "Ja" }],
  },
];

const startView = document.getElementById("startView");
const messageView = document.getElementById("messageView");
const allMessagesView = document.getElementById("allMessagesView");

const playButton = document.getElementById("playButton");

const messagesAnna = document.querySelector("#messagesAnna");
const messagesBodil = document.querySelector("#messagesBodil");

const timeUnknownMessanger = document.querySelector("#timeUnknownMessanger");

const headerBack = document.querySelector("#headerBack");

playButton.addEventListener("click", function () {
  startView.style.display = "none"
  allMessagesView.style.display = "block"
})

messagesAnna.addEventListener("click", function () {
  messageView.style.display = "block";
  allMessagesView.style.display = "none";
});

headerBack.addEventListener("click", function () {
  messageView.style.display = "none";
  allMessagesView.style.display = "block";
});

function timeOnMessage(messagerDiv) {
  const timeNow = new Date();
  const timeString = timeNow.toLocaleTimeString("sv-SE", {
    hour: "2-digit",
    minute: "2-digit",
  });

  messagerDiv.textContent = timeString;
}

NewMessage("anna", 1); // anna meddelande 1
NewMessage("player", 1); // player meddelande 1

timeOnMessage(timeUnknownMessanger);

function NewMessage(userSender, messageID) {
  const chatWindow = document.querySelector("#chatWindow");
  const message = document.createElement("span");

  const user = messages.find((u) => u.name === userSender);
  const foundMessage = user.messages.find((m) => m.id === messageID);

  message.classList.add(userSender === "player" ? "chatMe" : "chatThey");
  message.textContent = foundMessage.text;
  chatWindow.appendChild(message);
}
