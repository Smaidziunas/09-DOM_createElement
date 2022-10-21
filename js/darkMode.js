'use strict';
console.log('darkMode.js');

// 21. <button>Turn <span>dark</span> mode on</button> paspaudus pakeiciam teksta dark i light
// let isDarkModeOn = true;
// isDarkModeOn = !isDarkModeOn;

const modeSpanEl = document.getElementById('mode');
// let modeText = document.getElementById('mode').textContent;
const btnEl = document.getElementById('btn');
// console.log('modeText ===', modeText);

btnEl.addEventListener('click', () => {
  // jei dabar mode === dark
  if (modeSpanEl.textContent === 'dark') {
    console.log("modeText === 'dark'");
    // tai pakeisti i light
    modeSpanEl.textContent = 'light';
  } else {
    console.log("modeText !== 'dark'");
    // kitu atveju
    // pakeisti i dark
    modeSpanEl.textContent = 'dark';
  }

  // modeSpanEl.textContent = 'light';
});