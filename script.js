//variables
const score = document.querySelector('#score-counter');
const choices = document.querySelector('#choices')
const paper = document.querySelector('#paper');
const scissors = document.querySelector("#scissors");
const rock = document.querySelector('#rock');
const openModel = document.querySelector('#open-model');
const rulesModel = document.querySelector('#model');
const closeModel = document.querySelector('#close-model');
const result = document.querySelector("#result");
const userResult = document.querySelector('#user-result');
const houseResult = document.querySelector("#house-result");
const resultDetails = document.querySelector('#result-details');
const playAgain = document.querySelector('#play-again');

// the rules model
openModel.addEventListener('click', ()=>{
    rulesModel.classList.remove('hide')
})
closeModel.addEventListener('click', ()=>{
    rulesModel.classList.add('hide')
})
// generate random number
const generateRandom = () => Math.ceil(Math.random()*3);
let userChoice, userImg;
let houseChoice,houseImg;
let details ;
//perform choices
choices.addEventListener('click',e=>{
    userChoice = e.target.parentElement.parentElement.id;
    let randomNumber = generateRandom()
    switch(e.target.id){
     case '1':
         userImg=`/images/icon-1.svg`
         break;
     case '2':
        userImg=`/images/icon-2.svg`
        break;
     case '3': 
     userImg=`/images/icon-3.svg`
     break;
        default: return;

    }
    choices.classList.add('hide')
    result.classList.remove('hide')
    userResult.querySelectorAll('.choice')[0]
    .classList.add(userChoice);
    houseImg=`/images/icon-${randomNumber}.svg`;
    houseChoice = randomNumber ===1? 'paper'
    :randomNumber===2? 'scissors': 'rock';
    userResult.querySelectorAll('img')[0]
    .src=userImg;
    houseResult.querySelector('.choice')
    .classList.add(houseChoice)
    houseResult.querySelector('img')
    .src=houseImg;
    if(e.target.id==randomNumber)
        details ='draw'
    else if(e.target.id==1&&randomNumber==3
        ||e.target.id==3&&randomNumber==2
        ||e.target.id==2&&randomNumber==1){
        details ='you won'
        userResult.querySelector('.choice')
        .classList.add('win');   
        score.textContent= Number(score.textContent)+1;
        }
        else {
            details ='you lost'
            houseResult.querySelector('.choice')
            .classList.add('win')       
            score.textContent= Number(score.textContent)-1;

        }
    resultDetails.querySelector('h1').textContent= details
})
//play again
playAgain.addEventListener('click', ()=>{
    result.classList.add('hide');
    choices.classList.remove('hide')
    userResult.querySelectorAll('.choice')[0]
    .classList.remove(userChoice);
    userResult.querySelector('.choice')
    .classList.remove('win');
    houseResult.querySelector('.choice')
    .classList.remove(houseChoice)
    houseResult.querySelector('.choice')
    .classList.remove('win')


})