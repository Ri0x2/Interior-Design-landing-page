const menu = document.getElementById('menu');
const toTop = document.querySelector('#toTop');
let numCounters = document.querySelectorAll('#num');
let interval = 6000;
let countersStarted = false;
 function burgerMenu(){
     menu.classList.toggle("hidden")
 }

  function closeMenu(){
    menu.classList.add("hidden")
 }
 

 document.getElementById('toTop').addEventListener('click', function() {
    document.documentElement.scrollTop = 0; 
});

window.addEventListener('scroll' , () =>{

            // scroll to top show and hide 
        if(window.scrollY > 100){
            toTop.classList.remove('hidden')
            toTop.classList.add('flex')
        }else{
            toTop.classList.add('hidden');
        }
     //  counter
    if(window.scrollY >= 200  && !countersStarted){
        countersStarted = true;
        numCounters.forEach((numCounter) => {
            let startValue = 0;
            let endValue = parseInt(numCounter.getAttribute("data-val"));
            let duration = Math.floor(interval / endValue) ;
            let counter = setInterval(() => {
                startValue += 1;
                numCounter.textContent = `${startValue}+`;
                if(startValue >= endValue){
                    clearInterval(counter);
                }
            }, duration);
        })
    }
    
})