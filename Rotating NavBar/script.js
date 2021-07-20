const open_button = document.getElementById('open');
const close_button = document.getElementById('close');
const container = document.querySelector('.container');
console.log('hello')

open_button.addEventListener('click',()=>{
    container.classList.add('show-nav')
});

close_button.addEventListener('click',()=>{
    container.classList.remove('show-nav')
});