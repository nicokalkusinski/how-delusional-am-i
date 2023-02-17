const incomeSlider = document.getElementById("incomeSlider");
const incomePercentOutput = document.getElementById("incomePercentOutput");
const dolaroutput = document.getElementById("incomeOutput1");
const poundoutput = document.getElementById("incomeOutput2");

function showIncomeValue() {
    let _index = incomeSlider.value;

    let _pound = Number(data.Income[_index][0].slice(0, data.Income[_index][0].length-1)).toFixed(2);
    let _dolar = (_pound*1.15).toFixed(2);

    dolaroutput.textContent = `$${_dolar}k`;
    poundoutput.textContent = `£${_pound}k`;
}

function calculatePercentIncome() {
    let _index = incomeSlider.value;
    return data.Income[_index][1]/100;
}

incomeSlider.oninput = () => {
    showIncomeValue()
    incomePercentOutput.textContent = `Around ${(calculatePercentIncome()*100).toFixed(2)}% of the population`
}