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




const usdTryRateElement = document.getElementById("usd-try-rate");

function getUsdTryRate() {
  fetch("https://finance.yahoo.com/quote/USDTRY=X/")
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const rate = doc.querySelector(".Trsdu(0.3s) > span").textContent;
      usdTryRateElement.textContent = `USD/TRY: ${rate}`;
    })
    .catch(error => console.log(error));
}

getUsdTryRate();
setInterval(getUsdTryRate, 60000); // update rate every minute

