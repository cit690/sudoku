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

const h1Msg = document.querySelector('h1')

const h4Msg = document.querySelector('h4')

/*----------------------------- Event Listeners -----------------------------*/

playerBoard.addEventListener('click', handClick)

function handClick(evt){
  let choice = parseInt(evt.target.id.replace('sq', ''))
  evt.target.style.backgroundColor = '#F1883B'
 
  numberSelectEl.addEventListener('click', giveValue) 
  function giveValue(e){
    let input = parseInt(e.target.value)
    launchBoard[choice] = input
    
    numberSelectEl.removeEventListener('click', giveValue)
    eraseBtn.removeEventListener('click', clearVal)
    render()
  }

  eraseBtn.addEventListener('click', clearVal)
  function clearVal(er){
    let clear = er.target.value
    launchBoard[choice] = clear

    numberSelectEl.removeEventListener('click', giveValue)
    eraseBtn.removeEventListener('click', clearVal)
    
    render()
  }
}

submitAnswer.addEventListener('click', function(){
  for (i = 0; i < launchBoard.length; i++){
    answers.push(launchBoard[i])
  } 
  
  checkAnswer()
})


resetBtn.addEventListener('click', init)
init()

/*-------------------------------- Functions --------------------------------*/



function init(){
  launchBoard = 
    [2, 3, 9, 4, null, 5, 7, 6, null,
    7, null, 4, 2, 3, 6, 5, 1, 9, 
    1, 6, 5, 9, 8, 7, null, 3, 4, 
    3, 1, null, 6, 9, 4, 8, null, 5, 
    4, 5, 8, null, 2, 3, 6, 9, 7, 
    null, 2, 6, 7, 5, 8, 3, 4, 1, 
    8, 4, 3, 5, 6, null, null, null, 2, 
    6, 7, 1, 8, 4, 2, 9, 5, 3, 
    5, 9, null, 3, 7, 1, 4, null, 6],
 

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

resetBtn.setAttribute('hidden', true)


h1Msg.textContent = 'PSEUDOKU'

h4Msg.setAttribute('hidden', true)

playerBoard.addEventListener('click', handClick)

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

   if(space === ''){
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
    playerBoard.removeEventListener('click', handClick)
    
  }
  h1Msg.textContent = `${boardsMatch ? 'You Did It!': 'Try Again'}`
  h4Msg.textContent= `${boardsMatch ? (confetti.start(2000)): ''}`

  return boardsMatch
}
