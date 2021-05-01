/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*STICKY NAVBAR*/
const navbar = document.querySelector(".l-header");
const navl = document.querySelectorAll(".nav__link");
const nav = document.querySelector(".nav");
const navlogo = document.querySelector(".nav__logo img");

window.onscroll = ()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    this.scrollY > 20 ? navlogo.classList.add("sticky") : navlogo.classList.remove("sticky");
    this.scrollY > 20 ? nav.classList.add("sticky") : nav.classList.remove("sticky");
    this.scrollY > 20 ? navl.classList.add("sticky") : navl.classList.remove("sticky");
}


/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.home__name',{}); 
sr.reveal('.home__intro',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 400}); 
sr.reveal('.skills__img',{delay: 600});


/*SCROLL WORK*/
sr.reveal('.work__img',{}); 
sr.reveal('.work__content',{delay: 200});
sr.reveal('.btm__border',{delay: 600});


