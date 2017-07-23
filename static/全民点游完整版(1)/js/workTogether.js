/**
 * Created by xuan on 2017/7/15.
 */
window.onload = function () {
    var tab = document.getElementById("tab");
    var lis1 = tab.children[0].children;
    var content = document.getElementById("content");
    var arr = [];
    var phones = content.children;
    // var bannerBox = document.getElementById("bannerBox");
    // var bannerImg = document.getElementById("bannerImg");
    // var bannerIndex = document.getElementById("bannerIndex");
    // var banImg = document.getElementById("banImg");
    // var smallImg = document.getElementById("smallImg");
    // var btnImg = document.getElementById("btnImg");
    // var imgWidth = bannerImg.offsetWidth;
    // var lis = banImg.children;
    // var spans = bannerIndex.children;
    // var imgIndex;

    //console.log(imgWidth);
    //头部开始
    $('.header-right>ul>li').click(function () {
        $('.header-right>ul>li').removeClass('current');
        $('.header-right>ul>li>a').css('color', 'black');
        $(this).addClass('current');
        $(this).children().css('color', 'rgb(4,169,255)');
    })
    //头部结束
    for (var i = 0; i < data.length; i++) {
        arr[i] = '' +
            '<div class="phone">' +
            '<img src="images/' + (i + 1) + '.png" alt=""/>' +
            '<span class="phone-left">' +
            '<p>' + data[i]["one"] + '</p>' +
            '<p>' + data[i]["two"] + '</p>' +
            '<a href="#">立即接入</a>' +
            '</span>' +
            '</div>'
    }
    content.innerHTML = arr.join("");
    phones[0].className = "phone current1";
    for (var i = 0; i < lis1.length; i++) {
        lis1[i].index = i;
        lis1[i].onclick = function () {
            for (var j = 0; j < lis1.length; j++) {
                lis1[j].style.backgroundImage = "url(images/" + (j + 1) + (j + 1) + ".png)";
                lis1[j].removeAttribute("class");
                phones[j].className = "phone";
            }
            this.style.backgroundImage = "url(images/" + (this.index + 1) + (this.index + 1) + "_" + "1" + ".png)";
            this.setAttribute("class", "current_1");
            phones[this.index].className = "phone current1";
        }
        lis1[i].onmouseover = function () {
            if (this.className != "current_1") {
                this.setAttribute("class", "current_2")
                this.style.backgroundImage = "url(images/" + (this.index + 1) + (this.index + 1) + "_" + "1" + ".png)";
            }
        }
        lis1[i].onmouseout = function () {
            if (this.className != "current_1") {
                this.removeAttribute("class");
                this.style.backgroundImage = "url(images/" + (this.index + 1) + (this.index + 1) + ".png)";
            }
        }
    }
    $('.kuangjia a img').animate({
        'left': 0,
        opacity: 1
    }, 1000);
    $('.kuangjia p').animate({
        'right': 0,
        opacity: 1
    }, 1000);
    // 赵君义的js--------------------------------------
    var special = document.getElementById("special")
    //获取图片的盒子
    var imgS = special.children;
    //获取每一个图片
    for (var i = 0; i < imgS.length; i++) {//循环遍历每个图片点击事件
        imgS[i].onmouseover = function () {//鼠标移入事件
            animate(this, {
                "top": -80,
                "height": 485

            })
        }
        imgS[i].onmouseout = function () {//鼠标移除事件
            animate(this, {
                "top": 0,
                "height": 500
            })
        }
        var midd_con = document.getElementById("midd_con")

        midd_con.onmouseover = function () {
            animate1(special, 0)
        }


        function animate1(obj, target) {
            clearInterval(obj.timerId);
            obj.timerId = setInterval(function () {
                var currentLeft = obj.offsetLeft;
                var step = 20;
                currentLeft += step;
                if (currentLeft >= target) {
                    clearInterval(obj.timerId);
                    obj.style.left = target + "px";
                } else {
                    obj.style.left = currentLeft + "px";
                }
                // console.log("1");
            }, 17);
        }
    }
    var guanzhuwomen = document.getElementById("guanzhuwomen");
    var erweima = document.getElementById("erweima");
    guanzhuwomen.onmouseover = function () {
        erweima.style.display = "block";
    }
    guanzhuwomen.onmouseout = function () {
        erweima.style.display = "none";
    }
    //footer开始

    //var gun = document.getElementById("gun");
    //var dome =document.getElementById("dome");
    var dome1 = document.getElementById("dome1");
    var timer = null;
    //var dome2 =document.getElementById("dome2");
    //var spanwidth =dome.offsetLeft;

    timer = setInterval(text, 100);
    function text() {
        var current = dome1.offsetLeft;
        var step = 10;
        current += step;
        if (current > 800) {
            dome1.style.left = step + "px";
        } else {
            dome1.style.left = current + "px";
        }
    }
    dome1.onmouseover = function () {
        clearInterval(timer);
    }
    dome1.onmouseout = function () {
        timer = setInterval(text, 100);
    }
}