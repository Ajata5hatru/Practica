const userInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("results");
const COLORGREEN = "#004d15";
const COLORRED = "#650000";

function palCheck(userInput) {
  let re = /[\W_]/g;
  let inputWithoutSymbols = userInput.toUpperCase().replace(re, "");
  let reversedInput = inputWithoutSymbols.split("").reverse().join("");
  return inputWithoutSymbols === reversedInput;
}

checkBtn.addEventListener("click", (e) => {
  if (userInput.value.length == 0) {
    changeBackgroundColor("");
    resultDiv.style.display = "none";
    resultDiv.innerText = alert("Please input a value");
    return;
  }
  resultDiv.style.display = "block";

  const isPalindrome = palCheck(userInput.value);

  resultDiv.innerText =
    isPalindrome == true
      ? `${userInput.value} is a palindrome`
      : `${userInput.value} is not a palindrome`;

  changeBackgroundColor(isPalindrome ? COLORGREEN : COLORRED);
});

function changeBackgroundColor(color) {
  document.body.style.background = color;
}
