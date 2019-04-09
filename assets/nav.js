
// Hamburger Menu //

const hamburger = document.getElementsByClassName("hamburger")[0];
const navLinks = document.getElementsByClassName('navLinks')[0];
const nav = document.querySelector('nav');


hamburger.onclick = () => {
    nav.classList.toggle('navActive'); 
    navLinks.classList.toggle('hamActive');

}