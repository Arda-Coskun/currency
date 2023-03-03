const exchangeBtn = document.getElementById("exchange-btn");
const amountInput = document.getElementById("amount");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const resultDiv = document.getElementById("result");

const apiEndpoint = "https://api.exchangerate-api.com/v4/latest/";

exchangeBtn.addEventListener("click", async () => {
  try {
    const amount = amountInput.value;
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;
    const response = await fetch(`${apiEndpoint}${fromCurrency}`);
    const data = await response.json();
    const exchangeRate = data.rates[toCurrency];
    const result = amount * exchangeRate;
    resultDiv.innerHTML = `${amount} ${fromCurrency} = ${result.toFixed(
      2
    )} ${toCurrency}`;
  } catch (error) {
    console.error(error);
    resultDiv.innerHTML = "An error occurred while fetching exchange rate data.";
  }
});
