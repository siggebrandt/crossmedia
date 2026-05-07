const startView = document.getElementById("startView");
const messageView = document.getElementById("messageView");
const allMessagesView = document.getElementById("allMessagesView");

const playButton = document.getElementById("playButton");

const messagesAnna = document.querySelector("#messagesAnna");
const messagesBodil = document.querySelector("#messagesBodil");

const timeUnknownMessanger = document.querySelector("#timeUnknownMessanger");

const headerBack = document.querySelector("#headerBack");

const selectMessageBox = document.getElementById("selectMessageBox");
const selectMessageOne = document.getElementById("selectMessageOne");
const selectMessageTwo = document.getElementById("selectMessageTwo");

playButton.addEventListener("click", function () {
  startView.style.display = "none";
  allMessagesView.style.display = "block";
});

messagesAnna.addEventListener("click", function () {
  messageView.style.display = "block";
  allMessagesView.style.display = "none";
});

headerBack.addEventListener("click", function () {
  messageView.style.display = "none";
  allMessagesView.style.display = "block";
});

function TimerToNextMessage(minutesToWait, user, messageID) {
  const startTime = new Date();
  setTimeout(
    () => {
      const ms = Date.now() - startTime;
      NewMessage(user, messageID);

      console.log(`seconds elapsed = ${Math.floor(ms / 1000)}`);
      // x minuter
    },
    minutesToWait * 60 /* minutes */ * 1000,
  );
}
TimerToNextMessage(1, "anna", 6);

function timeOnMessage(messagerDiv) {
  const timeNow = new Date();
  const timeString = timeNow.toLocaleTimeString("sv-SE", {
    hour: "2-digit",
    minute: "2-digit",
  });

  messagerDiv.textContent = timeString;
}
timeOnMessage(timeUnknownMessanger);

function NewMessage(userSender, messageID) {
  const chatWindow = document.querySelector("#chatWindow");
  const message = document.createElement("span");

  const user = messageData.find((u) => u.name === userSender);
  console.log(user);
  const foundMessage = user.messages.find((m) => m.id === messageID);

  message.classList.add(userSender === "player" ? "chatMe" : "chatThey");
  message.textContent = foundMessage.text;
  chatWindow.appendChild(message);
}
NewMessage("anna", 1); // anna meddelande 1
NewMessage("player", 1); // player meddelande 1

function addCodeInputToMessageBox(amount) {
  selectMessageBox.innerHTML = "";

  for (let i = 0; i < amount; i++) {
    const input = document.createElement("input");
    input.classList.add("codeInput");
    selectMessageBox.append(input);
  }
}

selectMessageOne.addEventListener("click", function () {
  addCodeInputToMessageBox(6);
});
