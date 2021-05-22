const animationObjects = document.querySelectorAll('.animationConcerned');
const options = {
     rootMargin: '100px',
     threshold: 0.1
}
if (window.innerWidth < 350) {
     let secondIframe = document.querySelectorAll('.secondVideo');
     for (let index = 0; index < secondIframe.length; index++) {
          secondIframe[index].classList.add('noAnim');
     }
}


const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => {
          if (entry.isIntersecting) {
               entry.target.classList.add('anim');

          }
          else {
               entry.target.classList.remove('anim');

          }
     })
}, options)

animationObjects.forEach(animationObjects => {
     observer.observe(animationObjects);
})
//-----------------------------------------------------------------
const topImage1 = document.getElementById('topImg_1');
const topImageObserver = new IntersectionObserver(entries => {
     entries.forEach(entry => {
          if (entry.isIntersecting) {
               topImage1.classList.add('animTopImage1');
          }
          else {
               topImage1.classList.remove('animTopImage1');
          }
     })
})

topImageObserver.observe(topImage1);



//----------------------------------------------------------------

const trigger = document.querySelectorAll('.trigger');

let optionsIO = {
     rootMargin: '100px',
}


const observerrr = new IntersectionObserver(entries => {
     entries.forEach(entry => {
          if (entry.isIntersecting) {
               entry.target.classList.add('active');
          }
          else {
               entry.target.classList.remove('active');
          }
     })
}, optionsIO)

trigger.forEach(trigger => {
     observerrr.observe(trigger);
})







//------------------------------------------

const hamburger = document.getElementById('hamburgerContainer');
const ham = document.querySelectorAll('.hamburger');
const nav = document.querySelectorAll('.navDivs');
const wall = document.getElementById('wall');

hamburger.addEventListener('click', () => {
     wall.classList.toggle('active');
     for (let index = 0; index < nav.length; index++) {
          nav[index].classList.toggle('active');
          ham[index].classList.toggle('active');


     }

})

let ham1 = document.getElementById('ham1');
let ham2 = document.getElementById('ham2');
let ham3 = document.getElementById('ham3');

hamburger.addEventListener('click', function () {
     ham1.classList.toggle('crossAnim');
     ham2.classList.toggle('crossAnim');
     ham3.classList.toggle('crossAnim');
})











