var box2=document.querySelector('.box2')
var img=document.querySelector('.box2 img')        
var photo=['images/图层 1.png','images/图层 26.png','images/图层 27.png']

var index=0;
var time=null;

time=setInterval(function(){
    if(index>=0){
        box2.innerHTML=`<img src="${photo[index]}">`
        index++
        console.log(index);
    }
    if(index==4){
        box2.innerHTML='<img src="images/图层 28.png" alt="">'
        index=1
    }
    
},2000)       