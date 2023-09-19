
// 2. Creare un ciclo al quale collegare gli elementi da creare (da aggiungere a funzione?).

const container = document.querySelector('.c-container')
let arrBomb = []
let c;

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
    })
  }
}

const button = document.getElementById('button')
button.addEventListener('click', function(){
  container.innerHTML = ``
  c = 1;
  arrBomb = [];
  difficulty();
  // 6. Creare un ciclo che, al click del bottone avvia, indicizzi le 16 bombe inserendole in un array senza ripetere il numero che indicizza
  console.log(arrBomb);
})

console.log(container);
function difficulty (){
  const select = document.getElementById ('difficulty').value
  console.log(select);
  
  if (select == 1){
    createCells(100);
    while (c<=16) {
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

function randomBomb(max) {
  return Math.ceil(Math.random() * max);
}

 
 

