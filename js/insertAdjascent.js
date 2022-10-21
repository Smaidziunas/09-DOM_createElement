
'use strict';
console.log('insertAdjacent.js');

// panasus i innerHTML. skirtas ikelti tekstiniam htmlui


const listEl = document.getElementById('colorsList');

// elem.insertAdjacentHTML(where, html)



const h2ElString = '<h2>Colors</h2>';

const h2El = document.createElement('h2');
h2El.textContent = 'Colors';

// listEl.insertAdjacentHTML('beforebegin', h2ElString);
listEl.insertAdjacentHTML('afterbegin', '<li>Black</li>');
// listEl.insertAdjacentHTML('beforebegin', h2El); // neveikia su elemntais
listEl.insertAdjacentElement('beforebegin', h2El);
