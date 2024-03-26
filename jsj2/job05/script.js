const footer = document.querySelector('footer');
const textarea = document.querySelector('footer');

window.addEventListener('scroll', () => { 
    let scroll = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    let scrollPercent = Math.round(scroll * 100);
    footer.style.width = scrollPercent + '%';

    let red = 255 - (scrollPercent * 255 / 100);
    let blue = scrollPercent * 255 / 100;
    footer.style.backgroundColor = 'rgb(' + red + ', 0, ' + blue + ')';
})
