// adding events
let rangeInputs = document.querySelectorAll('.control-box');
rangeInputs.forEach((item, i) => {
  let rangeInput = item.querySelector('input[type=range]');
  let numInput = item.querySelector('input[type=number]');

  rangeInput.addEventListener('input', updateSiblingInput);
  numInput.addEventListener('input', updateSiblingInput);

  rangeInput.addEventListener('change', updateParams);
});

// events handlers
function updateSiblingInput(e){
  let target = e.target;
  let siblingType = target.type == "number" ? "range" : "number";

  let sibling = e.target.parentNode.querySelector("input[type=" + siblingType + "]")
  sibling.value = target.value;
}

function updateParams(e){
  let target = e.target;
  let paramType = target.id.split('-')[target.id.split('-').length - 1];

  if (paramType == "speed") {
    animationFrequency = target.value;
  }
  else if (paramType == "groupvel") {
    grpVel = target.value;
    t=0;
  }
  else if (paramType == "delta") {
    deltaX = target.value;
    t=0;
  }
  else if (paramType == "amplitude") {
    amplitude = target.value/100;
  }
}
