//lists with sliders and boxes variables
let to_boxes = ['Gender', 'Race', 'Skin_color', 'Weight', 'Eye_color', 'Hair_color', 'Language','Excercise', 'Religion'];
let to_sliders = ['Age', 'Female_height', 'Male_height', 'Income'];

//this capitalize the first letter in the string
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function commafy(num) {
    var str = num.toString().split('.');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
}

/**
 * create the boxes in the corrensponding divs
 * @param {HTMLElement} where parent element where you want to append the children
 * @param {String} key the key in the dictionary for the data to be read from
 */
function make_boxes(where, key) {
    for(let i = 0; i < data[key].length; i++) {
        _box = document.createElement("div");
            _box.className = "box";
        _value = document.createElement("div");
            _value.textContent = capitalize(data[key][i][0]);
        _percent = document.createElement("div");
            _percent.textContent = `${(data[key][i][1]*100).toFixed(2)}%`
        _box.append(_value);
        _box.append(_percent);

        where.append(_box)
    }
}

//make the boxes for every variable in the list
for(let i = 0; i < to_boxes.length; i++) {
    make_boxes(document.getElementsByClassName(to_boxes[i].toLowerCase())[0],to_boxes[i])
}

//add toggle of "selected" class to each box
let boxes = document.getElementsByClassName("box")
for(let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", () => {
        boxes[i].classList.toggle("selected")
    })
}

//gender setter
for(let i = 0; i < document.getElementsByClassName("gender")[0].children.length; i++) {
    document.getElementsByClassName("gender")[0].children[i].addEventListener("click", () => {setMinMaxHeight()})
  }