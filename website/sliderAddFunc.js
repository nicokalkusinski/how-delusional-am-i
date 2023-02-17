//slider additional functionality
//does not affect the output

function getHandlePosition(slider_id) {
    const slider = document.querySelector(`#${slider_id}`);

    const sliderLeft = slider.offsetLeft;
    const sliderTop = slider.offsetTop;
    const sliderWidth = slider.offsetWidth;

    const handlePosition = slider.value;
    const handleX = sliderLeft + (handlePosition / (slider.max - slider.min)) * sliderWidth;
    const handleY = sliderTop;

    const absolutePosition = [handleX, handleY];
    // console.log(absolutePosition)
    return absolutePosition
}

function setShowValue(element, slider_id) {
    _pos = getHandlePosition(slider_id)
    element.style.position = "Absolute";
    element.style.left = _pos[0]-(_pos[0]/100) + "px";
    element.style.top = _pos[1]+15 + "px";
}