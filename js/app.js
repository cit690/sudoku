/*-------------------------------- Constants --------------------------------*/
const boxArray = [
  [0, 1, 2, 9, 10, 11, 18, 19, 20],
  [3, 4, 5, 12, 13, 14, 21, 22, 23],
  [6, 7, 8, 15, 16, 17, 24, 25, 26],
  [27, 28, 29, 36, 37, 38, 45, 46, 47],
  [30, 31, 32, 39, 40, 41, 48, 49, 50],
  [33, 34, 35, 42, 43, 44, 51, 52, 53],
  [54, 55, 56, 63, 64, 65, 72, 73, 74],
  [57, 58, 59, 66, 67, 68, 75, 76, 77],
  [60, 61, 62, 69, 70, 71, 78, 79, 80],
]

const rowsArray = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, 32, 33, 34, 35],
  [36, 37, 38, 39, 40, 41, 42, 43, 44],
  [45, 46, 47, 48, 49, 50, 51, 52, 53],
  [54, 55, 56, 57, 58, 59, 60, 61, 62],
  [63, 64, 65, 66, 67, 68, 69, 70, 71],
  [72, 73, 74, 75, 76, 77, 78, 79, 80],
]

const columnsArray = [
  [0, 9, 18, 27, 36, 45, 54, 63, 72],
  [1, 10, 19, 28, 37, 46, 55, 64, 73],
  [2, 11, 20, 29, 38, 47, 56, 65, 74],
  [3, 12, 21, 30, 39, 48, 57, 66, 75],
  [4, 13, 22, 31, 40, 49, 58, 67, 76],
  [5, 14, 23, 32, 41, 50, 59, 68, 77],
  [6, 15, 24, 33, 42, 51, 60, 69, 78],
  [7, 16, 25, 34, 43, 52, 61, 70, 79],
  [8, 17, 26, 35, 44, 53, 62, 71, 80],
]

// const allSolutions = boxArray.concat(rowsArray, columnsArray)


/*-------------------------------- Variables --------------------------------*/

let player
let time
let click

/*------------------------ Cached Element References ------------------------*/
const playerBoard = document.querySelector('.board')

for(let i=0; i<=80; i++) {
  const newDiv = document.createElement('div')
  newDiv.className = 'tile'
  newDiv.id = 'sq' + i
  playerBoard.appendChild(newDiv)
}


const tile = document.querySelectorAll('.tile')

const numberSelectEl = document.querySelector('.number-select')

const numBtnEls = document.querySelectorAll('.select')

/*----------------------------- Event Listeners -----------------------------*/

playerBoard.addEventListener('click', function(evt){
  let choice = evt.target.id.replace('sq', '')
  
  numberSelectEl.addEventListener('click', storeValue) 
  function storeValue(inp){
    let input = inp.target.value
    evt.target.textContent = input
    numberSelectEl.removeEventListener('click', storeValue)
  }
  
  evalNum()
})

/*-------------------------------- Functions --------------------------------*/



function init(){
  blankBoard = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  player = 1
  click = 0
  win = null

  
}
init()

function render(){

}


// function renderArrays(){
  // for (let i = 0; i <= possibleValues.length; i++) {
    // const a = rowsArray[i][0]
    // const b = rowsArray[i][1]
    // const c = rowsArray[i][2]
    // const d = rowsArray[i][3]
    // const e = rowsArray[i][4]
    // const f = rowsArray[i][5]
    // const g = rowsArray[i][6]
    // const h = rowsArray[i][7]
    // const j = rowsArray[i][8]

    // if(playerBoard[a]+playerBoard[b]+playerBoard[c]+playerBoard[d]+playerBoard[e]+playerBoard[f]+playerBoard[g]+playerBoard[h]+playerBoard[j] === true){
    //   console.log('win')
    // }

  // }
// }

function evalNum()  {
  checkIfNumIsAlreadyInRow()
  checkIfNumIsAlreadyInColumn()
  checkIfNumIsAlreadyInGrid()
  //a function that will allow me to see if the row/column/grid already contains a number from 1-9. 

//if 1-9 appears only once in each row/column/grid, return a success message. Else, return an error message

function checkIfNumIsAlreadyInRow() {
  poop = []
  possibleValues.forEach((num, i) => {
    if(rowsArray[i].includes(num)){
     poop.push(possibleValues[i])
    }
    console.log(poop)
  })

}

function checkIfNumIsAlreadyInColumn() {

}
function checkIfNumIsAlreadyInGrid() {

render()
}
}
