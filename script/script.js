
// 2. Creare un ciclo al quale collegare gli elementi da creare (da aggiungere a funzione?).

const container = document.querySelector('.c-container')

// 2. Creare un ciclo al quale collegare gli elementi da creare (da aggiungere a funzione).
function createCells (numCell) {
  for (let i = 1; i <=numCell; i++) {
    let cell = document.createElement ('div')
    // 3. Creare gli elementi da javascript ed aggiungere loro le classi necessarie.
    cell.classList.add(`cell-${numCell}`)
    container.append(cell);
    cell.addEventListener ('click', function () {
      let classAdded = this.classList.add ('clicked')

      if (classAdded) {
        cell.innerHTML = [i]
      } else {
        cell.innerHTML = ``
      }
      console.log([i]);
    })
  }
}

const button = document.getElementById('button')
button.addEventListener('click', function(){
  container.innerHTML = ``
  container.classList.remove ('d-none')
  difficulty();
})

console.log(container);
function difficulty (){
  const select = document.getElementById ('difficulty').value
  console.log(select);
  if (select == 1){
    createCells(100);
  } else if (select == 2){
    createCells(81);
  } else if (select == 3) {
    createCells(49);
  }
}
