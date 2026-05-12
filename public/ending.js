const jAndTContainer = document.getElementById("jAndTContainer");
const choiceContainer = document.getElementById("choiceContainer");

setTimeout(() => {
    jAndTContainer.classList.remove("active");
    choiceContainer.classList.add("active");
}, 10000);