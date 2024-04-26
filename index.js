var ageDate = document.getElementById("Date");
var ageCalculatorBtn = document.getElementById("Btn");
var ageResult = document.getElementById("AgeResult");

ageCalculatorBtn.addEventListener("click", () => {
  var birthDate = new Date(ageDate.value);
  var currentDate = new Date();
  var ageInMilliseconds = currentDate - birthDate;
  var ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));
  ageResult.innerHTML = ageInYears;
});
