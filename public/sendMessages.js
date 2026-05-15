async function StartGame() {
  // Anna skickar första meddelanden
  NewMessage("anna", 0);
  await sleep(1500);
  NewMessage("anna", 1);
  await sleep(1500);

  // Spelaren väljer ja eller nej
  UserSendMessage([GetUserMessage(1), GetUserMessage(2)]);
  let choice = await waitForPlayerChoice();
  eraseMessageBox("");

  // Om spelaren svarar nej blir Anna arg tills de svarar ja
  while (choice === "selectMessage2") {
    NewMessage("player", 2);
    await sleep(1500);
    NewMessage("anna", 22);
    await sleep(1500);
    UserSendMessage(GetUserMessage(1));
    choice = await waitForPlayerChoice();
  }

  // Spelaren svarade ja
  NewMessage("player", 1);
  await sleep(1500);
  NewMessage("anna", 2);
  await sleep(1500);
  NewMessage("anna", 4);
  await sleep(1500);

  // Kodinmatning 1: OR:7090
  showCodeInput(codes[0]);
  await waitForCorrectCode(codes[0]);
  eraseMessageBox("inväntar svar från anna");

  await sleep(800);
  NewMessage("anna", 5);
  await sleep(800);
  NewMessage("anna", 6);
  await sleep(800);
  NewMessage("anna", 7);
  await sleep(800);
  NewMessage("anna", 8);
  await sleep(1500);
  eraseMessageBox("inväntar svar från anna");

  // Vänta 20 minuter, sedan kodinmatning 2: 2006
  await waitUntil(Date.now() + 1 * 60 * 1000); // 10 min
  console.log("1 minut");
  showCodeInput(codes[1]);
  await waitForCorrectCode(codes[1]);
  eraseMessageBox("inväntar svar från anna");

  await sleep(1500);
  NewMessage("anna", 9);
  await sleep(1500);

  // Kodinmatning 3: 418
  showCodeInput(codes[2]);
  await waitForCorrectCode(codes[2]);
  eraseMessageBox("");

  // Slutval
  await sleep(5500);
  window.location.replace("ending.html");
}

function GetUserMessage(id) {
  const character = messageData.find((p) => p.name === "player");
  return character.messages.find((m) => m.id === id);
}

function eraseMessageBox(message) {
  document.querySelector("#selectMessageBox").innerHTML = `<p>${message}</p>`;
}

// RESTART
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function waitUntil(targetTime) {
  return new Promise((resolve) => {
    function check() {
      if (Date.now() >= targetTime) resolve();
      else setTimeout(check, 1000);
    }
    document.addEventListener("visibilitychange", function handler() {
      if (document.visibilityState === "visible" && Date.now() >= targetTime) {
        document.removeEventListener("visibilitychange", handler);
        resolve();
      }
    });
    check();
  });
}

function waitForPlayerChoice() {
  return new Promise((resolve) => {
    const container = document.getElementById("selectMessageBox");
    function handler(e) {
      const clicked = e.target.closest("[id^='selectMessage']");
      if (clicked) {
        container.removeEventListener("click", handler);
        resolve(clicked.id);
      }
    }
    container.addEventListener("click", handler);
  });
}

let codeInputs = [];

function checkCode(code) {
  const correctCode = code.replace(":", "").toUpperCase();
  const enteredCode = codeInputs
    .map((input) => input.value)
    .join("")
    .toUpperCase();

  return enteredCode === correctCode;
}

function waitForCorrectCode(code) {
  return new Promise((resolve) => {
    const sendBtn = document.getElementById("selectMessageBoxSend");

    function handler() {
      const enteredCode = codeInputs.map((input) => input.value).join("");

      if (checkCode(code)) {
        // Rätt kod — skicka som meddelande och fortsätt
        NewMessage("player", "custom", enteredCode.toUpperCase());
        sendBtn.removeEventListener("click", handler);
        resolve();
      } else {
        // Fel kod — skicka som meddelande och Anna svarar
        NewMessage("player", "custom", enteredCode);
        setTimeout(() => {
          NewMessage("anna", "custom", "Det stämmer inte, försök igen!");
          // Återställ inputfälten
          codeInputs.forEach((input) => (input.value = ""));
          if (codeInputs[0]) codeInputs[0].focus();
        }, 800);
      }
    }

    sendBtn.addEventListener("click", handler);
  });
}

function showCodeInput(code) {
  const hasColon = code.includes(":");
  const lengthWithoutColon = code.replace(":", "").length;
  addCodeInputToMessageBox(
    code,
    hasColon ? lengthWithoutColon + 1 : lengthWithoutColon,
  );
}

function addCodeInputToMessageBox(code, length) {
  selectMessageBox.innerHTML = "";
  codeInputs = [];

  const colonIndex = code.indexOf(":");

  for (let i = 0; i < length; i++) {
    if (i === colonIndex && colonIndex !== -1) {
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

function GetUserMessage(id) {
  const character = messageData.find((p) => p.name === "player");
  return character.messages.find((m) => m.id === id);
}

function UserSendMessage(messages) {
  const messageArray = Array.isArray(messages) ? messages : [messages];
  const container = document.getElementById("selectMessageBox");

  container.innerHTML = "";

  messageArray.forEach((message, index) => {
    const selectMessageBox = document.createElement("div");

    if (messageArray.length === 1) {
      selectMessageBox.classList.add("oneMessageButton");
    }

    selectMessageBox.id = `selectMessage${index + 1}`;

    const p = document.createElement("p");
    p.textContent = message.text;

    selectMessageBox.appendChild(p);
    container.appendChild(selectMessageBox);
  });
}
