window.onload = function(){
 var box=document.getElementsByClassName('box')[0];
 var she=[{x:0,y:0} , {x:0,y:1} , {x:0,y:2}];
 var dir=39;
 var score=0;
  var food=null;
  var flag={'0_0':true,'0_1':true,'0_2':true};
 drewline();
 drewshe();
 dropFood();
 document.onkeydown=function(e){
     // console.log(e.keyCode);
     // 37 39  38 40
     // dir  e.keyCode
     if(Math.abs(dir-e.keyCode)==2){
        return;
     }
     dir=e.keyCode;
   }

 var t=setInterval(move,200);

 function move(){
 	//var dir=39;
 	//var flag={'0_0':true,'0_1':true,'0_2':true};
	  if(dir==39){
     	var oldtou=she[she.length-1];//{x:0,y:2}
      	var newtou={x:oldtou.x,y:oldtou.y+1}
     }else if(dir==37){
        var oldtou=she[she.length-1];//{x:0,y:2}
        var newtou={x:oldtou.x,y:oldtou.y-1}
     }else if(dir==38){
        var oldtou=she[she.length-1];//{x:0,y:2}
        var newtou={x:oldtou.x-1,y:oldtou.y}
     }else if(dir==40){
        var oldtou=she[she.length-1];//{x:0,y:2}
        var newtou={x:oldtou.x+1,y:oldtou.y}
     }
    if(newtou.x<0||newtou.x>34||newtou.y<0||newtou.y>34||flag[newtou.x+'_'+newtou.y]){
       clearInterval(t); 
       var start=confirm('你输了！本次得分：'+score+'再来一局？');   
        if (start){
          restart(); 
          return ;
        }else{
          close();
        }
       
     }
      if(newtou.x==food.x&&newtou.y==food.y){
         she.push(newtou);
         flag[newtou.x+"_"+newtou.y]=true;
         drewshe();
         document.getElementById(food.x+"_"+food.y).classList.remove('food');
         dropFood();
         score++;
         document.getElementById("score")=score;
     }else{
       she.push(newtou);
       flag[newtou.x+"_"+newtou.y]=true;
       var weiba=she[0];
       she.shift();
       delete flag[weiba.x+"_"+weiba.y];
       // 视图
       document.getElementById(weiba.x+"_"+weiba.y).classList.remove('she');
       drewshe();
     }
 }

 function drewshe(){
	// var she=[{x:0,y:0} , {x:0,y:1} , {x:0,y:2}]
	for(var i=0;i<she.length;i++){
		var x=she[i].x;
		var y=she[i].y;
		document.getElementById(x+"_"+y).classList.add('she');
	}
 }
 function drewline(){
	 // var box=document.getElementsByClassName('box')[0];
	 for(var i=0;i<35;i++){
		for(var j=0;j<35;j++){
			var div=document.createElement('div');
			div.classList.add('block');
			div.id=i+'_'+j;
			box.appendChild(div);
		}
	}
  }
  function dropFood(){
     var i=Math.floor(Math.random()*20);
     var j=Math.floor(Math.random()*20);
     // i_j  flag[]
     //{x:0,y:0}
     while(flag[i+"_"+j]){
         i=Math.floor(Math.random()*20);
         j=Math.floor(Math.random()*20);
     }
     food={x:i,y:j};
     document.getElementById(i+'_'+j).classList.add('food');

  }
  function restart(){
    document.getElementById(food.x+'_'+food.y).classList.remove('food');
    for(var i=0;i<she.length;i++){
      document.getElementById(she[i].x+"_"+she[i].y).classList.remove('she');
    }
    she=[{x:0,y:0} , {x:0,y:1} , {x:0,y:2}];
    food=null;
    score=null;
    flag={'0_0':true,'0_1':true,'0_2':true};
    dir=39;
    drewshe();
    dropFood();
    t=setInterval(move,200)
  }
 }