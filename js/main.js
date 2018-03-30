
var arrPush = [];
var classFlip = document.getElementsByClassName("flip");
var listCards = document.getElementById("cards");


window.onload = ()=>{
	var game = document.getElementById("game");
	
	var cardSChild = document.getElementsByClassName("card");
	var eachBack = document.getElementsByClassName(".back");
	var number =0;

	var arrayCards =["chopper","chopper","franky","franky","goku","goku","ichiog","ichiog","luffy","luffy","naruto","naruto",
	"robin","robin","sasuke","sasuke","zoro","zoro"];
	//var arrPush = [];

	arrayCards.sort(shuffle);

	var frontImgSrc = document.getElementsByClassName("front");
	
	for(let j=0;j<frontImgSrc.length;j++){

		//var classFlip = document.getElementsByClassName("flip");
		// 	frontImgSrc[j].onclick = function(){
		// 			this.className+=" flip";
		// 			arrPush.push(arrayCards[j]);

		// 			//console.log(selectCard());
		// 			//console.log(arrPush);
		// 			number = classFlip.length;
		// 	}
		  // 	var classFlip = document.getElementsByClassName("flip");
		  // 	if(classFlip.length<2){
		  // 		var eventAddClass = frontImgSrc[j].addEventListener("click", function(){
				// 	this.className="face flip";
				// });

		  // 	}else{
		  // 		console.log("sfdfds");
		  // 	}
		 //  var eventAddClass = frontImgSrc[j].addEventListener("click", function(){
			// 		this.className="face flip";
			// 		number++;
			// 		console.log(number);
			// 		if(number>=2){
			// 			removeEventListener("click", eventAddClass);
			// 		}
			// });
		frontImgSrc[j].onclick = function(){
			 selectCard(this);
			getValue(arrayCards[j]);


			
		};

		  		
	}


	
	var backImgSrc = document.getElementsByClassName("back");

	for(let j=0;j<backImgSrc.length;j++){
		backImgSrc[j].style.backgroundImage = "url(img/"+arrayCards[j]+".jpg)";
	}
}

//ket thuc ham onload

function selectCard(index){

	var classFlip = document.getElementsByClassName("flip");
	if(classFlip.length>1){
		return;
	}
	index.className ="face flip";
	if(classFlip.length==2){
		return;
	}
}

function getValue(arr){
	
	arrPush.push(arr);
	if(arrPush.length>2){
		return;
	}
	if(arrPush.length==2){
		let i = arrPush[0];
		let j = arrPush[1];
		if(i==j){
			//goi ham remove
			addRemoveClass();
			arrPush =[];
		}else if(i!=j){
			removeFlip();
			arrPush=[];
		}
	}

}

function addRemoveClass(){
	var classFlip = document.getElementsByClassName("flip");
	for(let n = 0;n<classFlip.length;n++){
		classFlip[n].parentNode.className ="card removeClass";
	}
}

function removeFlip(){
	for(let n=0;n<classFlip.length;n++){
		classFlip[n].className ="face front";
	}
}



function shuffle(){
	return 0.5 - Math.random();
}