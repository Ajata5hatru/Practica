const userInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("results");

function palCheck(userInput) {
  let re = /[\W_]/g;
  let inputWithoutSymbols = userInput.toUpperCase().replace(re, "");
  let reversedInput = inputWithoutSymbols.split("").reverse().join("");
  return inputWithoutSymbols === reversedInput;
}

checkBtn.addEventListener("click", (e) => {
  if (userInput.value.length == 0) {
    resultDiv.style.display = "none";
    resultDiv.innerText = alert("Please input a value");
    return;
  }
  resultDiv.style.display = "block";
  resultDiv.innerText =
    palCheck(userInput.value) == true
      ? `${userInput.value} is a palindrome`
      : `${userInput.value} is not a palindrome`;
});
