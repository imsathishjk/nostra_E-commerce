const products = [
    {
        id: 1,
        name: "Floral Summer Shirt",
        src: "products/f1.jpg",
        desc: "",
        price: 220,
        tags: ["new", "blue", "summer"]
    },

    {
        id: 2,
        name: "Summer Green",
        src: "products/f2.jpg",
        desc: "",
        price: 260,
        tags: ["new", "green", "beach"]
    },

    {
        id: 3,
        name: "Party Floral Shirt",
        src: "products/f3.jpg",
        desc: "",
        price: 399,
        tags: ["old", "red", "party"]
    },

    {
        id: 4,
        name: "Floral Summer Shirt",
        src: "products/f4.jpg",
        desc: "",
        price: 399,
        tags: ["old", "white", "beach"]
    },
    {
        id: 5,
        name: "Beach Shirt",
        src: "products/f5.jpg",
        desc: "",
        price: 579,
        tags: ["old", "white", "beach"]
    }
    ,
    {
        id: 6,
        name: "Shirt Party Red",
        src: "products/f6.jpg",
        desc: "",
        price: 579,
        tags: ["old", "red", "party"]
    },

    {
        id: 7,
        name: "Party Floral Shirt",
        src: "products/n3.jpg",
        desc: "",
        price: 399,
        tags: ["old", "red", "party"]
    },
    {
        id: 8,
        name: "Shirt Party Red",
        src: "products/n2.jpg",
        desc: "",
        price: 579,
        tags: ["old", "red", "party"]
    },
    {
        id: 9,
        name: "Floral Summer Shirt",
        src: "products/n1.jpg",
        desc: "",
        price: 220,
        tags: ["new", "blue", "summer"]
    },


];
// Popup Actions
const offerContainer = document.getElementById('popup-container');
const popupBtn = document.getElementById('popup-btn');
popupBtn.addEventListener('click', function () {
    offerContainer.style.display = 'none';
})

// List Products Items
let productContainer = document.querySelector('.products');
products.forEach((product) => {
    let createProductItem = document.createElement('div');
    createProductItem.classList.add('product')
    createProductItem.innerHTML = `<img src='img/${product.src}' />
    <h1>${product.name}</h1>
    <p><i class="fa-solid fa-indian-rupee-sign"></i> ${product.price}</p>
    <tags style='visibility:hidden;'>${product.tags}</tags>
    `
    productContainer.append(createProductItem);
})

// Getting all input tags to filter and display the checked items by user.
let tags = document.querySelectorAll('.links a input');
var filteredItem = [];

tags.forEach((tag) => {
    tag.addEventListener('click', (e) => {
        if (e.target.checked) {
            filteredItem.push(e.target.value);
            update();
        }
    });
})
console.log(filteredItem);

function update() {
    var productList = document.querySelectorAll('.product');
    for (var i = 0; i < productList.length; i++) {
        var check = false;
        var product = productList[i];
        var temp = product.querySelector('tags').innerHTML;
        console.log(temp);

        const TempFilteredArr = temp.split(',');

        filteredItem.forEach((j) => {
            TempFilteredArr.forEach((i) => {
                if (j == i) {
                    check = true;
                }
            })
        })
        if (!check && filteredItem.length > 0) {
            product.style.display = "grid"
        }
        else {
            product.style.display = "none"
        }
    }
}


















// Sidebar Menu

let sideBar = document.querySelector('.menu-bar');
let sideBarMenu = document.querySelector('.sidebar-menu');
let navCloseBtn = document.getElementById('nav-close');


let navLinks = document.querySelectorAll('.sidebar-menu ul li a');


sideBar.addEventListener('click', (e) => {
    e.preventDefault();
    sideBarMenu.style.left = '0';
})
navCloseBtn.addEventListener('click', closeSidebar)

navLinks.forEach((link) => {
    link.addEventListener('click', closeSidebar)
})
function closeSidebar(e) {
    e.preventDefault();
    sideBarMenu.style.left = '-50%';
}