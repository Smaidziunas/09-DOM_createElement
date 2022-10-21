'use strict';
console.log('about.js');

{/* <div class="container">
<h1>About us</h1>

<main>
  <article class="card">
    <h2>Its all about us</h2>
    <p>date: <strong>2022</strong></p>
    <p>It is all dynamic</p>
  </article>

  <ol class="colors">
    <li>red</li>
    <li>green</li>
    <li>blue</li>
    <li>white</li>
  </ol>
  <button>Click me</button>

<!-- paspaudus mygtuka pakeisti h1 antraste i siandienos data -->

</main>
<img src="http://placeimg.com/640/480/tech" alt="tech">
</div> */}


// creating Div el
const containerDivEl = document.createElement('div');
containerDivEl.className = 'container';
// setting div to browser
document.body.prepend(containerDivEl);

// creating h1 el
const h1El = document.createElement('h1');
// adding to divEl
containerDivEl.append(h1El);
// naming h1
h1El.textContent = 'About us';


// creating main cont
const mainContainerEl = document.createElement('main');
// setting main to browser
containerDivEl.append(mainContainerEl);


// creating article
const articleEl = document.createElement('article');
// creating card class for article
articleEl.className = 'card';
// placing article to main div
mainContainerEl.append(articleEl);

// creating h2
const h2El = document.createElement('h2');
// text to h2
h2El.textContent = 'Its all about us';
// placing h2 inside article;
articleEl.append(h2El);

// creating p1
const pEl = document.createElement('p');

// adding text and styles
pEl.textContent = 'date';
pEl.insertAdjacentHTML('beforeend', '   <strong>2022</strong>');

// styling 2022;
// pEl.style.fontWeight = 'bold';


// adding to article
articleEl.append(pEl);

// creating another p
const p2El = document.createElement('p');
// adding text
p2El.textContent = 'It is all dynamic.';
// adding to article
articleEl.append(p2El);


// creating ol cont inside main with 4 li

/* funkcija:
1.create olEl;
2.create class name for olEl;
3.create array with colors. Array is needed to loop over inside it, as it will take EACH color as the argument and will place it to liEl.
4.create {for of} loop. For each number (which is text) of [array described above];
5.Each text number will be stored to liEl. Create liEl. Create liEl.textContent and direct each color loop to it.
6.Add liEl to OlEl.
7.Exit loop and add OlEl to main container.
8. exit function and call it.
*/

const arr = ['red', 'green', 'blue', 'white'];

function makingOlEl (arr){

  const olEl = document.createElement('ol');
  olEl.className = 'colors';

  for (let liText of arr) {
    const liEl = document.createElement('li');

    liEl.textContent = liText;
    olEl.append(liEl);
  }
  // // adding to main cont;
  mainContainerEl.append(olEl);

  // return makingOlEl ();
}
makingOlEl(arr);

// creating button
const btnEl = document.createElement('button');
btnEl.textContent = 'Click me';

mainContainerEl.append(btnEl);

// creating image
const imgEl = document.createElement('img');
imgEl.src = "http://placeimg.com/640/480/tech";
imgEl.alt = "tech";


containerDivEl.append(imgEl);




