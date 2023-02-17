function calculatePercentage() {
    _min = Number(fromAgeValue)
    _max = Number(toAgeValue)

    let _percent = 0
  
    for(let i = _min-18; i < _max-18; i++) _percent += data.Age[i][1];

    return _percent
}