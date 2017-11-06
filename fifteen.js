function main() {
   
 //Extra feature: fade animation for movable pieces

	var area = document.getElementById('puzzlearea');
  var array = area.getElementsByTagName('div');
  var shuffle = document.getElementById('shufflebutton');
  var spacex = 300;
  var spacey = 300;
  
  for (var i=0; i<array.length; i++)
  {
    array[i].setAttribute("class","puzzlepiece");
    $(array[i]).css("backgroundSize", "400px 400px");
    var top = (parseInt(i/4)*100) + 'px';
    var left = (parseInt(i%4)*100) + 'px';
    array[i].style.left = left;
    array[i].style.top = top; 
    array[i].style.backgroundPosition = '-' + array[i].style.left + ' ' + '-' + array[i].style.top;
    

    array[i].onmouseover=function() {
        if (validMove(this)) { 
          $(this).addClass("movablepiece");
          $(this).fadeTo("slow", 0.5);
          $(this).fadeTo("slow", 1);

        } 
      };

    array[i].mouseleave=function(){
        $(this).removeClass("movablepiece");
        
      };

    array[i].onclick=function() {
        if (validMove(this)) {
        switchPiece(this);
        
        }
      };

    }

    var validMove = function(move) {
    if(((parseInt($(move).css("top")) - spacey == 100 || parseInt($(move).css("top")) - spacey == -100) && parseInt($(move).css("left")) - spacex == 0) ||
    ((parseInt($(move).css("left")) - spacex == 100 || parseInt($(move).css("left")) - spacex == -100) && parseInt($(move).css("top")) - spacey == 0)) {
      return true;
    }
    else { 
      return false; 
    }
  };

      var switchPiece = function(piece){
        var tempx = spacex;
        var tempy = spacey;

        spacey = parseInt($(piece).css("top"));
        spacex = parseInt($(piece).css("left"));

        $(piece).css("top", tempy);
        $(piece).css("left", tempx);
        
    }

    var move = function(){
      var array2 = [];

      for (var i = 0; i < array.length; i++) {
        if(validMove(array[i])==true){
          array2.push(array[i]);
        }
      }
      var randomPiece = array2[Math.floor(Math.random() * array2.length)];

      switchPiece(randomPiece);
    };

    shuffle.onclick=function() {
    var shuffles = Math.floor(Math.random()*100);

    for (var i=0; i < shuffles; i++) {
      move();
  
    }

  };

      				
}
  
window.onload = function(){
	main();

}