const startView = document.getElementById("startView");
const loreView = document.getElementById("loreView");
const messageView = document.getElementById("messageView");
const allMessagesView = document.getElementById("allMessagesView");

const playButton = document.getElementById("playButton");
const playIconLore = document.getElementById("playIconLore")

const messagesAnna = document.querySelector("#messagesAnna");
const messagesBodil = document.querySelector("#messagesBodil");

const timeUnknownMessanger = document.querySelector("#timeUnknownMessanger");

const headerBack = document.querySelector("#headerBack");

const selectMessageBox = document.getElementById("selectMessageBox");
const selectMessageOne = document.getElementById("selectMessageOne");
const selectMessageTwo = document.getElementById("selectMessageTwo");
const selectMessageBoxSend = document.getElementById("selectMessageBoxSend");

playButton.addEventListener("click", function () {
  startView.style.display = "none";
  loreView.style.display = "flex";
});

playIconLore.addEventListener("click", function () {
  loreView.style.display = "none";
  allMessagesView.style.display = "flex";
});

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
timeOnMessage(timeUnknownMessanger);


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

function NewMessage(userSender, messageID) {
  const chatWindow = document.querySelector("#chatWindow");
  const message = document.createElement("span");

  const user = messageData.find((u) => u.name === userSender);
  const foundMessage = user.messages.find((m) => m.id === messageID);

  message.classList.add(userSender === "player" ? "chatMe" : "chatThey");
  message.textContent = foundMessage.text;
  chatWindow.appendChild(message);
}
NewMessage("anna", 1); // anna meddelande 1
NewMessage("player", 1); // player meddelande 1

let status = false;
let codeInputs = [];

function addCodeInputToMessageBox(code, length) {
  selectMessageBox.innerHTML = "";
  codeInputs = [];

  for (let i = 0; i < length; i++) {
    if (i == 2 && code[2] == ":") {
      const p = document.createElement("p");
      p.classList.add("colon");
      p.textContent = ":";
      selectMessageBox.append(p);

    } else {
      const input = document.createElement("input");
      input.classList.add("codeInput");
      selectMessageBox.append(input);
      codeInputs.push(input);
    }
  }
}

function checkCode(code) {
  let password = true;
  code = code.replace(":", "");

  for (let i = 0; i < codeInputs.length; i++) {
    if (codeInputs[i].value !== code[i].toLowerCase()) {
      password = false;
      break;
    }
  }

  console.log(password); /* ta bort sen */
  return password;
};



selectMessageOne.addEventListener("click", function () {
  addCodeInputToMessageBox(codes[0], codes[0].length);
})

selectMessageBoxSend.addEventListener("click", function () {
  checkCode(codes[0]);
})
