const container = document.querySelector('.container');
const left = document.querySelector('.sub-container-1');
const right = document.querySelector('.sub-container-2');


left.addEventListener('mouseenter',()=>{
    container.classList.add('hover-left')
})
left.addEventListener('mouseleave',()=>{
    container.classList.remove('hover-left');
})

right.addEventListener('mouseenter',()=>{
    container.classList.add('hover-right')
})
right.addEventListener('mouseleave',()=>{
    container.classList.remove('hover-right');
})

