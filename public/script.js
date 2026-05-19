const body = document.querySelector("body");

const startView = document.getElementById("startView");
const loreView = document.getElementById("loreView");

const messageViewAnna = document.querySelector(
  "div#messageView.messageViewAnna",
);
const messageViewBodil = document.querySelector(
  "div#messageView.messageViewBodil",
);
const messageView = document.getElementById("messageView");

const allMessagesView = document.getElementById("allMessagesView");

const playButton = document.getElementById("playButton");
const playIconLore = document.getElementById("playIconLore");

const messagesAnna = document.querySelector("#messagesAnna");
const messagesBodil = document.querySelector("#messagesBodil");

const timeAnnaMessanger = document.querySelector("#timeAnnaMessanger");

const headerBackAnna = document.querySelector(
  ".messageViewAnna header #headerBack",
);
const headerBackBodil = document.querySelector(
  ".messageViewBodil header #headerBack",
);

const selectMessageBox = document.getElementById("selectMessageBox");
const selectMessageBoxSend = document.getElementById("selectMessageBoxSend");

// PLAY BUTTONS
playButton.addEventListener("click", function () {
  startView.classList.remove("active");

  setTimeout(() => {
    loreView.classList.add("active");
  }, 800);

  setTimeout(() => {
    playIconLore.style.backgroundImage = "url(icons/playicon.svg)";
    playIconLore.classList.add("playIconLorePressable");
    playIconLore.addEventListener("click", function () {
      body.classList.remove("bodyJohannes");
      loreView.style.display = "none";
      allMessagesView.style.display = "flex";
      StartGame();
    });
  }, 8000);
});

messagesAnna.addEventListener("click", function () {
  messageViewAnna.style.display = "block";
  allMessagesView.style.display = "none";
});

messagesBodil.addEventListener("click", function () {
  messageViewBodil.style.display = "block";
  allMessagesView.style.display = "none";
});

headerBackAnna.addEventListener("click", function () {
  messageView.style.display = "none";
  allMessagesView.style.display = "block";
});
headerBackBodil.addEventListener("click", function () {
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

/* function TimerToNextMessage(minutesToWait, user, messageID) {
  const startTime = new Date();
  setTimeout(
    () => {
      const ms = Date.now() - startTime;
      NewMessage(user, messageID);

      console.log(`seconds elapsed = ${Math.floor(ms / 1000)}`);
      // x minuter
    },
    minutesToWait * 60 * 1000,
  );
} */

function NewMessage(userSender, messageID, customText = null) {
  const chatWindow = document.querySelector("#chatWindow");
  const message = document.createElement("span");

  let text;

  if (customText !== null) {
    text = customText;
  } else {
    const user = messageData.find((u) => u.name === userSender);
    const foundMessage = user.messages.find((m) => m.id === messageID);
    text = foundMessage.text;
  }

  message.classList.add(userSender === "player" ? "chatMe" : "chatThey");
  message.textContent = text;
  chatWindow.appendChild(message);
  message.scrollIntoView({ behavior: "smooth", block: "end" });

  UpdateMessageText(userSender, text);

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
/* let codeInputs = [];

function checkCode(code) {
  const correctCode = code.replace(":", "").toUpperCase();
  const enteredCode = codeInputs
    .map((input) => input.value)
    .join("")
    .toUpperCase();

  return enteredCode === correctCode;
}
 */
