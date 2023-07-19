
//button roll dice
const btnRoll = document.getElementById('btnRoll');
// Player name
const userP = document.querySelector('.userP');

//it contain a number of points
let comPoint = [];
let userPoint = [];

const pcom = document.querySelector('.pcom');
const puser = document.querySelector('.puser');

//add button for new game 
var btnnewGame = document.getElementById("btnnewGame");
var btnCreate = document.createElement("BUTTON");
btnCreate.classList.add('btnbutton');
btnCreate.innerHTML = "New Game";


// new button created 
let btnButton = document.querySelector("btnbutton");


function rolldice(){

//generate random number
const randComputer = Math.floor(Math.random() * 6) +1; 

//generate random number
const randUser = Math.floor(Math.random() * 6) +1; 

  //images of dice 
const diceImg = 'src= "https://drive.google.com/drive/folders/1fVaI3rKd72GVLMpgDXSqDEQo5tzuTZBn?usp=sharing"'+randComputer+'.png';

document.querySelectorAll('img')[0].setAttribute('src',diceImg);


//images of dice 
const diceImg1 = 'https://drive.google.com/drive/folders/1fVaI3rKd72GVLMpgDXSqDEQo5tzuTZBn?usp=sharing/'+randUser+'.png';

document.querySelectorAll('img')[1].setAttribute('src',diceImg1);

  if (randComputer > randUser){
    document.querySelector('h2').innerHTML = "💻 Computer earn point";
    comPoint.push('|'); 
}
else if (randComputer < randUser){
    document.querySelector('h2').innerHTML = "🧑‍💻You  earn point 🎉";
    userPoint.push('|');
}
else{
    document.querySelector('h2').innerHTML = "Its a Draw 🙂";
}


var cp = comPoint.length;
var up = userPoint.length;

pcom.textContent = `💻Computer- ${comPoint} = ${cp}`;
puser.textContent = `🧑‍💻${userP.textContent}- ${userPoint} = ${up}`;

if (cp == 5 || up == 5){
  switch(cp) {
    case 5:
      document.querySelector('h1').innerHTML = `You loose! 😢`;
      gameOver();
      btnnewGame.appendChild(btnCreate);
      break;
    default:
      document.querySelector('h1').innerHTML = `You Win! 🎉`;
      gameOver();
      btnnewGame.appendChild(btnCreate);
    }
}



}




//a function that Disable a button after win or loose
function gameOver (){
  btnRoll.disabled = true;
}

// stats 



const userName = prompt("Enter Your Name: ");

userP.textContent = userName + " 🧑‍💻";

btnRoll.addEventListener('click',myFunction);



//my function
function myFunction (){
    rolldice();
    

}


//function for checking input 


  //  if(userName == "" || userName == " " || userName == null){
 //   alert("Please input your name!");

 // best of 5

 btnCreate.addEventListener("click", newgamereload);

 function newgamereload(){
  window.location.reload();
 }
