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
;


let optionsIO={
     rootMargin: '100px',
}

const observerrr = new IntersectionObserver(entries=>{
     entries.forEach(entry=>{
          if (entry.isIntersecting) {
               entry.target.classList.add('active');
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
const nav = document.getElementById('nav');

     hamburger.addEventListener('click', () =>{
          nav.classList.toggle('active');
     })