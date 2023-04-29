let numberE = document.querySelector(".numberE");
let numberN = document.querySelector(".numberN");
let resultE = document.querySelector(".resultEux");
let resultN = document.querySelector(".resultNous");
let valid = document.querySelector(".valid");
let sound = new Audio("117201833.mp3");
valid.addEventListener("click", validationAndReset);
numberE.addEventListener("input", updateNumberN);
numberN.addEventListener("input", updateNumberE);

function validationAndReset() {
  let valueE = parseInt(numberE.value) || 0;
  let valueN = parseInt(numberN.value) || 0;

  if (valueE > 162 || valueN > 162) {
    alert("Les nombres doivent être inférieurs ou égaux à 162.");
    zero();
    return; // arrêter la fonction si les nombres sont invalides
  }

  if (isNaN(parseInt(resultE.textContent))) {
    resultE.textContent = 0;
  }

  if (isNaN(parseInt(resultN.textContent))) {
    resultN.textContent = 0;
  }

  resultE.textContent = parseInt(resultE.textContent) + valueE;
  resultN.textContent = parseInt(resultN.textContent) + valueN;

  if (resultE.textContent >= 1000 || resultN.textContent >= 1000) {
    sound.play();
    alert(
      "Vous avez atteint 1000 point, c'est gagné. Sauf si vous allez en 1500"
    );
  }

  checked();
  capot();
  zero();
  uncheckCheckbox();
}

function updateNumberN() {
  let valueE = parseInt(numberE.value);
  if (!isNaN(valueE)) {
    numberN.value = (162 - valueE) % 162;
  }
}

function updateNumberE() {
  let valueN = parseInt(numberN.value);
  if (!isNaN(valueN)) {
    numberE.value = (162 - valueN) % 162;
  }
}

function zero() {
  numberE.value = "";
  numberN.value = "";
}

function checked() {
  const check1 = document.querySelector("#check1");
  const check2 = document.querySelector("#check2");
  if (check1.checked) {
    resultE.textContent = parseInt(resultE.textContent) + 20;
  } else if (check2.checked) {
    resultN.textContent = parseInt(resultN.textContent) + 20;
  }
}
function uncheckCheckbox() {
  const check1 = document.querySelector("#check1");
  const check2 = document.querySelector("#check2");
  check1.checked = false;
  check2.checked = false;
  const capot1 = document.querySelector("#capot1");
  const capot2 = document.querySelector("#capot2");
  capot1.checked = false;
  capot2.checked = false;
}
function capot() {
  const capot1 = document.querySelector("#capot1");
  const capot2 = document.querySelector("#capot2");
  if (capot1.checked) {
    resultE.textContent = parseInt(resultE.textContent) + 250;
  } else if (capot2.checked) {
    resultN.textContent = parseInt(resultN.textContent) + 250;
  }
}
