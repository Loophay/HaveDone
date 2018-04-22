window.onload=function(){
  var charSheet=[
         ['A','img/A.jpg'],
         ['B','img/B.jpg'],
         ['C','img/C.jpg'],
         ['D','img/D.jpg'],
         ['E','img/E.jpg'],
         ['F','img/F.jpg'],
         ['G','img/G.jpg'],
         ['H','img/H.jpg'],
         ['I','img/I.jpg'],
         ['K','img/K.jpg'],
         ['L','img/L.jpg'],
         ['M','img/M.jpg'],
         ['N','img/N.jpg'],
         ['O','img/O.jpg'],
         ['P','img/P.jpg'],
         ['Q','img/Q.jpg'],
         ['R','img/R.jpg'],
         ['S','img/S.jpg'],
         ['T','img/T.jpg'],
         ['U','img/U.jpg'],
         ['V','img/V.jpg'],
         ['W','img/W.jpg'],
         ['X','img/X.jpg'],
         ['Y','img/Y.jpg'],
         ['Z','img/Z.jpg']
         ];
  var leng=5;
  var speed=10;
  var currentArr=[];
  // 浏览器宽度
  var cw=innerWidth;
  
  var gk=10;
  //生命 分数
  var score=document.getElementsByTagName('span')[0]; 
  var hp=document.getElementsByTagName('span')[1]; 
  // 记录 生命 分数
  var scoreNum=0;
  var hpNum= 10; 

  
  createEle(leng);
  var t=setInterval(function(){
  	drop();
  },300)
  
  document.onkeydown=function(e){
     //   String.fromCharCode(e.keyCode)  A B C D
     // console.log(currentArr)
     for(var i=0;i<currentArr.length;i++){
        if( currentArr[i].innerText ==  String.fromCharCode(e.keyCode) ){
            document.body.removeChild(currentArr[i]);
            currentArr.splice(i,1);
            // 记分  页面
            scoreNum++;
            score.innerText=scoreNum;
            if(scoreNum>gk){
               next();
            }
        }
     } 
  }

  //创建元素
  function createEle(length){
  	for(var i=0;i<length;i++){
       getChar(); 
  	}
  }
  // getChar
  function getChar(){
        var num=Math.floor(Math.random()*charSheet.length);
        //  charSheet[num]   currentArr 
        
        /*
          去重复
             检查currentArr里面是否存在 charSheet[num]
               false 
               true
                 重新产生一个新的随机数
        */
          while(checkRepeat(charSheet[num],currentArr)){
             num=Math.floor(Math.random()*charSheet.length);
          }


        // 视图
         // 创建元素
        var div=document.createElement('div');
         // 位置
        var left=(cw-200)*Math.random()+100;
        var top=Math.random()*100;
         // 样式

        div.style.cssText="font-size:0;text-align:center;line-height:50px;width:50px;height:50px;background-image:url("+charSheet[num][1]+");background-position:center;background-size:cover;color:#0085d0;border-radius:3px;position:absolute;top:"+top+"px;left:"+left+"px;";
        // 文本
        div.innerText=charSheet[num][0];
        // 插入到页面 
        document.body.appendChild(div);

        // 数据
        currentArr.push(div);
    
  }  
  // checkRepeat 去重

  function checkRepeat(cs,ca){
     /*
       [
          div,
          div,
       ]
 
       ['Y','img/Y.jpg']
     */
      for(var i=0;i<ca.length;i++){
          if(ca[i].innerText == cs[0]){
             return true;
          }
      }

      return false;
  }

  // drop
  function drop(){
       for(var i=0;i<currentArr.length;i++){
       	  // 获取元素垂直距离
          // currentArr[i].offsetTop
            var v=currentArr[i].offsetTop;
            currentArr[i].style.top = v+speed +'px';
           if(v>500){
           	  document.body.removeChild(currentArr[i]);
           	  currentArr.splice(i,1);//清除（i为数组下标，从i开始的1个元素）
              // 生命值  
              hpNum--;
              hp.innerText=hpNum;
           }
           if(currentArr.length<leng){
           	   getChar();
           }  
       }  	
  }

  // next

  function next(){
      // 视图
      /*
         元素  分数  生命

      */
      clearInterval(t);
      for(var i=0;i<currentArr.length;i++){
         document.body.removeChild(currentArr[i]);
      }
      
      // 数据
      currentArr=[];
      leng++;
      speed++;
      scoreNum=0;
      hpNum=10;
      score.innerText=0;
      hp.innerText=10;

      createEle(leng);
      t=setInterval(function(){
        drop();
      },300)

  }



}