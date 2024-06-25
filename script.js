// Popup Actions
const offerContainer = document.getElementById('popup-container');
const popupBtn = document.getElementById('popup-btn');
popupBtn.addEventListener('click', function () {
    offerContainer.style.display = 'none';
})
// Home Banner Slider Actions
let sliderImages = document.querySelector(".image-container");
let scrollLeftBtn = document.getElementById("scroll-prev");
let scrollRightBtn = document.getElementById("scroll-next");

scrollRightBtn.addEventListener("click", (event) => {
    console.log(event)
    event.preventDefault();
    sliderImages.scrollLeft += event.offsetX + 800;
    sliderImages.style.scrollBehavior = 'smooth';
})
scrollLeftBtn.addEventListener("click", (event) => {
    console.log(event)
    event.preventDefault();
    sliderImages.scrollLeft -= event.offsetX + 800;
    sliderImages.style.scrollBehavior = 'smooth';
})
// Changing Like Button into red
let likedBtns = document.querySelectorAll('.btn-heart');
console.log(likedBtns);
likedBtns.forEach((likedBtn) => {
    likedBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (likedBtn.innerHTML === "<img src=\"./img/icons/blackheart.png\" alt=\"heart\">") {
            likedBtn.innerHTML = "<img src=\"./img/icons/redheart.png\" alt=\"heart\">"
        } else {
            likedBtn.innerHTML = "<img src=\"./img/icons/blackheart.png\" alt=\"heart\">"
        }
    })

})

// Sidebar Menu

let sideBar = document.querySelector('.menu-bar');
let sideBarMenu = document.querySelector('.sidebar-menu');
let navCloseBtn = document.getElementById('nav-close');


let navLinks = document.querySelectorAll('.sidebar-menu ul li a');

function closeSidebar() {
    sideBarMenu.style.left = '-50%';
}

sideBar.addEventListener('click', () => {
    sideBarMenu.style.left = '0';
})
navCloseBtn.addEventListener('click', closeSidebar)

navLinks.forEach((link) => {
    link.addEventListener('click', closeSidebar)
})