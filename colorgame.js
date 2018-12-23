var arr = [];
arr = randomGeneratecolorArray(6);
var squares = document.querySelectorAll(".square");
var pickedDisplay = document.querySelector("span");
var result = document.querySelector("#result");
var heading = document.querySelector("#heading");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var gameMode = 6;
easy.addEventListener("click", function(){
   arr = randomGeneratecolorArray(3);
   pickedColor = pickFunction();
   gameMode = 3;
   pickedDisplay.textContent = pickedColor;
   for(var i = 0; i < 6; i++){
   	if(i <= 2){
   	  squares[i].style.background = arr[i];
   	}
   	else{
   		squares[i].style.background = "black";
   	}
   }
})
hard.addEventListener("click", function(){
   arr = randomGeneratecolorArray(6);
   pickedDisplay.textContent = pickedColor;
   pickedColor = pickFunction();
   gameMode = 6;
   for(var i = 0; i < 6; i++){
   	  squares[i].style.background = arr[i];
   }
})
var pickedColor = pickFunction();
console.log(pickedColor);
result.style.color = "white";
pickedDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
	squares[i].style.background = arr[i];
	squares[i].addEventListener("click", function(){
	var selectedColor = this.style.background;	
	if(pickedColor === selectedColor){
		result.textContent = "correct!!!!";
		if(gameMode === 3){
		  changeColor(selectedColor , 3);
	    }
	    else{
	    	changeColor(selectedColor, 6);
	    }
		heading.style.background = selectedColor;
	}
	else{
		this.style.background = "black";
	}
});
}
function pickFunction(){
	var num = Math.floor(Math.random() * arr.length);
	return arr[num];
}
function randomGeneratecolorArray(num){
	var arr1 = [];
	for(var i = 0; i < num; i++){
	  arr1.push(randomColor());
    }
	return arr1;
}
function changeColor(color , num){
	for(var i = 0; i < num; i++){
		squares[i].style.background = color;
	}
}
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var str = "rgb(" + r + ", " + g + ", " + b + ")";
	return str;
}
