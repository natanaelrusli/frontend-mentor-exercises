const cardHolderNameInput = document.getElementById("cardHolderNameInput");
const cardHolderName = document.getElementById("cardHolderName");
const cardNumberInput = document.getElementById("cardNumberInput");
const cardNumber = document.getElementById("cardNumber");

cardHolderNameInput.addEventListener("input", (event) => {
  const inputValue = event.target.value;

  if (inputValue.length < 25) {
    cardHolderName.innerHTML = inputValue;
  }

  if (inputValue.length === 0) {
    cardHolderName.innerHTML = "Jane Appleseed";
  }
});

cardNumberInput.addEventListener("input", (event) => {
  const inputValue = event.target.value;

  const sanitizedValue = inputValue.replace(/\s/g, "");
  const formattedValue = sanitizedValue.replace(/(\d{4})/g, "$1 ");

  if (formattedValue.length <= 20) {
    cardNumber.innerHTML = formattedValue.trim();
  }

  if (inputValue.length === 0) {
    cardNumber.innerHTML = "0000 0000 0000 0000";
  }
});
