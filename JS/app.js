const animationObjects = document.querySelectorAll('.animationConcerned');


const observer = new IntersectionObserver(entries =>{
     entries.forEach(entry=>{
          if (entry.isIntersecting) {
               entry.target.classList.add('anim')
          }
          else{
               entry.target.classList.remove('anim')

          }
     })
})

animationObjects.forEach(animationObjects=>{
     observer.observe(animationObjects);
})

//-------------------------------------

const image= document.querySelector('.topImg_2');
const image2= document.querySelectorAll('.topImg_2');
const trigger = document.querySelector('.trigger');

trigger.addEventListener('mouseover', () =>{
     image.classList.toggle('active');

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
})
