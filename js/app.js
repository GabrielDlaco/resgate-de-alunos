document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn')
    const navMenu = document.getElementById('nav-menu')

    function verificarTamanhoDoNavegador() {
        if(window.innerWidth > 575){
            navMenu.style.display = "none";
        } else{
            navMenu.style.display = "flex";
        }
    }

    menuBtn.addEventListener('click', ()=>{
        if(navMenu.style.display === 'flex'){
            navMenu.style.display = 'none'
        } else{
            navMenu.style.display = 'flex'
        }
    })

    window.addEventListener('resize', () => {
        verificarTamanhoDoNavegador()
    })
})