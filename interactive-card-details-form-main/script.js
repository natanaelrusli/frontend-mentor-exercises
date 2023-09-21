const cardHolderNameInput = document.getElementById("cardHolderNameInput");
const cardHolderName = document.getElementById("cardHolderName");
const cardNumberInput = document.getElementById("cardNumberInput");
const cardNumber = document.getElementById("cardNumber");
const monthExpInput = document.getElementById("monthExpInput");
const yearExpInput = document.getElementById("yearExpInput");
const expMonth = document.getElementById("expMonth");
const expYear = document.getElementById("expYear");
const cardCvv = document.getElementById("cardCvv");
const cardCvvInput = document.getElementById("cardCvvInput");

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

monthExpInput.addEventListener("input", (event) => {
  const inputValue = event.target.value;

  if (inputValue.length <= 2) {
    expMonth.innerHTML = inputValue;
  }

  if (inputValue.length === 0) {
    expMonth.innerHTML = "00";
  }
});

yearExpInput.addEventListener("input", (event) => {
  const inputValue = event.target.value;

  if (inputValue.length <= 2) {
    expYear.innerHTML = inputValue;
  }

  if (inputValue.length === 0) {
    expYear.innerHTML = "00";
  }
});

cardCvvInput.addEventListener("input", (event) => {
  const inputValue = event.target.value;

  if (inputValue.length <= 3) {
    cardCvv.innerHTML = inputValue;
  }

  if (inputValue.length === 0) {
    cardCvv.innerHTML = "000";
  }
});
