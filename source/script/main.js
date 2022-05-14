const menu = document.querySelector('.ham');
const nav = document.querySelector('.nav');
let menuOpen = false;

menu.addEventListener('click', ()=>{
    if(!menuOpen){
        menu.classList.add('open');
        menuOpen=true;
        nav.style.right='0px';
    }
    else{
        menu.classList.remove('open');
        menuOpen=false;  
        nav.style.right='-1000px';
    }
});

function openNav(){
    document.querySelector('.menucard').classList.toggle('active');
    document.querySelector('.fa-chevron-left').classList.toggle('active');

}

function auto(){
    document.querySelector('.automate').classList.add('active');
    document.querySelector('.soft').classList.remove('active');
    document.querySelector('.brand').classList.remove('active');
    document.querySelector('.edu').classList.remove('active');
}

function soft(){
    document.querySelector('.automate').classList.remove('active');
    document.querySelector('.soft').classList.add('active');
    document.querySelector('.brand').classList.remove('active');
    document.querySelector('.edu').classList.remove('active');
}
function brand(){
    document.querySelector('.automate').classList.remove('active');
    document.querySelector('.soft').classList.remove('active');
    document.querySelector('.brand').classList.add('active');
    document.querySelector('.edu').classList.remove('active');
}
function edu(){
    document.querySelector('.automate').classList.remove('active');
    document.querySelector('.soft').classList.remove('active');
    document.querySelector('.brand').classList.remove('active');
    document.querySelector('.edu').classList.add('active');
}





jQuery(document).ready(function() {
    jQuery('.backg').fadeOut(2500);
});
