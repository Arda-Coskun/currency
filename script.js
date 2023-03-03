const convertBtn = document.getElementById("convert-btn");
const usdInput = document.getElementById("usd-input");
const result = document.getElementById("result");

convertBtn.addEventListener("click", () => {
  const usdAmount = Number(usdInput.value);
  const exchangeRate = 18.65;
  const resultAmount = (usdAmount * exchangeRate).toFixed(2);
  result.textContent = `${usdAmount} USD is equal to ${resultAmount} TRY`;
});

