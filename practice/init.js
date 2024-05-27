const button = document.querySelector('#hamburger');
const hamburger = document.querySelector('.hamburger');

button.addEventListener('click', () => {
    if (hamburger.style.display === 'none') hamburger.style.display = 'block';
    else hamburger.style.display = 'none'; 
})

addEventListener('resize', () => {
    hamburger.style.display = 'none';
})