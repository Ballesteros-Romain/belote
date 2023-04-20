let numberE = document.querySelector(".numberE");
let numberN = document.querySelector(".numberN");
let resultE = document.querySelector(".resultEux");
let resultN = document.querySelector(".resultNous");
let valid = document.querySelector(".valid");

valid.addEventListener("click", validation);

function validation() {
  let valueE = parseInt(numberE.value) || 0;
  let valueN = parseInt(numberN.value) || 0;

  resultE.textContent = parseInt(resultE.textContent) + valueE;
  resultN.textContent = parseInt(resultN.textContent) + valueN;

  if (isNaN(parseInt(resultE.textContent))) {
    resultE.textContent = 0;
  }

  if (isNaN(parseInt(resultN.textContent))) {
    resultN.textContent = 0;
  }
  if (resultE.textContent >= 1000 || resultN.textContent >= 1000) {
    alert(
      "Vous avez atteint 1000 point, c'est gagné. Sauf si vous allez en 1500"
    );
  }
}
