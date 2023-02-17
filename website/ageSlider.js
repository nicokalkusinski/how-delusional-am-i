fromAgeValue = 18
toAgeValue = 25
agePercentOutput = document.getElementById("agePercentOutput");

function controlfromSliderAge(fromSliderAge, toSliderAge, fromInputAge) {
  const [from, to] = getParsed(fromSliderAge, toSliderAge);
  fillSlider(fromSliderAge, toSliderAge, '#C6C6C6', '#25daa5', toSliderAge);
  if (from > to) {
    fromSliderAge.value = to;
    fromInputAge.textContent = to;
  } else fromInputAge.textContent = from;
  fromAgeValue = fromSliderAge.value;
  agePercentOutput.textContent = `Around ${(calculatePercentAge()*100).toFixed(2)}% of population`
}

function controltoSliderAge(fromSliderAge, toSliderAge, toInputAge) {
  const [from, to] = getParsed(fromSliderAge, toSliderAge);
  fillSlider(fromSliderAge, toSliderAge, '#C6C6C6', '#25daa5', toSliderAge);
  setToggleAccessible(toSliderAge);
  if (from <= to) {
    toSliderAge.value = to;
    toInputAge.textContent = to;
  } else {
    toInputAge.textContent = from;
    toSliderAge.value = from;
  }
  toAgeValue = toSliderAge.value;
  agePercentOutput.textContent = `Around ${(calculatePercentAge()*100).toFixed(2)}% of population`
}

function getParsed(currentFrom, currentTo) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max-to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
      to right,E
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
      ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
      ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
  const toSliderAge = document.querySelector('#toSliderAge');
  if (Number(currentTarget.value) <= 0 ) toSliderAge.style.zIndex = 2;
  else toSliderAge.style.zIndex = 0;
}

function calculatePercentAge() {
  _min = Number(fromAgeValue)
  _max = Number(toAgeValue)

  let _percent = 0

  for(let i = _min-18; i < _max-17; i++) _percent += data.Age[i][1];

  return _percent
}

const fromSliderAge = document.querySelector('#fromSliderAge');
const toSliderAge = document.querySelector('#toSliderAge');
const fromInputAge = document.querySelector('#fromInputAge');
const toInputAge = document.querySelector('#toInputAge');

fillSlider(fromSliderAge, toSliderAge, '#C6C6C6', '#25daa5', toSliderAge);
setToggleAccessible(toSliderAge);

fromSliderAge.oninput = () => {
  controlfromSliderAge(fromSliderAge, toSliderAge, fromInputAge);
}
toSliderAge.oninput = () => {
  controltoSliderAge(fromSliderAge, toSliderAge, toInputAge);
}