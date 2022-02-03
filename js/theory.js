'use strict'

function judge(){
  let input = document.getElementById('input');
  let inputText = input.value;
  let showInput = document.getElementById('showInput');
  showInput.innerHTML = inputText;
  console.log(inputText);
};