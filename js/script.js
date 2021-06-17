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

