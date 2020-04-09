// Select elements
const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const navList = document.querySelector('.nav-list')
const navItems = document.querySelectorAll('.nav-item')

// Menu is hidden by default
let showMenu = false

menuBtn.addEventListener('click', toggleMenu)

function toggleMenu () {
  if (!showMenu) {
    menuBtn.classList.add('close')
    menu.classList.add('show')
    navList.classList.add('show')
    navItems.forEach(navItem => navItem.classList.add('show'))
  }
  else {
    menuBtn.classList.remove('close')
    menu.classList.remove('show')
    navList.classList.remove('show')
    navItems.forEach(navItem => navItem.classList.remove('show'))
  }

  showMenu = !showMenu
}
