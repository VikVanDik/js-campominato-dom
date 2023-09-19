
// 2. Creare un ciclo al quale collegare gli elementi da creare (da aggiungere a funzione?).

const container = document.querySelector('.c-container')
let arrBomb = []
let c;
let bombRandom;

// 2. Creare un ciclo al quale collegare gli elementi da creare (da aggiungere a funzione).
function createCells (numCell) {
  for (let i = 1; i <=numCell; i++) {
    let cell = document.createElement ('div')
    // 3. Creare gli elementi da javascript ed aggiungere loro le classi necessarie.
    cell.classList.add(`cell-${numCell}`)
    container.append(cell);
    cell.addEventListener ('click', function () {
      let classAdded = this.classList.add ('clicked')
      console.log(i);
      let bombFound = arrBomb.includes([i])
      console.log(bombFound);
    })
  }
}

const button = document.getElementById('button')
button.addEventListener('click', function(){
  container.innerHTML = ``
  // al click del bottone faccio ritornare l'indice c a 1 e svuoto l'array
  c = 1;
  arrBomb = [];
  // parte la funzione della selezione della difficoltà
  difficulty();
  console.log(arrBomb);
})

console.log(container);
function difficulty (){
  const select = document.getElementById ('difficulty').value
  console.log(select);
  
  // a seconda della scelta nel select la funzione stampa il numero giusto di quadrati e manda all'array i valori delle bombe
  if (select == 1){
    // numero di celle
    createCells(100);
    while (c<=16) {
      // bombe casuali
      bombRandom = randomBomb(100)
      if (!arrBomb.includes(bombRandom)){
        arrBomb.push (bombRandom)
        c++
     } 
      console.log(bombRandom);
    }
  } else if (select == 2){
    createCells(81);
    while (c<=16) {
     bombRandom = randomBomb(81)
      if (!arrBomb.includes(bombRandom)){
        arrBomb.push (bombRandom)
        c++
     } 
      console.log(bombRandom);
    }
  } else if (select == 3) {
    createCells(49);
    while (c<=16) {
      bombRandom = randomBomb(49)
      if (!arrBomb.includes(bombRandom)){
        arrBomb.push (bombRandom)
        c++
     } 
      console.log(bombRandom);
    }
  }
}

// funzione numero random 
function randomBomb(max) {
  return Math.ceil(Math.random() * max);
}