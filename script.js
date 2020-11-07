const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {    
            //toggle navigation bar
            nav.classList.toggle('nav-active');
            //animated list items
        navLinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = ''
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`
            }
        });
            //animate burger
        burger.classList.toggle('toggle');
    });
}

const typingCarousel = () => {
    const texts = ['web developer', 'designer'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type(){

        if(count === texts.length){
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.querySelector('.typing').textContent = letter;
        if(letter.length == currentText.length){
            count++;
            index = 0;
        }
        setTimeout(type, 400);
    }());
}

const app = () => {
    navSlide();
    typingCarousel();
}
app();