const diceBox = document.getElementById("dice-box");
const quantDicesInput = document.getElementById("dice-quantity");
let diceQuantity = 1;
const submitButton = document.getElementById("submit");
const quantLimit = 27;
const diceAudio = new Audio("audio/dice-142528.mp3");

window.addEventListener("DOMContentLoaded", () => {
  changeDiceQuant(diceQuantity);
  quantDicesInput.value = diceQuantity;
});

window.addEventListener("resize", () => {
  if (diceQuantity > 1) {
    fixDiceBox(diceQuantity);
  }
});

submitButton.addEventListener("click", (event) => {
  lancar();
});

quantDicesInput.addEventListener("change", () => {
  diceQuantity = quantDicesInput.value;
  changeDiceQuant(diceQuantity);
});

function changeDiceQuant(dq) {
  if (dq >= 1 && dq <= quantLimit) {
    diceBox.innerHTML = "";
    for (let i = dq; i > 0; i--) {
      let dice = document.createElement("div");
      dice.className = "dice";
      diceBox.appendChild(dice);
      dice.classList.add(`bg0${Math.floor(Math.random() * 6) + 1}`);
    }

    if (dq > 1) {
      submitButton.innerText = "Lançar os Dados!";
      submitButton.disabled = false;
      fixDiceBox(diceQuantity);
    } else if (dq == 1) {
      submitButton.innerText = "Lançar o Dado!";
      submitButton.disabled = false;
      diceBox.style.cssText = "";
    } else {
      submitButton.disabled = true;
    }
  } else if (dq < 1) {
    quantDicesInput.value = 1;
    changeDiceQuant(1);
  } else if (dq > quantLimit) {
    quantDicesInput.value = quantLimit;
  }
}
function fixDiceBox(dq) {
  let scaleFactor = dq ** 2 / ((dq ** 2 - dq) * 2);
  diceBox.style.cssText = `scale: ${scaleFactor};
     width: ${parseFloat(window.getComputedStyle(document.body).width) * (1 / scaleFactor)}px`;
}
function dicePlayAudio() {
  diceAudio.currentTime = 0;
  diceAudio.play();
}
function lancar(event) {
  event.target.disabled = true;
  dicePlayAudio();
}

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
