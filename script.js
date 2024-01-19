let text = document.getElementById('text')
let leaf = document.getElementById('leaf')
let hill1 = document.getElementById('hill1')
let hill4 = document.getElementById('hill4')
let hill5 = document.getElementById('hill5')

// parallax effect
window.addEventListener('scroll', () => {

    let scrollValue = window.scrollY;

    text.style.marginTop = scrollValue * 2.5 + 'px';

    leaf.style.top = scrollValue * -1.5 + 'px';
    leaf.style.left = scrollValue * 1.5 + 'px';

    hill5.style.left = scrollValue * 1.5 + 'px';

    hill4.style.left = scrollValue * -1.5 + 'px';

});