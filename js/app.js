/*-------------------------------- Constants --------------------------------*/
const boxArray = [
  [1, 2, 3, 10, 11, 12, 19, 20, 21],
  [4, 5, 6, 13, 14, 15, 22, 23, 24],
  [7, 8, 9, 16, 17, 18, 25, 26, 27],
  [28, 29, 30, 37, 38, 39, 46, 47, 48],
  [31, 32, 33, 40, 41, 42, 49, 50, 51],
  [34, 35, 36, 43, 44, 45, 52, 53, 54],
  [55, 56, 57, 64, 65, 66, 73, 74, 75],
  [58, 59, 60, 67, 68, 69, 76, 77, 78],
  [61, 62, 63, 70, 71, 72, 79, 80, 81],
]

const rowsArray = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24, 25, 26, 27],
  [28, 29, 30, 31, 32, 33, 34, 35, 36],
  [37, 38, 39, 40, 41, 42, 43, 44, 45],
  [46, 47, 48, 49, 50, 51, 52, 53, 54],
  [55, 56, 57, 58, 59, 60, 61, 62, 63],
  [64, 65, 66, 67, 68, 69, 70, 71, 72],
  [73, 74, 75, 76, 77, 78, 79, 80, 81],
]

const columnsArray = [
  [1, 10, 19, 28, 37, 46, 55, 64, 73],
  [2, 11, 20, 29, 38, 47, 56, 65, 74],
  [3, 12, 21, 30, 39, 48, 57, 66, 75],
  [4, 13, 22, 31, 40, 49, 58, 67, 76],
  [5, 14, 23, 32, 41, 50, 59, 68, 77],
  [6, 15, 24, 33, 42, 51, 60, 69, 78],
  [7, 16, 25, 34, 43, 52, 61, 70, 79],
  [8, 17, 26, 35, 44, 53, 62, 71, 80],
  [9, 18, 27, 36, 45, 54, 63, 72, 81],
]

const allSolutions = boxArray.concat(rowsArray, columnsArray)


/*-------------------------------- Variables --------------------------------*/

let player
let time

/*------------------------ Cached Element References ------------------------*/
const playerBoard = document.querySelector('.board')
console.log(playerBoard)
for(let i=1; i<=81; i++) {
  const newDiv = document.createElement('div')
  newDiv.className = 'tile'
  newDiv.id = 'sq' + i
  playerBoard.appendChild(newDiv)
}


const tile = document.querySelectorAll('.tile')
console.log(tile)

const numberSelectEl = document.querySelector('.number-select')

const numBtnEls = document.querySelectorAll('.select')
console.log(numBtnEls)

/*----------------------------- Event Listeners -----------------------------*/
//I want a to be able to click on a tile, have that tile listen for a click from one of the number buttons, and have the value of the number button be displayed on the selected tile.



playerBoard.addEventListener('click', function(evt){
  let choice = parseInt(evt.target.id.replace('sq', ''))
  console.log(choice)
  

  numberSelectEl.addEventListener('click', function(inp){
    let input = inp.target.value
    console.log(input)
    evt.target.textContent = input
  })
  // I need the input to not remain the assigned value after I select a new tile
//  if (input === ){
//    return

//  }
})
init()





/*-------------------------------- Functions --------------------------------*/



function init(){
  blankBoard = [],
  possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  player = 1

  render()
}
init()


function render(){
  
  // if(playerBoard === 'clicked'){
  //   tile.style.backgroundColor= '#9db4c0'
  // }
  
}
//I want the board within each array to accept 1 integer between 1 and 9, without any of the integers repeating.

// function renderArrays(){
//   for (let i = 0; i <= possibleValues.length; i++) {
//     const a = allSolutions[i][0]
//     const b = allSolutions[i][1]
//     const c = allSolutions[i][2]
//     const d = allSolutions[i][3]
//     const e = allSolutions[i][4]
//     const f = allSolutions[i][5]
//     const g = allSolutions[i][6]
//     const h = allSolutions[i][7]
//     const k = allSolutions[i][8]
//   }
// }


    // [null, null, null, null, null, null, null, null, null],
    // [null, null, null, null, null, null, null, null, null],
    // [null, null, null, null, null, null, null, null, null],
    // [null, null, null, null, null, null, null, null, null],
    // [null, null, null, null, null, null, null, null, null],
    // [null, null, null, null, null, null, null, null, null],
    // [null, null, null, null, null, null, null, null, null],
    // [null, null, null, null, null, null, null, null, null],
    // [null, null, null, null, null, null, null, null, null]