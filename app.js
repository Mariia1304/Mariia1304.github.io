// hover proyectos
$('.proyecto').hover(function(){
  $(".proyecto-titulo").toggleClass("margintop");
  $(".proyecto-button button").toggleClass("marginbottom");
});
// FIN HOVER PROYECTOS 


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
if (window.pageYOffset >= sticky) {
navbar.classList.add("sticky")
} else {
navbar.classList.remove("sticky");
}
}

document.getElementById('go-to-home').addEventListener('click', ()=>{
document.getElementById('navbarSupportedContent').classList.remove('show');
})
document.getElementById('go-to-about').addEventListener('click', ()=>{
document.getElementById('navbarSupportedContent').classList.remove('show');
})
document.getElementById('go-to-projects').addEventListener('click', ()=>{
document.getElementById('navbarSupportedContent').classList.remove('show');
})
document.getElementById('go-to-contact').addEventListener('click', ()=>{
document.getElementById('navbarSupportedContent').classList.remove('show');
})
let el = document.getElementsByClassName('projects');
for (let i=0; i < el.length; i++){
document.getElementById(i).addEventListener("mouseenter", function() {

  setTimeout(function() {
    document.getElementById(i).getElementsByTagName('div')[0].style.display = 'block';
    document.getElementById(i).getElementsByTagName('div')[1].style.display = 'block';
    document.getElementById(i).getElementsByTagName('div')[0].className = 'slideDown overlay1';
    
    document.getElementById(i).getElementsByTagName('div')[1].className = 'slideUp overlay2';
    document.getElementById(i+`center`).style.display = 'block';
  }, 200);
},false);
document.getElementById(i).addEventListener("mouseleave", function() {

  setTimeout(function() {
    // document.getElementById(i).getElementsByTagName('div')[0].classList.remove='slideDown'

document.getElementById(i).getElementsByTagName('div')[0].style.display = 'none';
document.getElementById(i).getElementsByTagName('div')[1].style.display = 'none';
// document.getElementById(i+`center`).style.display = 'block';
  }, 200);
},false);

}

