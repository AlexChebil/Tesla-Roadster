const animationObjects = document.querySelectorAll('.animationConcerned');

const options = {
     rootMargin: '100px' ,
     threshold: 0.15
   }

const observer = new IntersectionObserver(entries =>{
     entries.forEach(entry=>{
          if (entry.isIntersecting) {
               entry.target.classList.add('anim')
          }
          else{
               entry.target.classList.remove('anim')

          }
     })
}, options)

animationObjects.forEach(animationObjects=>{
     observer.observe(animationObjects);
})

//-------------------------------------
/*
const image= document.querySelector('.topImg_2');
const image2= document.querySelectorAll('.topImg_2');
const trigger = document.querySelector('.trigger');

trigger.addEventListener('mouseover', () =>{
     image.classList.add('active');

})

const observeration = new IntersectionObserver(entries =>{
     entries.forEach(entry=>{
          if (entry.isIntersecting) {
               
          } else {
               entry.target.classList.remove('active');
          }
     })
})
     
image2.forEach(image2=>{
     observeration.observe(image2);
})*/













const trigger = document.querySelectorAll('.trigger');

let optionsIO={
     rootMargin: '10px',
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



const hamburger = document.getElementById('hamburgerContainer');
const nav = document.getElementById('nav');

     hamburger.addEventListener('click', () =>{
          nav.classList.toggle('active');
     })