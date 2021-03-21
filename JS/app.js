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