const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector('#close-btn');


open_menu = () =>{
    sideMenu.style.display = "block"
}

close_menu = () => {
    sideMenu.style.display = 'none'
}

changeTheme = () => {
    const toggler = document.querySelector('.theme-toggler')
    document.body.classList.toggle('dark-theme-variables')

    toggler.querySelector('span:nth-child(1)').classList.toggle('active')
    toggler.querySelector('span:nth-child(2)').classList.toggle('active')
}
