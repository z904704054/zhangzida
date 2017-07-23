/**
 * Created by shy on 2017/7/15.
 */
var conImage1 = document.getElementById("conimage1");
var unfold = document.getElementById("unfold");
var unfoldCode = document.getElementById("unfold-code");
var start = document.getElementById("start");
var conImage2 = document.getElementById("conimage2");
var unfold2 = document.getElementById("unfold2");
var unfoldCode2 = document.getElementById("unfold-code2");
var start2 = document.getElementById("start2");
var conImage3 = document.getElementById("conimage3");
var unfold3 = document.getElementById("unfold3");
var unfoldCode3 = document.getElementById("unfold-code3");
var start3 = document.getElementById("start3");
var conImage4 = document.getElementById("conimage4");
var unfold4 = document.getElementById("unfold4");
var unfoldCode4 = document.getElementById("unfold-code4");
var start4 = document.getElementById("start4");
//-----------------头部------------------------
$(function () {
    $('.header-right>ul>li').click(function () {
        $('.header-right>ul>li').removeClass('current');
        $('.header-right>ul>li>a').css('color', 'black');
        $(this).addClass('current');
        $(this).children().css('color', 'rgb(4,169,255)');
    })
})
//-------------------头部结束--------------
conImage1.addEventListener("mouseover", function () {
    unfold.style.display = "block";
})
//conImage1.onmouseout=function(){
//    unfold.style.display="none";
//}
conImage1.addEventListener("mouseout", function () {
    unfold.style.display = "none";
})
start.addEventListener("mouseover", function () {
    //console.log("sdddddddddddddddddddddddddddddddddd");
    unfoldCode.style.display = "block";
})
start.addEventListener("mouseout", function () {
    //console.log("sdddddddddddddddddddddddddddddddddd");
    unfoldCode.style.display = "none";
})

conImage2.addEventListener("mouseover", function () {
    unfold2.style.display = "block";
})
//conImage1.onmouseout=function(){
//    unfold.style.display="none";
//}
conImage2.addEventListener("mouseout", function () {
    unfold2.style.display = "none";
})
start2.addEventListener("mouseover", function () {
    //console.log("sdddddddddddddddddddddddddddddddddd");
    unfoldCode2.style.display = "block";
})
start2.addEventListener("mouseout", function () {
    //console.log("sdddddddddddddddddddddddddddddddddd");
    unfoldCode2.style.display = "none";
})
conImage3.addEventListener("mouseover", function () {
    unfold3.style.display = "block";
})
//conImage1.onmouseout=function(){
//    unfold.style.display="none";
//}
conImage3.addEventListener("mouseout", function () {
    unfold3.style.display = "none";
})
start3.addEventListener("mouseover", function () {
    //console.log("sdddddddddddddddddddddddddddddddddd");
    unfoldCode3.style.display = "block";
})
start3.addEventListener("mouseout", function () {
    //console.log("sdddddddddddddddddddddddddddddddddd");
    unfoldCode3.style.display = "none";
})

conImage4.addEventListener("mouseover", function () {
    unfold4.style.display = "block";
})
//conImage1.onmouseout=function(){
//    unfold.style.display="none";
//}
conImage4.addEventListener("mouseout", function () {
    unfold4.style.display = "none";
})
start4.addEventListener("mouseover", function () {
    //console.log("sdddddddddddddddddddddddddddddddddd");
    unfoldCode4.style.display = "block";
})
start4.addEventListener("mouseout", function () {
    //console.log("sdddddddddddddddddddddddddddddddddd");
    unfoldCode4.style.display = "none";
})
var gameCon = document.getElementById("game-con");
var gameConLunbo = document.getElementById("game-con-lunbo");
var uls = gameConLunbo.children;
var gameExperArrow = document.getElementById("game-exper-arrow");
var arrRight = document.getElementById("game-exper-arrRight");
var arrLeft = document.getElementById("game-exper-arrLeft");
gameCon.onmouseover = function () {
    gameExperArrow.style.display = "block";
};
gameCon.onmouseout = function () {
    gameExperArrow.style.display = "none";
};
var index = 0;
arrRight.onclick = function () {
    if (index < uls.length - 1) {
        index++;
        var target = - index * gameCon.offsetWidth;
        animate(gameConLunbo, target);
    }
};
arrLeft.onclick = function () {
    if (index > 0) {
        index--;
        var target = - index * gameCon.offsetWidth;
        animate(gameConLunbo, target);
    }
};


