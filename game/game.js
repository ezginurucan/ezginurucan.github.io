var play= document.querySelector(".play-area");
var point= document.querySelector("#point");
var fruitList=["apple.jpeg","banana.jpeg","peach.jpeg","orange.jpeg","strawberry.jpeg"];
var counter=0;
var time= document.querySelector("#time");
remainingTime=60;
function randomFruit(){
    var selectRandom=fruitList[Math.floor(Math.random()*5)];
    var fruit= document.createElement('img');
    fruit.setAttribute('src',selectRandom);
    fruit.style.top=Math.floor(Math.random()*450)+'px';
    fruit.style.left=Math.floor(Math.random()*750)+'px';
    fruit.style.width='150px';
    fruit.style.height='200px';
    play.appendChild(fruit);
    fruit.addEventListener('click', function() {
		play.removeChild(fruit);
        counter++;
        point.innerHTML = 'Score: ' + counter;
	});
}
function endGame() {
    clearInterval(intervalId);
    var fruits = document.getElementsByClassName('fruit');
    for (var i = 0; i < fruits.length; i++) {
      fruits[i].style.pointerEvents = 'none';
    }
    play.innerHTML = '<h1>Game Over!</h1><h2>You scored ' + counter + ' points.</h2><button><a href="game.html">Play Again</a></button>';

  }
randomFruit();
intervalId = setInterval(randomFruit, 1000);
setInterval(function() {
    if (remainingTime>0){remainingTime--;}
    else {
        endGame();
        remainingTime=0;
    }
    time.innerHTML = 'Time: ' + remainingTime+'second';
    
}, 1000);
