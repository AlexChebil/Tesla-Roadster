const animationObjects = document.querySelectorAll('.animationConcerned');

const options = {
     rootMargin: '100px' ,
     threshold: 0.1
   }

const observer = new IntersectionObserver(entries =>{
     entries.forEach(entry=>{
          if (entry.isIntersecting) {
               entry.target.classList.add('anim');
               
          }
          else{
               entry.target.classList.remove('anim');

          }
     })
}, options)

animationObjects.forEach(animationObjects=>{
     observer.observe(animationObjects);
})

//----------------------------------------------------------------

const trigger = document.querySelectorAll('.trigger');

let optionsIO={
     rootMargin: '100px',
}


const observerrr = new IntersectionObserver(entries=>{
          entries.forEach(entry=>{
               if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    console.log('activated');
               }
               else{
                    entry.target.classList.remove('active');
               }
          })
     },optionsIO)

trigger.forEach(trigger=>{
     observerrr.observe(trigger);
})







//------------------------------------------

const hamburger = document.getElementById('hamburgerContainer');
const nav = document.querySelectorAll('.navDivs');
const wall = document.getElementById('wall');

     hamburger.addEventListener('click', () =>{
          wall.classList.toggle('active');
          for (let index = 0; index < nav.length; index++) {
               nav[index].classList.toggle('active');
          }
               
     })