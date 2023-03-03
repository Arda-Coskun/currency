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




function updateCurrencyValues() {
  const url = "https://api.exchangerate-api.com/v4/latest/TRY";
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const usd = data.rates.USD.toFixed(2);
      const eur = data.rates.EUR.toFixed(2);
      const gbp = data.rates.GBP.toFixed(2);
      const jpy = data.rates.JPY.toFixed(3);
      
      document.querySelector(".currency-panel:nth-child(1) .currency-value").textContent = usd;
      document.querySelector(".currency-panel:nth-child(2) .currency-value").textContent = eur;
      document.querySelector(".currency-panel:nth-child(3) .currency-value").textContent = gbp;
      document.querySelector(".currency-panel:nth-child(4) .currency-value").textContent = jpy;
    });
}

updateCurrencyValues();
setInterval(updateCurrencyValues, 5000); // Update every 5 seconds
