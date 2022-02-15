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
let launchBoard
let choice
// let time
// let click
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

const eraseBtn = document.querySelector('.erase')

const submitAnswer = document.querySelector('.submit')

/*----------------------------- Event Listeners -----------------------------*/

playerBoard.addEventListener('click', handClick)

function handClick(evt){
  let choice = parseInt(evt.target.id.replace('sq', ''))
  evt.target.style.backgroundColor = 'yellow'
 
  numberSelectEl.addEventListener('click', storeValue) 
  function storeValue(e){
    let input = parseInt(e.target.value)
    launchBoard[choice] = input
    numberSelectEl.removeEventListener('click', storeValue)

    // console.log(launchBoard)
   
    render()
    
  }
}

submitAnswer.addEventListener('click', function(e){
  console.log('this is my user input', launchBoard)
  alert('bleep')
})

/*-------------------------------- Functions --------------------------------*/



function init(){
  launchBoard = 
    [2, 3, null, 4, 1, 5, null, 6, 8, 
    null, 8, null, 2, 3, 6, 5, 1, 9, 
    1, 6, null, 9, 8, 7, 2, 3, 4, 
    3, 1, 7, null, 9, 4, null, 2, 5, 
    4, 5, 8, 1, 2, null, 6, 9, 7, 
    9, 2, 6, null, 5, 8, 3, null, 1, 
    null, null, null, 5, null, null, 1, null, 2, 
    null, null, null, 8, 4, 2, 9, null, 3, 
    5, 9, 2, 3, 7, 1, 4, 8, 6],

  completeBoard = 
    [2, 3, 9, 4, 1, 5, 7, 6, 8,
     7, 8, 4, 2, 3, 6, 5, 1, 9, 
     1, 6, 5, 9, 8, 7, 2, 3, 4, 
     3, 1, 7, 6, 9, 4, 8, 2, 5, 
     4, 5, 8, 1, 2, 3, 6, 9, 7, 
     9, 2, 6, 7, 5, 8, 3, 4, 1, 
     8, 4, 3, 5, 6, 9, 1, 7, 2, 
     6, 7, 1, 8, 4, 2, 9, 5, 3, 
     5, 9, 2, 3, 7, 1, 4, 8, 6],
  
  possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  player = 1,
  click = 0,
  win = null

  render()
}
init()

function render(){
  launchBoard.forEach((space, i) =>{
   if(space !== null){
    tile[i].textContent = space
    tile[i].style.backgroundColor = '#C2DFE3'
   } if(space === NaN) {
    tile[i].style.backgroundColor = '#e0fbfc'
   }
  
  })

}

function checkAnswer(guess){
  //guess = user inputted launchboard
  //makes sure submitted launchboard(guess) = complete
  //if guess === completeboard{display winning message} else {tell user try again}

}

// function renderWin(){
//   matchBoard = []
//   for(let i = 0; i < completeBoard.length; ++i){
//     for(let j = 0; j < launchBoard.length; ++j){
//       if(completeBoard[i] === launchBoard[j]){
//         matchBoard.push(completeBoard[i])
//       }
//     }
//   }

// render()
// }
// console.log(renderWin(completeBoard, launchBoard))



// function evalNum()  {
//   checkRow()
//   checkIfNumIsAlreadyInColumn()
//   checkIfNumIsAlreadyInGrid()
// }
  //a function that will allow me to see if the row/column/grid already contains a number from 1-9. 

//if 1-9 appears only once in each row/column/grid, return a success message. Else if, a number repeats, return an error message. Else, return null

// function checkRow() {}
 


// function checkIfNumIsAlreadyInColumn() {

// }
// function checkIfNumIsAlreadyInGrid() {

// }
// render()
// init()



// const incompleteBoard = 
// [2, 3, null, 4, 1, 5, null, 6, 8, 
//   null, 8, null, 2, 3, 6, 5, 1, 9, 
//   1, 6, null, 9, 8, 7, 2, 3, 4, 
//   3, 1, 7, null, 9, 4, null, 2, 5, 
//   4, 5, 8, 1, 2, null, 6, 9, 7, 
//   9, 2, 6, null, 5, 8, 3, null, 1, 
//   null, null, null, 5, null, null, 1, null, 2, 
//   null, null, null, 8, 4, 2, 9, null, 3, 
//   5, 9, 2, 3, 7, 1, 4, 8, 6 ]

  



  // blankBoard = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],