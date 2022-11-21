const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu_icon-btn");
const cancelBtn = document.querySelector(".close_icon-btn");

menuBtn.addEventListener('click', function (e) {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("hide")
})
cancelBtn.addEventListener('click', function (e) {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
})

/*--------------------SCROLL UP----------------------------*/

$(function () {
  new WOW().init();
  $("#block").fadeIn('slow');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $('.up_scroll').css({
        "opacity": "1", "pointer-events": "auto"
      });
    } else {
      $('.up_scroll').css({
        "opacity": "0", "pointer-events": "none"
      });
    }
  });
  $('.up_scroll').click(function () {
    $('html').animate({ scrollTop: 0 });
  });
});


/*-------------------STEPS-----------------------------*/

const one = document.querySelectorAll(".content_column-one-block")
const two = document.querySelectorAll(".content_column-number-active")
const block1 = document.querySelector(".content_column-one-block")
const line = document.querySelector(".content_six-line")
const block2 = document.querySelector(".content_column-one-right")
const img1 = document.querySelector(".content_column-img--1")
const img2 = document.querySelector(".content_column-img--2")
const img3 = document.querySelector(".content_column-img--3")

one.forEach(function (item) {
  item.addEventListener('click', function (e) {
    if (e.currentTarget.classList[1] === 'content_column-one-block-child--3') {
      img3.classList.add('content_column-img--active')
      line.classList.add('content_six-line--min')
    } else {
      img3.classList.remove('content_column-img--active')
      line.classList.remove('content_six-line--min')
    }
    if (e.currentTarget.classList[1] === 'content_column-one-block-child--2') {
      img2.classList.add('content_column-img--active')
    } else {
      img2.classList.remove('content_column-img--active')
    }
    if (e.currentTarget.classList[1] === 'content_column-one-block-child') {
      img1.classList.add('content_column-img--active')
      line.classList.add('content_six-line--min-1')
    } else {
      img1.classList.remove('content_column-img--active')
      line.classList.remove('content_six-line--min-1')
    }
    one.forEach(function (item) {
      item.classList.remove('content_column-one-block--active')
    })
    item.classList.add('content_column-one-block--active')
  })

})

/*---------------PARALLAX-----------------------*/
// parallaxMouse({ elements: '.right-content-laptop', moveFactor: 10, wrap: '.wrapper', perspective: '100px' })



// let pr = document.querySelector('.right-content-laptop')

// console.log(document.querySelector('.header_benefits--right-content'));

// document.querySelector('.right-content-laptop').addEventListener('mousemove',(f)=>{
//   let x = f.clientX / window.innerWidth;
//   let y = f.clientY / window.innerHeight;
//   f.currentTarget.style.transform = "translateX(-" + x * 50 +"px)";
//   f.currentTarget.style.transform = "translateY(-" + y * 70 +"px)";
//   console.log(f.currentTarget.style);  

// });

/*--------------------------------*/

// var arrD = ["right-content"], i = -1;
// setInterval(function () {
//   document.querySelector(".right-content").className = arrD[
//     i = ++i % arrD.length
//   ];
// }, 5000);


/*              show block in down                   */

// var scroll = document.querySelector('.cmn-gap.E_G')
// window.addEventListener('scroll', function () {
//   var valueForOpacity = 0 + window.scrollY / 500
//   var value = Math.ceil(window.scrollY / 2);

//   let valueTranslate = 400 - value

//   if (Math.sign(valueTranslate) === 0 || Math.sign(valueTranslate) === -1) return

//   scroll.style.transform = `translateY(${valueTranslate}px)`
//   scroll.style.opacity = `${valueForOpacity}`

// })

/*--------------------------------------------*/

const up = document.querySelectorAll(".up")
const circle = document.querySelectorAll(".step-block show-desktop right")
const mobile = document.querySelectorAll(".step")
const rec = document.querySelectorAll(".rectangle-sm")
const hol = document.querySelectorAll(".horizontal-arrow")

/*---------------slider--------------------*/

$(function () {
  $('.comment-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-next"><svg id="arrow-next" width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.588 15.2434C10.9134 15.5689 10.9134 16.0965 10.588 16.4219C10.2625 16.7474 9.73488 16.7474 9.40944 16.4219L3.57611 10.5886C3.49303 10.5055 3.43116 10.4093 3.3905 10.3066C3.35729 10.2229 3.33725 10.1326 3.33293 10.0381C3.3275 9.92091 3.34669 9.80278 3.3905 9.69213C3.43116 9.58943 3.49303 9.49317 3.57611 9.41009L9.40944 3.57676C9.73488 3.25132 10.2625 3.25132 10.588 3.57676C10.9134 3.9022 10.9134 4.42984 10.588 4.75527L6.17721 9.16602L15.832 9.16602C16.2923 9.16602 16.6654 9.53911 16.6654 9.99935C16.6654 10.4596 16.2923 10.8327 15.832 10.8327L6.17721 10.8327L10.588 15.2434Z" /></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg id="arrow-prev" width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.588 15.2434C10.9134 15.5689 10.9134 16.0965 10.588 16.4219C10.2625 16.7474 9.73488 16.7474 9.40944 16.4219L3.57611 10.5886C3.49303 10.5055 3.43116 10.4093 3.3905 10.3066C3.35729 10.2229 3.33725 10.1326 3.33293 10.0381C3.3275 9.92091 3.34669 9.80278 3.3905 9.69213C3.43116 9.58943 3.49303 9.49317 3.57611 9.41009L9.40944 3.57676C9.73488 3.25132 10.2625 3.25132 10.588 3.57676C10.9134 3.9022 10.9134 4.42984 10.588 4.75527L6.17721 9.16602L15.832 9.16602C16.2923 9.16602 16.6654 9.53911 16.6654 9.99935C16.6654 10.4596 16.2923 10.8327 15.832 10.8327L6.17721 10.8327L10.588 15.2434Z" /></svg></button>',
    responsive: [{
      breakpoint: 1360,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
    ]
  });
  
})




const slider = document.getElementById("slider");
if (window.innerWidth > 1680) {
  slider.style.left = `${(window.innerWidth - 1366) / 2}px`;
}


/*--------------NAV MENU FIXED------------------*/ 

var scroll1 = window.pageYOffset;
window.onscroll = function(){
    var scroll2 = window.pageYOffset;
    if(scroll1 > scroll2) {
      document.querySelector('.header_top').style.top = "0px";
    }
    else{
      document.querySelector('.header_top').style.top = "-100px";
    }
    scroll1 = scroll2;
}

