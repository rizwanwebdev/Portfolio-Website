const navItems = document.getElementById('nav-items');
const openNav = document.querySelector('#nav-hamberger');
const closeNav = document.querySelector('#close-nav');
const navLinks = document.querySelectorAll('#nav-items ul li')

openNav.addEventListener('click', ()=>{
    navItems.classList.add('active')
})
closeNav.addEventListener('click', ()=>{
    navItems.classList.remove('active')
})

navLinks.forEach((navLink) =>{
    navLink.addEventListener('click', ()=>{
        navItems.classList.remove('active')
    })
})


window.addEventListener("scroll", ()=>{ 
    document.querySelector('header').classList.toggle('change', window.scrollY > 0)
});
