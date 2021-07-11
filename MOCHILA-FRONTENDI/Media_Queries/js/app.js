const items = document.querySelector (".items");
const openMenuBtn = document.querySelector (".open-menu");
const closeMenuBtn = document.querySelector (".close-menu");

function toggleMenu (){
    items.classList.toggle("menu_opened")
}

openMenuBtn.addEventListener("click", toggleMenu)
closeMenuBtn.addEventListener("click", toggleMenu)