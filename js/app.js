let diceBox = document.getElementById("dice-box");
let quantDicesInput = document.getElementById("dice-quantity");
let diceQuantity = 1;

window.addEventListener("DOMContentLoaded", () => {
  for (let i = diceQuantity; i > 0; i--) {
    let dice = document.createElement("div");
    dice.className = "dice"
    diceBox.appendChild(dice);
  }
});

/*window.addEventListener("load", () => {
  randomDiceFace();
});

const dice = document.getElementById("dice");

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", (event) => {
  lancar(event);
});

window.addEventListener("keypress", (event) => {
  if (event.key == "Enter" || event.key == " ") {
    submitButton.click();
  }
});
function lancar(event) {
  event.target.disabled = true;
  dicePlayAudio();
  let cont = 0;
  const loopAnimation = setInterval(() => {
    cont++;
    randomDiceFace();

    if (cont % 2 == 0) {
      dice.style.scale = 1;
    } else {
      dice.style.scale = 0.95;
    }

    if (cont > 7) {
      clearInterval(loopAnimation);
    }
  }, 100);
  setTimeout(() => {
    event.target.disabled = false;
  }, 800);
}

function randomDiceFace() {
  const randomNumber = Math.floor(Math.random() * 6 + 1);
  const randomClass = `bg0${randomNumber}`;
  dice.className = randomClass;
}

let diceAudio = new Audio("audio/dice-142528.mp3");

function dicePlayAudio() {
  diceAudio.currentTime = 0;
  diceAudio.play();
}*/
