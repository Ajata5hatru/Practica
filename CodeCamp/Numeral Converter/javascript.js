const userInput = documet.getElementByID("number");
const convertBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");

convertBtn.addEventListener("click", (e) => {
  const inputWarning = () => {
    if (userInput.value.length === 0) {
      outputDiv.innerText = "Please enter a valid number.";
      outputDiv.style.display = "block";
      return;
    } else {
      outputDiv.innerText = "Please enter a number between 0 and 6333";
    }
  };
});
