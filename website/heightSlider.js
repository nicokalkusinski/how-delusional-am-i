only_male = false;
only_female = false;

function controlfromSliderHeight(fromSliderHeight, toSliderHeight, fromInputHeight) {
  const [from, to] = getParsed(fromSliderHeight, toSliderHeight);
  fillSlider(fromSliderHeight, toSliderHeight, '#C6C6C6', '#25daa5', toSliderHeight);
  if (from > to) {
    fromSliderHeight.value = to;
    fromInputHeight.textContent = to;
  } else fromInputHeight.textContent = from;
  fromHeightValue = fromSliderHeight.value;
  heightPercentOutput.textContent = `Close to ${(calculatePercentageHeight()*100).toFixed(2)}% of the sample`
}

function controltoSliderHeight(fromSliderHeight, toSliderHeight, toInputHeight) {
  const [from, to] = getParsed(fromSliderHeight, toSliderHeight);
  fillSlider(fromSliderHeight, toSliderHeight, '#C6C6C6', '#25daa5', toSliderHeight);
  setToggleAccessible(toSliderHeight);
  if (from <= to) {
    toSliderHeight.value = to;
    toInputHeight.textContent = to;
  } else {
    toInputHeight.textContent = from;
    toSliderHeight.value = from;
  }
  toHeightValue = toSliderHeight.value;
  heightPercentOutput.textContent = `Close to ${(calculatePercentageHeight()*100).toFixed(2)}% of the sample`
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
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
      ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
      ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
      ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
  const toSliderHeight = document.querySelector('#toSliderHeight');
  if (Number(currentTarget.value) <= 0 ) toSliderHeight.style.zIndex = 2;
  else toSliderHeight.style.zIndex = 0;
}

const fromSliderHeight = document.querySelector('#fromSliderHeight');
const toSliderHeight = document.querySelector('#toSliderHeight');
const fromInputHeight = document.querySelector('#fromInputHeight');
const toInputHeight = document.querySelector('#toInputHeight');

fillSlider(fromSliderHeight, toSliderHeight, '#C6C6C6', '#25daa5', toSliderHeight);
setToggleAccessible(toSliderHeight);

function setMinMaxHeight() {
  let _gender = document.getElementsByClassName("gender")[0];

  if(_gender.children[0].classList.contains("selected") && !_gender.children[1].classList.contains("selected")) {
      //male only selected
      only_male = true;
      only_female = false;
      _newMin = data.Male_height[0][0];
      _newMax = data.Male_height[data.Male_height.length-1][0];
      fromSliderHeight.min = _newMin;
      toSliderHeight.max = _newMax;
      // console.log("male selected", _newMin, _newMax);
  } else if(!_gender.children[0].classList.contains("selected") && _gender.children[1].classList.contains("selected")) {
      //female only selected
      only_male = false;
      only_female = true;
      _newMin = data.Female_height[0][0];
      _newMax = data.Female_height[data.Female_height.length-1][0];
      fromSliderHeight.min = _newMin;
      toSliderHeight.max = _newMax;
      // console.log("female selected", _newMin, _newMax);
  } else {
      //assume both selected
      only_male = false;
      only_female = false;
      _newMin = data.Female_height[0][0];
      _newMax = data.Male_height[data.Male_height.length-1][0];
      fromSliderHeight.min = _newMin;
      toSliderHeight.max = _newMax;
      // console.log("both selected", _newMin, _newMax);
  }
}

fromHeightValue = 150;
toHeightValue = 180;
heightPercentOutput = document.getElementById("heightPercentOutput");

function calculatePercentageHeight() {
  _min = Number(fromHeightValue)
  _max = Number(toHeightValue)

  let _percent = 0

  for(let i = 0; i < data.Male_height.length; i++) {
    if(i < data.Female_height.length) {
      if(data.Female_height[i][0] >= _min && data.Female_height[i][0] <= _max) {
        _percent += data.Female_height[i][1];
      }
    }
    if(data.Male_height[i][0] >= _min && data.Male_height[i][0] <= _max) {
      _percent += data.Male_height[i][1];
    }
  }
  // console.log(_min, _max, _percent/2)

  return _percent/2; 
}

fromSliderHeight.oninput = () => {
  controlfromSliderHeight(fromSliderHeight, toSliderHeight, fromInputHeight);
}
toSliderHeight.oninput = () => {
  controltoSliderHeight(fromSliderHeight, toSliderHeight, toInputHeight);
}