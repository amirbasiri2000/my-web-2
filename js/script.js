// menu bar on responsive

var menuBar = document.querySelector('.navigation-responsive .menu-bar');
var navigationUl = document.querySelector('.navigation .nav-center ul')
var navigationLi = [...document.querySelectorAll('.navigation .nav-center ul li')]
var navCenter = document.querySelector('.navigation .nav-center');
var closeIconMenuRes = document.querySelector('.navigation .nav-center ul li .close-icon-menu-res');



menuBar.addEventListener('click',function(){
    var windowWidth = window.innerWidth;
    if(windowWidth <= 1122){
        this.style.visibility = 'hidden';
        navCenter.style.display = 'block';
        navCenter.classList.add('nav-center-responsive');
        navCenter.style.position = 'absolute';
        navigationLi.forEach(element => {
            element.style.display = 'block';
            element.style.margin = '10px 100px 20px 20px';
        });
        closeIconMenuRes.style.display = 'block';
    }
    else{
        navCenter.style.display = 'none';
        document.querySelector('.navigation').style.display = 'block';
    }
})

closeIconMenuRes.addEventListener('click',function(){
    navCenter.style.display = 'none';
    menuBar.style.visibility = 'visible';
})
// serch box

var searchBoxIcon = document.querySelector('.navigation-responsive .search-box i');
var searchBoxForm = document.querySelector('.navigation-responsive .search-box form');


searchBoxIcon.addEventListener('click',function(){
    searchBoxForm.classList.remove('d-none');
})

// slider

const angleRight = document.getElementById('angle-right');
const angleLeft = document.getElementById('angle-left');
let sliderContent = [...document.querySelector('.slider .slider-content').children]
let item = document.querySelectorAll('.slider .slider-content .item');

let index = 0;


angleRight.addEventListener('click',function(){
    index++;
    if(index > sliderContent.length -1 ){
        index =0
    }
    sliderContent.forEach(element => {
        element.classList.remove('active');
    })
    item[index].classList.add('active');
})

angleLeft.addEventListener('click',function(){
    index--;
    if(index < 0 ){
        index = sliderContent.length -1 ;
    }
    sliderContent.forEach(element => {
        element.classList.remove('active');
    })
    item[index].classList.add('active');
})
setInterval(function(){
    index++;
    if(index > sliderContent.length -1 ){
        index =0
    }
    sliderContent.forEach(element => {
        element.classList.remove('active');
    })
    item[index].classList.add('active'
)},3000)

// scroll window

let header = document.querySelector('.header');
let topHeader = document.querySelector('.header .custom-container-fluid');

window.onscroll = () => {
   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
       topHeader.style.display = 'none';
   }
   else{
       topHeader.style.display = 'flex';
   }
}




function scrollDetect(){
    var lastScroll = 0;
  
    window.onscroll = function() {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
  
        if (currentScroll > 0 && lastScroll <= currentScroll){
          lastScroll = currentScroll;
          header.style.display = 'none';
        }else if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
          lastScroll = currentScroll;
          topHeader.style.display = 'none';
          header.style.display = 'block';
        }
        else if(document.body.scrollTop < 200 || document.documentElement.scrollTop < 200){
            topHeader.style.display = 'flex';
            header.style.display = 'block';
      }
        else{
            topHeader.style.display = 'flex';
        }
    };
  }
  
  
  scrollDetect();

