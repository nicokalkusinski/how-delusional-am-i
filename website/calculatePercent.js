function calculatePercent_trivial() {
    let trivial_data = ['Gender', 'Race', 'Skin_color', 'Eye_color', 'Hair_color','Excercise', 'Religion'];
    let percents = [];

    for(i = 0; i < trivial_data.length; i++) {
        let children = document.getElementsByClassName(trivial_data[i].toLowerCase())[0].children;
        // console.log(children)
        for(let z = 0; z < children.length; z++) {
            if(children[z].classList.contains("selected")) {
                // console.log(children[z], data[trivial_data[i]][z])
                percents.push(data[trivial_data[i]][z][1]);
            }
        }
    }

    let outcome = 1
    for(let i = 0; i < percents.length; i++) {
        outcome += percents[i]
    }
    return outcome;
}

function calculatePercentWeight() {
    let outcome = 1;
    let _children = document.getElementsByClassName("weight")[0].children;
    if(_children[0].classList.contains("selected")) outcome -= 0.26
    if(_children[1].classList.contains("selected")) outcome -= 0.13
    return outcome
}

function calculatePercentLanguage() {
    let _percentages = []
    let _children = document.getElementsByClassName("language")[0].children;

    for(let i = 0; i < _children.length; i++) {
        if(_children[i].classList.contains("selected")) {
            _percentages.push(data.Language[i][1])
        }
    }

    let outcome = 1
    for(let i = 0; i < _percentages.length; i++) {
        outcome *= _percentages[i]
    }
    return outcome;
}