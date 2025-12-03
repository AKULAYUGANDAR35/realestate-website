// navbar scrolled//

window.addEventListener('scroll',function(){
    let navbar = document.querySelector('.navbar');
    if(this.window.scrollY > 20){
        navbar.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
    }
});
// animation

const scrollRevealOption ={
    distance:'50px',
    origin:'bottom',
    duration :1000,
    delay : 500,
}

scrollReveal().reveal('.left',{
    ...scrollRevealOption,
});
scrollReveal().reveal('.para',{
    ...scrollRevealOption,
});