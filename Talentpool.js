const close = document.querySelector('#close').addEventListener('click', closeMenu => {
    document.querySelector('menu').style.display = "none"
})

const menu = document.querySelector("#menu").addEventListener('click', onclick => {
    document.querySelector('menu').style.display = "block"
})




const slidetime = 500;
const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next')
const allslides = [...document.querySelectorAll('.card')]



const slider = document.querySelector('.test_cards')

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft

})


slider.addEventListener('mouseleave', (e) => {
    isDown = false;
    slider.classList.remove('active');
})

slider.addEventListener('mouseup', (e) => {
    isDown = false;
    slider.classList.remove('active');
})


slider.addEventListener('mousemove', (e) => {
    if (!isDown)
        return

    e.preventDefault()
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk
})

nextBtn.addEventListener('click', (e) => {
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk
})





document.addEventListener('DOMContentLoaded', () => {


const slidetime = 500;
const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next')
const allslides = [...document.querySelectorAll('.card')]

let clickable = true;
let active = null;
let newactive = null;


function initSlider() {
    allslides.forEach(slide => {
        slide.setAttribute(
            'style',
            `transition: transform ${slidetime}ms ease;
            animation-duration: ${slidetime}ms`
        )
    })
}




function changeSlide(forward) {
    if (clickable) {
        clickable = false;
        active = document.querySelector('.active')
        const activeSlideIndex = allslides.indexOf('active');

if(forward){
    console.log("active slide index: ", activeSlideIndex);
    console.log("allslides length ", allslides.length);
    console.log("new slide: ", (activeSlideIndex + 3) % allslides.length);

    newactive = allslides[(activeSlideIndex + 1) % allslides.length]
    active.classList.add('slideOutLeft');
    newactive.classList.add('slideInRight', 'active')
    }else{

        }
    }
}

nextBtn.addEventListener('click', () => {
    changeSlide(true);

})

previousBtn.addEventListener(  'click', () => {
    changeSlide(false);
})



initSlider();
})



function ScrollOne(){
    let cards = document.querySelectorAll('.tal-card');
    cards.forEach(card =>{
        let cardPosition = card.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.2;
        
        if (cardPosition < screenPosition) {
        card.classList.add('one-appear')
    }

    })
}

window.addEventListener('scroll', ScrollOne)

// function ScrollOne(){
//     let one = document.querySelectorAll('.one');

//     let onePosition = one.getBoundingClientRect().top;
//     let screenPosition = window.innerHeight / 1.2;

//     if (onePosition < screenPosition){
//         one.classList.add('one-appear')
//     }

//     console.log(one)
// }



// window.addEventListener('scroll', ScrollOne);

















// const test_wrap = document.querySelector(".test_cards")
// const carousel_btn = document.querySelectorAll(".carousel-btn")
// const test_cards = document.querySelectorAll(".test_cards .card").length

// let imageIndex = 1;
// let translateX = 0;


// carousel_btn.forEach(button => {
//     button.addEventListener("click", onclick =>{
//         if (onclick.target.id ==='previous') {
//             if (imageIndex != 1) {
//                 imageIndex--;
//                 translateX += 300;
//             }
//         }else {
//             if (imageIndex != test_cards) {
//                 imageIndex++;
//                 translateX -=300;
//             }
//         }
//         test_cards.style.transform = 'translateX(${translateX}px)'
//     })
// })