const jAndTContainer = document.getElementById("jAndTContainer");
const choiceContainer = document.getElementById("choiceContainer");

const endArrowForward = document.getElementById("endArrowForward");
const endArrowBack = document.getElementById("endArrowBack")

const redButton = document.getElementById("redButton");
const greenButton = document.getElementById("greenButton");
const blueButton = document.getElementById("blueButton");

const toldAnnaContainer = document.getElementById("toldAnnaContainer");
const refusedAnnaContainer = document.getElementById("refusedAnnaContainer");
const toldJohannesContainer = document.getElementById("toldJohannesContainer");

const endView = document.getElementById("end");

endArrowForward.addEventListener("click", function () {
    jAndTContainer.style.display = "none";
    choiceContainer.style.display = "flex";
})

/* endArrowBack.addEventListener("click", function () {
    jAndTContainer.style.display = "flex";
    choiceContainer.style.display = "none";
    endArrowBack.style.display = "none";
}) */

/* setTimeout(() => {
    jAndTContainer.classList.remove("active");
}, 9000);

setTimeout(() => {
    choiceContainer.classList.add("active");
}, 9000) */


const scriptURL = "https://script.google.com/macros/s/AKfycbyoqFztAwCZSI3_Zcqy9S4ZUQH2I9hiDDpc59yyOolb9P92JsiSQtL5ouwa1FyPLaU4/exec";

redButton.addEventListener("click", async function () {

    choiceContainer.style.display = "none";
    toldAnnaContainer.style.display = "flex";

    setTimeout(() => {
        toldAnnaContainer.style.display = "none";
    }, 10000);

    setTimeout(() => {
        endView.style.display = "flex";
    }, 5000);

    const data = {
        choice: redButton.textContent
    };

    try {
        await fetch(scriptURL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        console.log("Skickat!");

    } catch (error) {
        console.error(error);
    }
});

greenButton.addEventListener("click", async function () {
    choiceContainer.style.display = "none";
    refusedAnnaContainer.style.display = "flex";

    setTimeout(() => {
        refusedAnnaContainer.style.display = "none"
    }, 10000);

    setTimeout(() => {
        endView.style.display = "flex"
    }, 5000)

    
    const data = {
        choice: greenButton.textContent
    };

    try {
        await fetch(scriptURL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        console.log("Skickat!");

    } catch (error) {
        console.error(error);
    }
})

blueButton.addEventListener("click", async function () {
    choiceContainer.style.display = "none";
    toldJohannesContainer.style.display = "flex";

    setTimeout(() => {
        toldJohannesContainer.style.display = "none"
    }, 10000);

    setTimeout(() => {
        endView.style.display = "flex"
    }, 5000)


    const data = {
        choice: blueButton.textContent
    };

    try {
        await fetch(scriptURL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        console.log("Skickat!");

    } catch (error) {
        console.error(error);
    }
});