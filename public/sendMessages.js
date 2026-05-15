/* async function StartGame() {
  NewMessage("anna", 0);
  TimerToNextMessage(1, "anna", 22);

  await sleep(2000);

  UserSendMessage(GetPlayerMessage(1));
}

// Lyssna på när sidan blir aktiv igen
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    // Sidan är aktiv igen
  }
});

NewMessage("anna", 0);
TimerToNextMessage(1, "anna", 22);

UserSendMessage(GetUserMessage(1));

//UserSendMessage([GetUserMessage(2), GetUserMessage(4)]);

/**
 *
 *
 *
 */
/* -- Function -- 
function GetUserMessage(id) {
  const character = messageData.find((p) => p.name === "player");
  return character.messages.find((m) => m.id === id);
}*/

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

function waitForCorrectCode(code) {
  return new Promise((resolve) => {
    const sendBtn = document.getElementById("selectMessageBoxSend");

    function handler() {
      const enteredCode = codeInputs.map((input) => input.value).join("");

      if (checkCode(code)) {
        // Rätt kod — skicka som meddelande och fortsätt
        NewMessage("player", "custom", enteredCode);
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

async function StartGame() {
  // Anna skickar första meddelanden
  NewMessage("anna", 0);
  await sleep(1500);
  NewMessage("anna", 1);
  await sleep(1500);

  // Spelaren väljer ja eller nej
  UserSendMessage([GetUserMessage(1), GetUserMessage(2)]);
  let choice = await waitForPlayerChoice();

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

  await sleep(800);
  NewMessage("anna", 5);
  await sleep(800);
  NewMessage("anna", 6);
  await sleep(800);
  NewMessage("anna", 7);
  await sleep(800);
  NewMessage("anna", 8);
  await sleep(1500);
  document.querySelector("#selectMessageBox").innerHTML =
    `<p>inväntar svar från anna</p>`;

  // Vänta 20 minuter, sedan kodinmatning 2: 2006
  await waitUntil(Date.now() + 10 * 60 * 1000); // 10 min
  console.log("1 minut");
  showCodeInput(codes[1]);
  await waitForCorrectCode(codes[1]);

  await sleep(1500);
  NewMessage("anna", 9);
  await sleep(1500);

  // Kodinmatning 3: 418
  NewMessage("anna", 10);
  await sleep(1500);
  showCodeInput(codes[2]);
  await waitForCorrectCode(codes[2]);

  // Slutval
  await sleep(5500);
  window.location.replace("ending.html"); /* 
  UserSendMessage([GetUserMessage(4), GetUserMessage(5), GetUserMessage(6)]);
  const endChoice = await waitForPlayerChoice();

  if (endChoice === "selectMessage1") {
    NewMessage("player", 4);
    // TODO: visa tidningsuppslag — Johannes avslöjad
  } else if (endChoice === "selectMessage2") {
    NewMessage("player", 5);
    // TODO: visa tidningsuppslag — du blir ny chefredaktör
  } else if (endChoice === "selectMessage3") {
    NewMessage("player", 6);
    // TODO: visa tidningsuppslag — Johannes bryter tystnaden
  } */
}

function GetUserMessage(id) {
  const character = messageData.find((p) => p.name === "player");
  return character.messages.find((m) => m.id === id);
}
