/**
 * Created by guangkang on 2017/7/15.
 */
//footer底部中关注我们弹出二维码
var guanzhuwomen = document.getElementById("guanzhuwomen");
var erweima = document.getElementById("erweima");
guanzhuwomen.onmouseover = function(){
    erweima.style.display = "block";
}
guanzhuwomen.onmouseout = function(){
    erweima.style.display = "none";
}
//footer底部中关注我们弹出二维码结束

//底部文字跑马灯效果

//var gun = document.getElementById("gun");
//var dome =document.getElementById("dome");
var dome1 =document.getElementById("dome1");
var timer = null;
//var dome2 =document.getElementById("dome2");
//var spanwidth =dome.offsetLeft;

 timer = setInterval(text,100);
function text(){
    var current = dome1.offsetLeft;
    var step = 10;
    current +=step;
    if(current>800){
        dome1.style.left = step +"px";
    }else{
        dome1.style.left = current +"px";
    }
}
dome1.onmouseover = function(){
    clearInterval(timer);
}
dome1.onmouseout = function () {
   timer=setInterval(text,100);
}




