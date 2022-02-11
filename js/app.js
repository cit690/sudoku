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
  [55, 56, 57, 58, 59,],
  [],
  [],
]



/*-------------------------------- Variables --------------------------------*/

let player 

/*------------------------ Cached Element References ------------------------*/
const playerBoard = document.querySelector(".board")
console.log(playerBoard)
for(let i=1; i<=81; i++) {
  const newDiv = document.createElement('div')
  newDiv.className = 'tile'
  newDiv.id = i
  playerBoard.appendChild(newDiv)
}

const tile = document.querySelectorAll('.tile')

const numberSelect = document.querySelectorAll('.select')
console.log(numberSelect)


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
// give me 81 boxes and increment their Ids by one for every box
