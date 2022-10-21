'use strict';
console.log('input.js');

// nusitaikyti i el
// james@bond.com
const addBtnEl = document.getElementById('add');
const inputEl = document.getElementById('newInput');
const outEl = document.getElementById('out');
const olEl = document.getElementById('ol');

function intpuToOutput() {
  // paimam ivesties reiksme
  const inputText = inputEl.value;
  console.log('inputText ===', inputText);
  // irasom i out containeri
  outEl.textContent = inputText;
  // outEl.innerHTML = inputText;
}

function makeLiEl() {
  // paimam ivesties reiksme
  const inputText = inputEl.value;
  const liEl = `<li>${inputText}</li>`;
  olEl.insertAdjacentHTML('beforeend', liEl);
}

addBtnEl.addEventListener('click', makeLiEl);

inputEl.addEventListener('keyup', intpuToOutput);