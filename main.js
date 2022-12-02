const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer= document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    console.log('click');
    desktopMenu.classList.toggle('inactive');
}
  
menuBurger.addEventListener('click', toggleMobileMenu);
 
 
function toggleMobileMenu() {

    mobileMenu.classList.toggle('inactive');
}

carrito.addEventListener('click', toggleshoppingCartContainer);

function toggleshoppingCartContainer() {
    shoppingCartContainer.classList.toggle('inactive');
}


function toggleMobileMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    
    if(!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');

    }

    mobileMenu.classList.toggle('inactive');
}


function toggleCarritoshoppingCartContainer() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}


const productLista = [];
  productLista.push ({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  
    
    name: 'compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  

    name: 'pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

/*<section class="main-container">
        <div class="cards-container">
    
          <div class="product-card">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
            <div class="product-info">
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
              </figure>
            </div>
          </div>
    
        </div>
*/

for (product of productLista) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    //product: name, price, img-- product.image
    const productimg = document.createElement('img');
    productimg.setAttribute('src',product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText= '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText= product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productFigure = document.createElement('figure');
    const productImgCard= document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

    productFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);

    productCard.appendChild(productimg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);








}








