document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn')
    const navMenu = document.getElementById('nav-menu')

    menuBtn.addEventListener('click', ()=>{
        if(navMenu.style.display === 'flex'){
            navMenu.style.display = 'none'
        } else{
            navMenu.style.display = 'flex'
        }
    })
})