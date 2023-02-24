let result = 1;
const population = 8000000000;

document.getElementById("getResult").addEventListener("click", () => {
    result = 1;
    // console.log(calculatePercent_trivial(), calculatePercentAge(), calculatePercentLanguage(), calculatePercentWeight(), calculatePercentageHeight(), calculatePercentIncome())
    let multiplier = calculatePercent_trivial() * calculatePercentAge() * calculatePercentLanguage() * calculatePercentWeight() * calculatePercentageHeight() * calculatePercentIncome();
    result = result * multiplier;

    console.log(result, result*population)

    createResults(result)
})

function createResults(result) {
    document.getElementById("results").innerHTML = "";
    
    let yourchance = mkdir();
    yourchance.innerHTML = `<span style="font-size: 2.3rem">${(result*100).toFixed(10)}%</span>`;

    let title_squares = mkdir()
    title_squares.innerHTML = `Around ${Math.floor(result*1000)} in 1000 people match your criteria...`

    let squares = mkdir();
    squares.id = "squares"
    let nums = getRandNums(Math.floor(result*1000), 1, 1000)
    for(let i = 0; i < 1000; i++) {
        let current_node = mkdir("squares", "square")
        if(nums.includes(i)) current_node.classList.add("node_selected") 
    }

    let every = mkdir()
    every.innerHTML = `...it translates to ${commafy(Math.ceil(1/result))}th person you meet.`;

    let amount = mkdir()
    amount.innerHTML = `It's roughly ${commafy(Math.floor(result*8000000000))} of people living on Earth.`

    let youaremore = mkdir()
    youaremore.innerHTML = `You are ${commafy((0.5/result).toFixed(2))}% more delusional than average person.`

    let allppl = mkdir()
    let allpplPercent = ((result*117000000000)/population*100).toFixed(2);
    allppl.innerHTML = `If all the human to ever exist were alive, around ${commafy(allpplPercent)}% of today's population would match your criteria.`
    
    // squares = mkdir();
    // squares.id = "squares"
    // nums = getRandNums(Math.floor(result*1000), 1, 1000)
    // for(let i = 0; i < 1000; i++) {
    //     let current_node = mkdir("squares", "square")
    //     if(nums.includes(i)) current_node.classList.add("node_selected") 
    // }

    let end = mkdir()
    end.innerHTML = `<span style="color:gray;font-size:0.7rem;">If you have any ideas how can I visualise this data to be even more funny to look at<br>msg me on github or mail me at nicokalkusinski@gmail.com.<br>If you want to help with my research feel free to fill this up - <a href="https://forms.gle/sEvczDYgrf9UX4vS9">https://forms.gle/sEvczDYgrf9UX4vS9</a></span>`    
}

function mkdir(parent=false, classname=false) {
    let _parent;
    
    if(parent != false) _parent = document.getElementById(parent)
    else _parent = document.getElementById("results");
    
    let _div = document.createElement("div");
    _parent.append(_div);
    
    if(classname != false) _div.className = classname
    else _div.id = `result${_parent.children.length}`
    
    return _div;
}

function getRandNums(amount, min, max) {
    let result = [];
  
    for (let i = 0; i < amount; i++) {
      let randomNum = Math.floor(Math.random() * max) + min;
      result.push(randomNum);
    }
  
    return result;
  }

// document.getElementById("getResult").click()