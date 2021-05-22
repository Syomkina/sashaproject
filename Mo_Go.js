const button = document.querySelector('.btn')

console.log(button)

button.addEventListener('click', btn)


function btn() {
    const divModal = document.createElement('div')
    divModal.classList.add('main')
    divModal.insertAdjacentHTML('afterbegin',`
    <div class="modal">
        <div class="container_w">
            <div class="container_ww_top">
                <h1 class="title">About us</h1>
                <span>&times;</span>
            </div>
            <div class="container_ww_down">
                <p class="suptitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button class="button">OK</button>
            </div>
        </div>
    </div>
    `)
    document.body.append(divModal)
}

window.onclick = function(event) {
    let modal = document.querySelector('.modal button')
    let close = document.querySelector('.container_w span')
    if(event.target == modal || event.target == close){
        document.querySelector('.main').remove()
    }
}

const accordionTexts = document.querySelectorAll('.accordion_content')
const accordionHeaders= document.querySelectorAll('.accordion_header')

for (let i = 0; i < accordionHeaders.length; i++) {
    accordionHeaders[i].onclick = function() {
    accordionTexts[i].classList.toggle('accordion_content_visible')} 
}


const next = document.querySelector('.reviews_btn_next')
console.log(next)
const previous = document.querySelector('.reviews_btn_prev')

let slideIndex = 1;
showSlides(slideIndex);

previous.addEventListener('click', plusSlide)
next.addEventListener('click', minusSlide)

function plusSlide() {
    showSlides(slideIndex += 1);
}
  
function minusSlide() {
    showSlides(slideIndex -= 1); 
    console.log('prev')
}
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('reviews_item');
      
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
      
    slides[slideIndex - 1].style.display = "block";
  }
  

const menuIcon = document.querySelector('.menu-icon')
const nav =  document.querySelector('.nav')

menuIcon.addEventListener('click', showMenu)

function showMenu() {
    nav.classList.toggle('nav-opened')
    menuIcon.classList.toggle("change");
 }


