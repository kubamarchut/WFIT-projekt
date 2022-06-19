// adding events
let rangeInputs = document.querySelectorAll('.control-box');
rangeInputs.forEach((item, i) => {
  let rangeInput = item.querySelector('input[type=range]');
  let numInput = item.querySelector('input[type=number]');
  if (rangeInput != null) {
      rangeInput.addEventListener('input', updateSiblingInput);
      numInput.addEventListener('input', updateSiblingInput);

      rangeInput.addEventListener('change', updateParams);
      numInput.addEventListener('change', updateParams);
  }
  else {
    console.log(item);
    let checkboxInput = item.querySelector('input[type=checkbox]');
    checkboxInput.addEventListener('change', updateParams);
  }
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

  if (paramType == "numpf") {
    numpf = target.value;
    reCalculateParams();
  }
  else if (paramType == "speed") {
    animationFrequency = target.value;
  }
  else if (paramType == "groupvel") {
    changeGrpVel(target.value);
    t=0;
  }
  else if (paramType == "phasevel") {
    changePhsVel(target.value);
    t=0;
  }
  else if (paramType == "delta") {
    deltaX = Number(target.value);
  }
  else if (paramType == "amplitude") {
    amplitude = target.value/100;
  }
  else if (paramType == "grid") {
    showGrid = target.checked;
  }
  else if (paramType == "grpVel") {
    showGrpVel = target.checked;
  }
  else if (paramType == "phsVel") {
    showPhsVel = target.checked;
  }
}
