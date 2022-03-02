let elMenuBtn = document.querySelector(".menu-btn");
let elModal = document.querySelector(".nav");
let elLinethird =document.querySelector(".line2");
let elLineOne =document.querySelector(".line1");
let elLineThree =document.querySelector(".line3");
let elLine = document.querySelectorAll('.experience__line');

elMenuBtn.addEventListener("click",function(){
    elModal.classList.toggle("grow-height");
    elLinethird.classList.toggle("remove-line");
    elLineOne.classList.toggle("rotate-line1")
    elLineThree.classList.toggle("rotate-line3")
})


elLine.forEach((item) => {
  window.addEventListener("scroll",function(){
    header = document.querySelector("header");
    header.classList.toggle("header-bg",window.scrollY > 200);
    item.classList.toggle("float",window.scrollY > 300);
  })
})

const links = document.querySelectorAll('.nav__item');
const sections = document.querySelectorAll('section');
   function changeLinkState() {
      let index = sections.length;

      while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

      links.forEach((link) => link.classList.remove('nav__link--active'));
      links[index].classList.add('nav__link--active');
  }

changeLinkState();
window.addEventListener('scroll', changeLinkState);


var typed = new Typed('.name', {
  strings: [
    "Abdusamad",
    "Coder",
    "AbuDev",
    "Creative",
  ],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
});











