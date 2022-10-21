'use strict';
console.log('createElement.js');

// sukuriam elementa div

const divContainerEl = document.createElement('div');
// pridedam klase
divContainerEl.className = 'container';
console.log('divContainerEl ===', divContainerEl);
// patalpinti body append
document.body.appendChild(divContainerEl);

// sukurti h1
const h1El = document.createElement('h1');
// prideti jame tekxta
h1El.textContent = 'I am totaly dynamic heading';
// patalpinti i divContainerEl
divContainerEl.append(h1El);

const pEl = document.createElement('p');
pEl.textContent = 'Hello world !!!';

divContainerEl.append(pEl);

{
  /* <ul class="colorsList">
    <li>red</li>
    <li>green</li>
    <li>blue</li>
  </ul> */
}
const elementsArr = ['red', 'green', 'blue'];
const nums = ['one', 'two', 'three'];

function makeList(arr) {
  const ulEl = document.createElement('ul');
  ulEl.className = 'colorsList';

  for (let liText of arr) {
    const li1 = document.createElement('li');
    li1.textContent = liText;
    ulEl.append(li1);
  }
  // sudejom i ul visu li el
  // ulEl.append(li1, li2, li3);
  // ul dejo i document
  document.body.append(ulEl);
}
makeList(elementsArr);
makeList(nums);