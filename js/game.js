var arrPush = [];
var classFlip = document.getElementsByClassName("flip");
var listCards = document.getElementById("cards");

var game = document.getElementById("game");
var cardChild = document.getElementById("card");
var backFace = document.getElementsByClassName("back");
var frontFace = document.getElementsByClassName("front");

var myBar = document.getElementById('myBar');

var timer = document.getElementById("timer");
var dai = 100;

var introGame = document.getElementById("playGame");
var win = document.getElementById("wingame");
var lose = document.getElementById("losegame");

var arrayCards = ["chopper","chopper","franky","franky","goku","goku","ichiog","ichiog","luffy","luffy","naruto","naruto",
	"robin","robin","sasuke","sasuke","zoro","zoro"];

//music
var song = new Audio();
var songFlip = new Audio();
var songInConrrect = new Audio();
var songRemind10s = new Audio();
var songRemind5s = new Audio();

window.onload = ()=>{



	//process bar

	//shuffle item in array
	arrayCards.sort(shuffle);

	//function add image to cards
	addImgintoCard();

	clickBackFace();

	btn_play.onclick = ()=>{
		//music while press btn play game
		song.src ="music/normal.MP3";
		song.play();

		//hide the box modal intro game
		introGame.style.display = "none";

		var dai =60;
		var id = setInterval(() => {
			dai--;
		  myBar.style.width = dai+'%';
		  timer.textContent = dai;
		  if(dai==10){
		  	songRemind10s.src = "music/10s.mp3";
		  	songRemind10s.play();
		  }
		  if(dai==5){
		  	songRemind5s.src = "music/5s.mp3";
		  	songRemind5s.play();
		  }

		  if(winGame()===18){
		  	clearInterval(id);
		  	win.style.display = 'block';
		  	song.src ="music/win.MP3";
			song.play();
		  }
			

		  if(dai==0 && winGame()<18){
		  	clearInterval(id);
		  	song.src ="music/lose.MP3";
			song.play();
			lose.style.display="block";
		  }
		  	
		}, 1000)
	}
	//end btnplay game

	btnReset.onclick = ()=>{
		location.reload();
	}

	btnReset2.onclick = ()=>{
		location.reload();
	}

	//end reset onclick

	




}



// function add img into back className
function addImgintoCard(){
	for(let i=0;i<backFace.length;i++){
		backFace[i].style.backgroundImage = "url(img/"+arrayCards[i]+".jpg)";

	}
}

// 
function clickBackFace(){
	for(let i=0; i<frontFace.length;i++){
		frontFace[i].onclick = ()=>{
			arrPush.push(arrayCards[i]);
			console.log(arrPush);
			//kiem tra chi dc lan 2 la bai
			if(checkNumberFlipCards()<2){
				addClassName(frontFace[i]);
				songFlip.src ="music/flip.MP3";
				songFlip.play();
			}
			if(checkNumberFlipCards()>1){
				checkCards();
			}
		}
	}
}

// function click flip cards
function addClassName(n){
	n.className +=" flip";
}

//function check number of flip card
function checkNumberFlipCards(){
	var flipCards = document.getElementsByClassName("flip");
	return flipCards.length;
}

//function check two cards is the same

function checkCards(){
	if(arrPush[0]===arrPush[1]){
		//neu 2 hinh giong nhau thi an di bang class hide
		setTimeout(() => {
		  hideCards();
		}, 1000)

	}else{
		setTimeout(() => {
		  flipBack();
		  songInConrrect.src ="music/incorrect.MP3";
		  songInConrrect.play();
		}, 1000)
	}
}

//function hide cards 

function hideCards(){
	for(let i=0; i<classFlip.length;i++){
		classFlip[i].parentNode.className +=" remove";
	}
	var cardRemove = document.getElementsByClassName("remove");
	var cardFlipChild = document.getElementsByClassName("flip");

	for(let j=0;j<cardFlipChild.length;j++){
		cardFlipChild[j].className ="face front";
		j--;
	}
	arrPush = [];
	flipCards = 0;
}

//function flip card while the couple card not the same
function flipBack(){
	for(let i=0;i<classFlip.length;i++){
		classFlip[i].className = "face front";
		i--;
	}
	arrPush = [];
	flipCards = 0;
}

//function win
function winGame(){
	var cardRemove = document.getElementsByClassName("remove");
	return cardRemove.length;
}



//function shuffle item

function shuffle(){
	return 0.5 - Math.random();
}