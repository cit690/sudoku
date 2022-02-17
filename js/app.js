/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
let launchBoard
let completeBoard
let answers
let choice

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

const resetBtn = document.querySelector('.restart')

/*----------------------------- Event Listeners -----------------------------*/

playerBoard.addEventListener('click', handClick)

function handClick(evt){
  let choice = parseInt(evt.target.id.replace('sq', ''))
  evt.target.style.backgroundColor = '#F1883B'
 
  numberSelectEl.addEventListener('click', storeValue) 
  function storeValue(e){
    let input = parseInt(e.target.value)
    launchBoard[choice] = input
    
    numberSelectEl.removeEventListener('click', storeValue)

    console.log(launchBoard)
   
    render()
    
  }
}

submitAnswer.addEventListener('click', function(){
  for (i = 0; i < launchBoard.length; i++){
    answers.push(launchBoard[i])
  } 
  
  checkAnswer()
})

//when clicked, return all the initial null values in launchBoard back to null
resetBtn.addEventListener('click', init)
init()

/*-------------------------------- Functions --------------------------------*/



function init(){
  launchBoard = 
    [2, 3, 9, 4, null, 5, 7, 6, 8,
    7, 8, 4, 2, 3, 6, 5, 1, 9, 
    1, 6, 5, 9, 8, 7, 2, 3, 4, 
    3, 1, 7, 6, 9, 4, 8, 2, 5, 
    4, 5, 8, null, 2, 3, 6, 9, 7, 
    9, 2, 6, 7, 5, 8, 3, 4, 1, 
    8, 4, 3, 5, 6, 9, 1, 7, 2, 
    6, 7, 1, 8, 4, 2, 9, 5, 3, 
    5, 9, 2, 3, 7, 1, 4, null, 6],
 

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

answers = []

// resetBtn.setAttribute('hidden', true)


  render()
}
init()

function render(){
  launchBoard.forEach((space, i) =>{
   if(space !== null){
    tile[i].textContent = space
    tile[i].style.backgroundColor = '#C9E3AC'
   } else {
     tile[i].textContent = ''
   }
   
   if(space === null) {
    tile[i].style.backgroundColor = '#EAEFBD'
   } 
  })

}

function checkAnswer(){
  
  let boardsMatch = true
  
  for(let i = 0; i < answers.length; i++){
    if(answers[i] !== completeBoard[i]){
      boardsMatch = false
    } 
    resetBtn.removeAttribute('hidden')
  }
  alert(boardsMatch ? 'you did it' : 'try again')
  console.log('boards match', boardsMatch)
  console.log(answers)
  return boardsMatch
}
 


    // [2, 3, null, 4, 1, 5, null, 6, 8, 
    //   null, 8, null, 2, 3, 6, 5, 1, 9, 
    //   1, 6, null, 9, 8, 7, 2, 3, 4, 
    //   3, 1, 7, null, 9, 4, null, 2, 5, 
    //   4, 5, 8, 1, 2, null, 6, 9, 7, 
    //   9, 2, 6, null, 5, 8, 3, null, 1, 
    //   null, null, null, 5, null, null, 1, null, 2, 
    //   null, null, null, 8, 4, 2, 9, null, 3, 
    //   5, 9, 2, 3, 7, 1, 4, 8, 6],