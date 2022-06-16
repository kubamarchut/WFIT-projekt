// adding events
let rangeInputs = document.querySelectorAll('.control-box');
rangeInputs.forEach((item, i) => {
  let rangeInput = item.querySelector('input[type=range]');
  let numInput = item.querySelector('input[type=number]');

  rangeInput.addEventListener('input', updateSiblingInput);
  numInput.addEventListener('change', updateSiblingInput);
});

// events handlers
function updateSiblingInput(e){
  let target = e.target;
  let siblingType = target.type == "number" ? "range" : "number";

  let sibling = e.target.parentNode.querySelector("input[type=" + siblingType + "]")
  sibling.value = target.value;
}
