/**
 * Created by Administrator on 2017/7/15.
 */
var bannerBox = document.getElementById("bannerBox");
var bannerImg = document.getElementById("bannerImg");
var bannerIndex = document.getElementById("bannerIndex");
var banImg = document.getElementById("banImg");
var smallImg = document.getElementById("smallImg");
var btnImg = document.getElementById("btnImg");
var imgWidth = banImg.children[0].offsetWidth;
var lis = banImg.children;
var spans = bannerIndex.children;
var imgIndex;

//console.log(imgWidth);
$('.header-right>ul>li').mouseenter(function () {
    $('.header-right>ul>li').removeClass('current');
    $(this).addClass('current');
    // $(this).children().css('color', 'rgb(4,169,255)');
});
$('.header-right>ul>li').mouseleave(function () {
    $('.header-right>ul>li').removeClass('current');
    // $(this).children().css('color', 'black');
})
$('.header-right>ul>li').click(function () {
    // $('.header-right>ul>li').removeClass('current');
    $('.header-right>ul>li>a').css('color', '');
    $(this).children().css('color', 'rgb(4,169,255)');
    // $(this).addClass('current');
})


//$('#smallImg').mouseover(function(){
//
//})


for (var i = 0; i < spans.length; i++) {
    spans[i].setAttribute("index", i);
    spans[0].style.backgroundColor = "red";
    spans[i].onclick = function () {
        for (var j = 0; j < spans.length; j++) {
            spans[j].style.backgroundColor = "white";
        }
        this.style.backgroundColor = "red";
        var target = -this.getAttribute("index") * imgWidth;
        animate(banImg, target);

        imgIndex = this.getAttribute("index");
    }
}







function autoImg() {
    if (imgIndex == banImg.children.length - 1) {
        imgIndex = 0;
        banImg.style.left = 0 + "px";
    }
    imgIndex++;
    var target = -imgIndex * imgWidth;
    autoAnimate(banImg, target);

    //for(var j; j<spans.length; j++){
    //    spans[j].style.backgroundColor = "white";
    //}
    //if(imgIndex < spans.length-1){
    //    imgIndex++;
    //}else{
    //    imgIndex = 0;
    //}
    //spans[imgIndex].style.backgroundColor = "px";
}


//
//var time = null;
//time = setInterval(autoImg,3000);

//$('#smallImg').mouseover(function(){
//    $('#smallImg>a>img').attr('src','img/22.png');
//})
smallImg.onmouseover = function () {
    btnImg.src = "images/index_cus/22.png";
}
smallImg.onmouseout = function () {
    btnImg.src = "images/index_cus/00.png";
}
$('#btnImg').mouseenter(function () {
    $('#smalltwoimg').css('display', 'block');
}).mouseleave(function () {
    $('#smalltwoimg').css('display', 'none');
})





function autoAnimate(obj, target) {
    clearInterval(obj.timerId);
    obj.timerId = setInterval(function () {
        var currentLeft = obj.offsetLeft;
        var step = currentLeft < target ? 1 : -1;
        currentLeft += step;
        //���Ŀ��λ�ú͵�ǰλ��֮��ľ��룬С��һ����������ֱ�Ӹ�Ŀ��ֵ��
        //���Ŀ��λ�ú͵�ǰλ��֮��ľ��룬���ڵ���һ������������һ����
        if (Math.abs(target - currentLeft) < Math.abs(step)) {
            clearInterval(obj.timerId);
            obj.style.left = target + "px";
        } else {
            obj.style.left = currentLeft + "px";
        }
        //console.log("1");
    }, 10);
}

function animate(obj, target) {
    clearInterval(obj.timerId);
    obj.timerId = setInterval(function () {
        var currentLeft = obj.offsetLeft;
        var step = (target - currentLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        currentLeft += step;
        obj.style.left = currentLeft + "px";
        if (currentLeft == target) {
            clearInterval(obj.timerId);
        }
    }, 25);
}

//
//function autoAnimate(obj,target){
//    clearInterval(obj.timerId);
//    obj.timerId = setInterval(function () {
//        var currentLeft = obj.offsetLeft;
//        var step = currentLeft < target ? 10:-10;
//        currentLeft += step;
//        if(currentLeft < -1349*3){
//            obj.style.left = currentLeft+"px";
//        }else{
//            obj.style.left = currentLeft+"px";
//        }
//
//    },20);
//}




//---------------------------------------------------------------
//var wrap = document.getElementById("wrap");
var dwImg = document.getElementById("dwImg");
var olImg = document.getElementById("olImg");
var acImg = document.getElementById("acImg");
var ctImg = document.getElementById("ctImg");
var dwIntroduce = document.getElementById("dwIntroduce");
var onlIntroduce = document.getElementById("onlIntroduce");
var acIntroduce = document.getElementById("acIntroduce");
var ctIntroduce = document.getElementById("ctIntroduce");
//var dwIntroduce = document.getElementsByClassName("dwIntroduce");
//var onlIntroduce = document.getElementsByClassName("onlIntroduce");
//var acIntroduce = document.getElementsByClassName("acIntroduce");
//var ctIntroduce = document.getElementsByClassName("ctIntroduce");
var dianwan = document.getElementById("dianwan");
var online = document.getElementById("online");
var account = document.getElementById("account");
var contact = document.getElementById("contact");


var arrImg = ['dianwan0.png', 'online0.png', 'account0.png', 'game0.png'];
var arrImg2 = ['dianwan1.png', 'online1.png', 'account1.png', 'game1.png'];
var arrName = [dwImg, olImg, acImg, ctImg];
var arrName2 = [dwIntroduce, onlIntroduce, acIntroduce, ctIntroduce];
var arrName3 = [dianwan, online, account, contact];

for (var i = 0; i < arrName.length; i++) {
    replaceImg(arrName[i], arrName2[i], arrImg2[i], arrImg[i]);
}

function replaceImg(obj, obj2, imgSrcaf, imgSrcbf) {
    //var imgDiv = obj.parentNode.childNodes[1];
    obj.onmouseover = function () {
        //var dianW = arrImg[i].replace(/\d/g, '1');
        obj.src = "images/index_plat/" + imgSrcaf;
        obj2.style.display = "block";
        visibleDiv(obj2, 1);
        //obj2.onmouseover = function(){
        //    obj2.style.display = "block";
        //}

    }

    //dwIntroduce.onmouseover = function(){
    //    dwIntroduce.style.display = "block";
    //}

    obj.onmouseout = function () {
        //var dianW = arrImg[i].replace(/\d/g, '0');
        obj.src = "images/index_plat/" + imgSrcbf;
        //clearInterval(obj2.timerId);
        visibleDiv(obj2, 0);
        //obj2.style.display = "none";
    }

    // obj2.onmouseout = function () {
    //     obj2.style.display = "block";

    // }
}

function visibleDiv(obj2, target) {
    clearInterval(obj2.timerId);
    obj2.timerId = setInterval(function () {
        var current = +obj2.style.opacity;
        var step = current < target ? 0.1 : -0.1;
        current += step;

        if (Math.abs(target - current) < Math.abs(step)) {
            clearInterval(obj2.timerId);
            obj2.style.opacity = target;
        } else {
            obj2.style.opacity = current;
        }
        if (current < 0) {
            clearInterval(obj2.timerId);
            obj2.style.opacity = target;
        } else {
            obj2.style.opacity = current;
        }

    }, 100)
}
$('.nn').mouseenter(function () {
    $('.bold').hide();
    $(this).children().last().show();
})
//function visibleDiv2(obj2,target){
//    clearInterval(obj2.timerId);
//    obj2.timerId = setInterval(function () {
//        var current = +obj2.style.opacity;
//        var step = -0.1;
//        current += step;
//
//        if(current<0){
//            clearInterval(obj2.timerId);
//            obj2.style.opacity = target;
//        }else {
//            obj2.style.opacity = current;
//        }
//
//    },100)
//}