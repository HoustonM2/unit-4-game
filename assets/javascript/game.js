var wincount = 0;
var losscount = 0;
var tn2 = Math.floor(Math.random() * 100) + 20;
$("#tn2").text(tn2);



var pic1 = Math.floor(Math.random() * 11) + 1;
var pic2 = Math.floor(Math.random() * 11) + 1;
var pic3 = Math.floor(Math.random() * 11) + 1;
var pic4 = Math.floor(Math.random() * 11) + 1;


$("#wincount").html(wincount);
$("#losscount").html(losscount);

var count = 0;
$("#yourscore").text(count);

function restartGame() {

tn2 = Math.floor(Math.random() * 101) + 19;
$("#tn2").text(tn2);
pic1 = Math.floor(Math.random() * 11) + 1;
pic2 = Math.floor(Math.random() * 11) + 1;
pic3 = Math.floor(Math.random() * 11) + 1;
pic4 = Math.floor(Math.random() * 11) + 1;
count = 0;
$("#yourscore").text(count);

}

function win() {

	alert("You win!");
	wincount ++;
	$("#wincount").text(count);
	restartGame();
}

function lose() {

	alert("You lose!");
	losscount ++;
	$("#losscount").text(losscount);
	restartGame();
}

$('#pic1').on ('click', function(){
    count = count + pic1;
    
    $('#yourscore').text(count); 
          
        if (count === tn2){
          win();
        }
        else if (count > tn2){
          lose();
        }   
  });  

$('#pic2').on ('click', function(){
    count = count + pic2;
    
    $('#yourscore').text(count); 
         
        if (count === tn2){
          win();
        }
        else if (count > tn2){
          lose();
        }   
  });  

$('#pic3').on ('click', function(){
    count = count + pic3;
    
    $('#yourscore').text(count); 
          
        if (count === tn2){
          win();
        }
        else if (count > tn2){
          lose();
        }   
  });  

$('#pic4').on ('click', function(){
    count = count + pic4;
    
    $('#yourscore').text(count); 
         
        if (count === tn2){
          win();
        }
        else if (count > tn2){
          lose();
        }   
  });  
