let pValue = document.getElementById("pValue");
let perimetrBtn = document.getElementById("perimetr");
let sValue = document.getElementById("sValue");
let saheBtn = document.getElementById("sahe");
let resultPer = document.getElementById("resultPer");
let resultSahe = document.getElementById("resultSahe");

perimetrBtn.addEventListener("click", () => {
  let perTap = (+sValue.value + +pValue.value) * 2;
  resultPer.innerHTML = `Duzbucaqli Perimetri: ${perTap}`;
  sValue.value = "";
  pValue.value = "";
});

saheBtn.addEventListener("click", () => {
  let saheTap = +sValue.value * +pValue.value;
  resultSahe.innerHTML = `Duzbucaqli sahesi: ${saheTap}`;
  sValue.value = "";
  pValue.value = "";
});
