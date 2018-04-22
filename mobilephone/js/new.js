document.addEventListener('DOMContentLoaded',function(){
	var imgBox=document.querySelector('.imgBox');
	var banner= document.querySelector('.banner');
	var bw=banner.offsetWidth;
	var lis=document.querySelectorAll('.btn li')
	/*
	    当前位置  + （手指位置 - 初始位置 ）
	 * 
	 * 
	 * dirX  /  imgW
	 * */
	var  dirX=0,posX=0,num=0,child=0;
	imgBox.innerHTML+=imgBox.innerHTML;
	child=imgBox.children.length;
	imgBox.style.width=child*100+'%'
	/*document.addEventListener('touchstart',function(ev){
		ev.preventDefault();
	});*/
	imgBox.addEventListener('touchstart',function(e){
		var  ev=e.changedTouches[0];
		//dirX= imgBox.offsetLeft;
		posX= ev.pageX;
		imgBox.style.transition='none';
		var num=Math.round(imgBox.offsetLeft/bw)
		console.log(num);
		if(num==0){
			num=-lis.length;
		}
		if(-num==child-1){
			num=-(lis.length-1);
		}
		imgBox.style.left=num*bw+'px';
		dirX= imgBox.offsetLeft;
	},false)
	
	
	imgBox.addEventListener('touchmove',function(e){
		var  ev=e.changedTouches[0];
		
		imgBox.style.left= dirX + (ev.pageX - posX ) +'px';
		
	},false)
	
	imgBox.addEventListener('touchend',function(){
		 dirX= imgBox.offsetLeft;
		 num=Math.round( dirX/bw);
		 imgBox.style.transition='0.5s';
		 imgBox.style.left = num * bw +'px';
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

