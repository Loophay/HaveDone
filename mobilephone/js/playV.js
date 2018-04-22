window.addEventListener('load',function(){
  var imgs=document.querySelectorAll('.wrap img');
  var videos=document.querySelectorAll('.wrap video');
  
  var flag=true;
  for(let i=0;i<imgs.length;i++){
  	 imgs[i].addEventListener('touchend',function(){
  	 	if(flag){
  	 		flag=false;
  	 		imgs[i].src='img/pause.png';
  	 		videos[i].play();
  	 	}else{
  	 		flag=true;
  	 		imgs[i].src='img/play.png';
  	 		videos[i].pause();
  	 	}
  	 	 
  	 },false)
  	 
  }
	var  scrollN=document.querySelector('.scrollN');
	var  navL =document.querySelector('.navL');
	var  dirL=0,posX=0,sw=scrollN.offsetWidth,nw=navL.offsetWidth,max=nw-sw;
	
	scrollN.addEventListener('touchstart',function(e){
		var ev=e.changedTouches[0];
		posX= ev.pageX;
		dirL=scrollN.offsetLeft;
		
	},false)
	scrollN.addEventListener('touchmove',function(e){
		var ev=e.changedTouches[0];
		console.log(scrollN.offsetLeft)
        var lefts=dirL + (ev.pageX - posX);
        if(lefts>0){
        	lefts=0;
        }
        if(lefts <= max){
        	lefts = max;
        }
        scrollN.style.left= lefts +'px';
	},false)
	
	var main=document.querySelector('main');
	var wrap=document.querySelector('.wrap');
	var dirT=0,posY=0,pw=main.offsetHeight,dw=wrap.offsetHeight,maxh=dw-pw;
	wrap.addEventListener('touchmove',function(t){
		var th=t.changedTouches[0];
		posY=th.pageY;
		dirT=wrap.offsetTop;
	},false)
  wrap.addEventListener('touchmove',function(t){
		var th=t.changedTouches[0];
		console.log(wrap.offsetTop);
		var tops=dirT + (th.pageY-posY);
		if(tops>0){
			tops=0;
		}
		if(tops<=maxh){
			tops=maxh;
		}
		wrap.style.top=tops + 'px'
	},false)
	
    var  myScroll= new IScroll('#scroll');
},false)

