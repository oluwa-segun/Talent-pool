const close = document.querySelector('#close').addEventListener('click', closeMenu => {
    document.querySelector('menu').style.display = "none"
})

const menu = document.querySelector("#menu").addEventListener('click', onclick => {
    document.querySelector('menu').style.display = "block"
})



function ScrollOne(){
    let cards = document.querySelectorAll('.tal-card');
    cards.forEach(card =>{
        let cardPosition = card.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;
        
        if (cardPosition < screenPosition) {
        card.classList.add('one-appear')
    }

    })
}

window.addEventListener('scroll', ScrollOne)


const slider = document.querySelector('.test_cards');
  let isDown = false;
  let startX;
  let scrollLeft;


  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;  // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
    console.log(x)
  });

console.log(isDown)












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