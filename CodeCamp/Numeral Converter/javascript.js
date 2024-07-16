const userInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");

const toRoman = (num) => {
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";

  for (let i = 0; i < romanNumerals.length; i++) {
    const { value, symbol } = romanNumerals[i];

    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
};

convertBtn.addEventListener("click", (e) => {
  const num = parseInt(userInput.value);

  if (isNaN(num)) {
    outputDiv.innerText = "Por favor, ingresa un número válido.";
    outputDiv.style.color = "#974d4d";
    outputDiv.style.display = "block";
    return;
  }

  if (num < 1) {
    outputDiv.innerText = "Por favor, ingresa un número mayor o igual a 1.";
    outputDiv.style.color = "#974d4d";
    outputDiv.style.display = "block";
  } else if (num > 3999) {
    outputDiv.innerText = "Por favor, ingresa un número menor o igual a 3999.";
    outputDiv.style.color = "#974d4d";
    outputDiv.style.display = "block";
  } else {
    const convertedNum = toRoman(num);
    outputDiv.innerText = convertedNum;
    outputDiv.style.color = "";
    outputDiv.style.display = "block";
  }
});
