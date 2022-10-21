'use strict';
console.log('insert.js');

// sukurti h1
const h1El = document.createElement('h1');
// prideti jame tekxta
h1El.textContent = 'I am before';

const listEl = document.getElementById('colorsList');
// ikelti h1 pries sarasa
listEl.before(h1El);

// sukurti footer elementa
const footerEl = document.createElement('footer');
// ideti i ji teksta
footerEl.textContent = 'Visos teises Saugomos 2022';
// patalpinti footeri po sarasu su after
// debugger;
listEl.after(footerEl);

document.body.append(footerEl);