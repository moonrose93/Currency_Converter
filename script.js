const currencyFirstEl = document.getElementById("currency-first");

const worthFirstEl = document.getElementById("worth-first");

const currencySecondEl = document.getElementById("currency-second");

const worthSecondEl = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange-rate");



updateRate()

function updateRate(){

fetch(`https://v6.exchangerate-api.com/v6/b5f08d66e836d0a769d8f5cc/latest/${currencyFirstEl.value}`/*Inside the function, a fetch() request is made to an external API using a template literal.
 The API URL includes the selected currency from the currencyFirstEl dropdown.*/
)
.then((res) => res.json())
.then((data) => {
    const rate = data.conversion_rates[currencySecondEl.value];//We set this to a variable because we want to see the output for the worthSecondEl based on the fectched data from the currencySecondEl.value //
    console.log(rate);
    exchangeRateEl.innerHTML = `1 ${currencyFirstEl.value} = ${rate + " " + currencySecondEl.value}`
    worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2)
});
}

currencyFirstEl.addEventListener("change", updateRate)

currencySecondEl.addEventListener("change", updateRate)

worthFirstEl.addEventListener("input", updateRate)