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
let blankBoard
let player
let time
let click
let selectedNums 

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

playerBoard.addEventListener('click', handClick)

function handClick(evt){
  let choice = parseInt(evt.target.id.replace('sq', ''))
  evt.target.style.backgroundColor = 'yellow'
 
  numberSelectEl.addEventListener('click', storeValue) 
  function storeValue(e){
    let input = e.target.value
    blankBoard[choice] = input
    numberSelectEl.removeEventListener('click', storeValue)
    
    // evalNum()
    checkRow()
    // renderArrays()
  }
}



/*-------------------------------- Functions --------------------------------*/



function init(){
  blankBoard = [2, 3, null, 4, 1, 5, null, 6, 8, 
    null, 8, null, 2, 3, 6, 5, 1, 9, 
    1, 6, null, 9, 8, 7, 2, 3, 4, 
    3, 1, 7, null, 9, 4, null, 2, 5, 
    4, 5, 8, 1, 2, null, 6, 9, 7, 
    9, 2, 6, null, 5, 8, 3, null, 1, 
    null, null, null, 5, null, null, 1, null, 2, 
    null, null, null, 8, 4, 2, 9, null, 3, 
    5, 9, 2, 3, 7, 1, 4, 8, 6],
  possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  player = 1
  click = 0
  win = null

  render()
}
init()

function render(){
  blankBoard.forEach((space, i) =>{
   if(space !== null){
    tile[i].textContent = space
    tile[i].style.backgroundColor = '#C2DFE3'
   }
  })
}


// function renderArrays(){
//   for (let i = 0; i < rowsArray.length; i++) {
//     const a = rowsArray[i][0]
//     const b = rowsArray[i][1]
//     const c = rowsArray[i][2]
//     const d = rowsArray[i][3]
//     const e = rowsArray[i][4]
//     const f = rowsArray[i][5]
//     const g = rowsArray[i][6]
//     const h = rowsArray[i][7]
//     const j = rowsArray[i][8]

//     if(blankBoard[a]+blankBoard[b]+blankBoard[c]+blankBoard[d]+blankBoard[e]+playerBoard[f]+blankBoard[g]+blankBoard[h]+blankBoard[j] === 9){
//       console.log('win')
//     }

//   }
//   render()
// }

function evalNum()  {
  checkRow()
  checkIfNumIsAlreadyInColumn()
  checkIfNumIsAlreadyInGrid()
}
  //a function that will allow me to see if the row/column/grid already contains a number from 1-9. 

//if 1-9 appears only once in each row/column/grid, return a success message. Else if, a number repeats, return an error message. Else, return null

function checkRow() {}
 


function checkIfNumIsAlreadyInColumn() {

}
function checkIfNumIsAlreadyInGrid() {

}
render()
init()



// const completeBoard = 
// [2, 3, null, 4, 1, 5, null, 6, 8, 
//   null, 8, null, 2, 3, 6, 5, 1, 9, 
//   1, 6, null, 9, 8, 7, 2, 3, 4, 
//   3, 1, 7, null, 9, 4, null, 2, 5, 
//   4, 5, 8, 1, 2, null, 6, 9, 7, 
//   9, 2, 6, null, 5, 8, 3, null, 1, 
//   null, null, null, 5, null, null, 1, null, 2, 
//   null, null, null, 8, 4, 2, 9, null, 3, 
//   5, 9, 2, 3, 7, 1, 4, 8, 6 ]

//   const completeBoard = 
// [2, 3, 0, 4, 1, 5, 0, 6, 8, 
//   0, 8, 0, 2, 3, 6, 5, 1, 9, 
//   1, 6, 0, 9, 8, 7, 2, 3, 4, 
//   3, 1, 7, 0, 9, 4, 0, 2, 5, 
//   4, 5, 8, 1, 2, 0, 6, 9, 7, 
//   9, 2, 6, 0, 5, 8, 3, 0, 1, 
//   0, 0, 0, 5, 0, 0, 1, 0, 2, 
//   0, 0, 0, 8, 4, 2, 9, 0, 3, 
//   5, 9, 2, 3, 7, 1, 4, 8, 6 ]