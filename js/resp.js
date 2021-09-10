burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
nav-List = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

burger.addEventlistner('click', ()=>{
    rightNav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav';)
})