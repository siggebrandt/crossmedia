// SELECTORS
const startView = document.getElementById("startView");
const loreView = document.getElementById("loreView");
const messageView = document.getElementById("messageView");
const allMessagesView = document.getElementById("allMessagesView");

const playButton = document.getElementById("playButton");
const playIconLore = document.getElementById("playIconLore");

const messagesAnna = document.querySelector("#messagesAnna");
const messagesBodil = document.querySelector("#messagesBodil");

const timeAnnaMessanger = document.querySelector("#timeAnnaMessanger");

const headerBack = document.querySelector("#headerBack");

const selectMessageBox = document.getElementById("selectMessageBox");
const selectMessageOne = document.getElementById("selectMessageOne");
const selectMessageTwo = document.getElementById("selectMessageTwo");
const selectMessageBoxSend = document.getElementById("selectMessageBoxSend");

// PLAY BUTTONS
playButton.addEventListener("click", function () {
  startView.style.display = "none";
  loreView.style.display = "flex";
});

playIconLore.addEventListener("click", function () {
  loreView.style.display = "none";
  allMessagesView.style.display = "flex";
  StartGame();
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
timeOnMessage(timeAnnaMessanger);

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

function NewMessage(userSender, messageID) {
  const chatWindow = document.querySelector("#chatWindow");
  const message = document.createElement("span");

  const user = messageData.find((u) => u.name === userSender);
  const foundMessage = user.messages.find((m) => m.id === messageID);

  message.classList.add(userSender === "player" ? "chatMe" : "chatThey");

  message.textContent = foundMessage.text;
  chatWindow.appendChild(message);
  message.scrollIntoView({ behavior: "smooth", block: "end" });
  // messagebox
  UpdateMessageText(userSender, foundMessage.text);
  if (userSender == "anna") {
    timeOnMessage(timeAnnaMessanger);
  } else if (userSender == "bodil") {
    timeOnMessage(timeBodilMessanger);
  }
}

function UpdateMessageText(userSender, message) {
  if (userSender == "player") return;
  else if (userSender == "anna") {
    document.querySelector("div#messagesAnna p.messageText").textContent =
      message;
  } else if (userSender == "bodil") {
    document.querySelector("div#messagesBodil p.messageText").textContent =
      message;
  }
}

function UserSendMessage(messages) {
  const messageArray = Array.isArray(messages) ? messages : [messages];
  const container = document.getElementById("selectMessageBox");

  container.innerHTML = "";

  messageArray.forEach((message, index) => {
    const selectMessageBox = document.createElement("div");

    if (messageArray.length === 1) {
      selectMessageBox.classList.add("oneMessageOption");
    }

    selectMessageBox.id = `selectMessage${index + 1}`;

    const p = document.createElement("p");
    p.textContent = message.text;

    selectMessageBox.appendChild(p);
    container.appendChild(selectMessageBox);
  });
}

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
      input.setAttribute("minlength", "1");
      input.setAttribute("maxlength", "1");
      input.classList.add("codeInput");
      input.addEventListener("input", () => {
        if (input.value.length === 1) {
          const currentIndex = codeInputs.indexOf(input);
          const nextInput = codeInputs[currentIndex + 1];
          if (nextInput) nextInput.focus();
        }
      });
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
}

selectMessageOne.addEventListener("click", function () {
  addCodeInputToMessageBox(codes[0], codes[0].length);
});

selectMessageBoxSend.addEventListener("click", function () {
  checkCode(codes[0]);
});
