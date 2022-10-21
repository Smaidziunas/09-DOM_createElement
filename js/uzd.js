'use strict';
console.log('uzd.js');

{/* 1. 
<section>
  <h2 id="yes">Section title</h2>
  <p class="text">Hello i am section text</p>
</section> 
*/}

const h2El = document.createElement('h2');
h2El.textContent = "Section title";
document.body.append(h2El);



{/* 2.
<article>
  <h3 class="title_a">JS</h3>
  <p class="date">2022 02 15</p>
  <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, vel?</p>
</article> 
*/}


const articleEl = document.createElement('article');
articleEl.className = 'container';
document.body.append(articleEl);

const h3El = document.createElement('h3');
// h3El.className = title_a;
h3El.textContent = 'JS';
articleEl.append(h3El);

const p1El = document.createElement('p');
p1El.className = 'date';
articleEl.append(p1El);

let p1ElDate = document.querySelector('.date');

function datef(){
  const d = new Date(); 
  let text = d.toLocaleDateString();
  p1El.textContent = text;
}
p1ElDate = datef();

const p2El = document.createElement('p');
p2El.textContent = 'vel?';
p2El.insertAdjacentHTML('afterbegin', 'lorem10 neveikia, ');
articleEl.append(p2El);

{/* 3 
sukurti funkcija kuri sukuria [1-2] punkto struktura ir priima selektoriaus argumenta kur ikelti. pvz

createSection('#app') - sukurs struktura ir ikels i elementa su id 'app'
createArticle('.aside') - sukurs struktura ir ikels i elementa su klase 'aside'

*/}

function crSection(anyEl){
  const newEL = document.createElement(anyEl.substring(1));
  newEL.setAttribute('id', anyEl.substring(1));;
  newEL.textContent = 'crSection function';
  document.body.append(newEL);
  // return newEL;
}
crSection('#app');

function crArticle(anyEl){
    const newEL = document.createElement(anyEl.substring(1));
    newEL.className = anyEl.substring(1);
    // newEL.textContent = 'CrArticle function';
    articleEl.append(newEL);
    return newEL;
}
let ArticleElementas = crArticle('.p');

ArticleElementas.textContent = 'crArticle function';


