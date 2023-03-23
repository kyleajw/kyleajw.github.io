const hamburgerBtn = document.querySelector('.hamburger-icon');
const navList = document.querySelector('.nav-list.hidden');
const closeBtn = document.querySelector('.close-button')
console.log(hamburgerBtn);


hamburgerBtn.addEventListener('click', (e) => {
    navList.classList.remove('hidden');

    e.preventDefault();
})

closeBtn.addEventListener('click', (e) => {
    navList.classList.add('hidden')
    e.preventDefault()
})