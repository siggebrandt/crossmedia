const jAndTContainer = document.getElementById("jAndTContainer");
const choiceContainer = document.getElementById("choiceContainer");

setTimeout(() => {
    jAndTContainer.classList.remove("active");
}, 10000);

setTimeout(() => {
    choiceContainer.classList.add("active");
}, 11000)