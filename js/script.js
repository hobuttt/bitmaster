$(document).ready(function () {

    let $page = $('html, body');
    $('a.scroll').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });

       let servBox = $(".services-box");
       let particlesJs = $("#particles-js");

        $(window).on('scroll', function (e) {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

            if (document.documentElement.clientWidth > 767 && scrollTop > $('body').offset().top) {
                servBox.css("top", ((scrollTop) * -.5) + 320);
                particlesJs.css("top", ((scrollTop) * .4) );

            }
        });
    // }


    /*TARIFFS FLIP*/


    $('.flipper').on('click', function () {
        $(this).toggleClass("flipper-active");

    })
    // ABOUT TABS


    // $(".nav-link1").hover(function(){
    //     $(".nav-link1").removeClass("active-nav");
    //     $(this).addClass("active-nav");
    // });

    $("#v-pills-feed1-tab").hover(function(){
        $(".tabs-info__item").removeClass("active-feed");
        $("#v-pills-feed1").addClass("active-feed");
    });

    $("#v-pills-feed2-tab").hover(function(){
        $(".tabs-info__item").removeClass("active-feed");
        $("#v-pills-feed2").addClass("active-feed");
    });

    $("#v-pills-feed3-tab").hover(function(){
        $(".tabs-info__item").removeClass("active-feed");
        $("#v-pills-feed3").addClass("active-feed");
    });


    $('.navbar-header .navbar-collapse .nav-link').on('click', function () {
        $('.navbar-collapse').removeClass('show');
        $('.navbar-toggler').addClass('collapsed');
    });


})

/*RANGE*/


let $element = $('input[type="range"]');

$element
    .rangeslider({
        polyfill: false,
        onInit: function() {
            let $handle = $('.rangeslider__handle', this.$range);
            updateHandle($handle[0], this.value);
        }
    })
    .on('input', function(e) {
        let $handle = $('.rangeslider__handle', e.target.nextSibling);
        updateHandle($handle[0], this.value);
    });

function updateHandle(el, val) {
    el.textContent = val;
}


/*CALCULATOR*/


let model = document.querySelectorAll(".calc-button");
let rangeSlider = document.getElementById("range");
let output = document.querySelector(".calc-num span");
let calcSum = document.querySelector(".calc-sum span");
let calcCost = document.querySelector(".calc-cost span");
let calcTabImg = document.querySelector('#v-pills-phil img');
let calcTabImg2 = document.querySelector('#v-pills-india img');

/* Начало редактируемых переменных*/

// Цены за размещение и количество потребляемой электроэнергии
let objects = [
    {
      // Antminer S9
        cost1: 1290,
        cost2: 1090,
        cost3: 990,
        kwt: 35
    },
    {
      // Ibelink X11
      cost1: 1290,
      cost2: 1090,
      cost3: 990,
        kwt: 23
    },
    {
      // M-3
      cost1: 1290,
      cost2: 1090,
      cost3: 990,
      kwt: 53
    },
    {
      // Antminer A3
      cost1: 1290,
      cost2: 1090,
      cost3: 990,
      kwt: 32
    },
    {
      // DR-100
      cost1: 1290,
      cost2: 1090,
      cost3: 990,
      kwt: 24
    },
    {
      // T9
      cost1: 1290,
      cost2: 1090,
      cost3: 990,
      kwt: 37
    },
    {
      // Antminer D3
      cost1: 1290,
      cost2: 1090,
      cost3: 990,
      kwt: 32
    },
    {
      // Ebit E9+
      cost1: 1290,
      cost2: 1090,
      cost3: 990,
      kwt: 37
    },
    {
      // GPU 1 кВт
        cost1: 1590,
        cost2: 1390,
        cost3: 1290,
        kwt: 24
    }
];

// Стоимость 1 кВт/ч
let kwtCost = 3.49;
/*  END */

let modelKwt = 35;
calcCost.innerHTML = 1290;
output.innerHTML = rangeSlider.value; // Display the default slider value
calcSumCount = calcCost.innerHTML * 3;
calcSumKwt =  Math.round(3 * 30 * kwtCost * modelKwt );
calcSum.innerHTML = calcSumCount + calcSumKwt;

function cangeTabImg (){
    calcTabImg.src = 'image/calc/asics/asic' + (rangeSlider.value-1) +'.png';
}
function cangeTabImg2 (){
    calcTabImg2.src = 'image/calc/farms/farm' + (rangeSlider.value-1) +'.png';
}

rangeSlider.oninput = function () {

    let modelAct = document.querySelector(".calc-button.active");
    let modelActId = modelAct.getAttribute('id');
    let modelActNum = parseInt(modelActId.replace(/\D+/g,""));
    modelKwt = objects[modelActNum].kwt;

    if(rangeSlider.value < 30){
        modelObj = objects[modelActNum].cost1;
    }
    else if(rangeSlider.value >= 30 && rangeSlider.value < 50){
        modelObj = objects[modelActNum].cost2;
    }
    else if(rangeSlider.value >= 50){
        modelObj = objects[modelActNum].cost3;
    }
    if($('.calc-asic').bind('active')){
        if(rangeSlider.value < 61 ){

            cangeTabImg();

        }else if (rangeSlider.value >= 61){
            calcTabImg.src = 'image/calc/asics/asic60.png';
        }
    }

     if($('.calc-farm').bind('active')) {
        if(rangeSlider.value < 13  ){

            cangeTabImg2();

        }else if (rangeSlider.value >= 13 ){
            calcTabImg2.src = 'image/calc/farms/farm12.png';
        }
    }

    calcCost.innerHTML = modelObj;
    output.innerHTML = this.value;
    calcSumCount = this.value * calcCost.innerHTML;
    calcSumKwt =  Math.round(modelKwt * 30 * kwtCost * this.value );
    calcSum.innerHTML = calcSumCount + calcSumKwt;

};

for(let i = 0; i < model.length; i++ ) {
    model[i].addEventListener("click", gett);

}
function gett() {
    modelId = this.getAttribute('id');
    modelNum = parseInt(modelId.replace(/\D+/g,""));
    modelKwt = objects[modelNum].kwt;

    if(output.innerHTML < 30){
        modelObj = objects[modelNum].cost1;
    }
    else if(output.innerHTML >= 30 && output.innerHTML < 50){
        modelObj = objects[modelNum].cost2;
    }
    else if(output.innerHTML >= 50){
        modelObj = objects[modelNum].cost3;
    }

    calcCost.innerHTML = modelObj;

    calcSumCount = output.innerHTML * modelObj;
    calcSumKwt =  Math.round(modelKwt * 30 * kwtCost * output.innerHTML );
    calcSum.innerHTML = calcSumCount + calcSumKwt;
}

