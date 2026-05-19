const jAndTContainer = document.getElementById("jAndTContainer");
const choiceContainer = document.getElementById("choiceContainer");

const redButton = document.getElementById("redButton");
const greenButton = document.getElementById("greenButton");
const blueButton = document.getElementById("blueButton");

const toldAnnaContainer = document.getElementById("toldAnnaContainer");
const refusedAnnaContainer = document.getElementById("refusedAnnaContainer");
const toldJohannesContainer = document.getElementById("toldJohannesContainer");

const endView = document.getElementById("end");

setTimeout(() => {
    jAndTContainer.classList.remove("active");
}, 10000);

setTimeout(() => {
    choiceContainer.classList.add("active");
}, 11000)

redButton.addEventListener("click", function () {
    choiceContainer.style.display = "none"
    toldAnnaContainer.style.display = "flex";

    setTimeout(() => {
        toldAnnaContainer.style.display = "none"
    }, 10000);

    setTimeout(() => {
        endView.style.display = "flex"
    }, 5000)
})

greenButton.addEventListener("click", function () {
    choiceContainer.style.display = "none";
    refusedAnnaContainer.style.display = "flex";

    setTimeout(() => {
        refusedAnnaContainer.style.display = "none"
    }, 10000);

    setTimeout(() => {
        endView.style.display = "flex"
    }, 5000)
})

blueButton.addEventListener("click", function () {
    choiceContainer.style.display = "none";
    toldJohannesContainer.style.display = "flex";

    setTimeout(() => {
        toldJohannesContainer.style.display = "none"
    }, 10000);

    setTimeout(() => {
        endView.style.display = "flex"
    }, 5000)
})