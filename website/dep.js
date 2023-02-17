function make_div(values) {
    let _div = document.createElement("div");
    if(values == "break") _div.className = "break_div";
    else {
        _div.className = "test_div";
        _div.innerHTML = `${values[0]}<br>${values[1]}`
    }
    document.querySelector("#main").append(_div);
}

for (const key in Data) {
    console.log(`${key}:`);
    const innerData = Data[key];
    let firstArray, secondArray;
    for (const subKey in innerData) {
        if (Array.isArray(innerData[subKey])) {
            if (!firstArray) firstArray = innerData[subKey];
            else {
                secondArray = innerData[subKey];
                break;
            }
        }
    }
    for (let i = 0; i < firstArray.length; i++) {
        console.log(`${firstArray[i]} - ${secondArray[i]}`);
        v = [firstArray[i], secondArray[i]]
        make_div(v)
    }
    console.log("______");
    make_div("break");    
}