class Product {
  title = 'DEFAULT';
  image;
  price;
  desciption;

  constructor(title, image, price, desciption) {
    this.title = title;
    this.image = image;
    this.price = price;
    this.desciption = desciption;
  }
}

class ShoppingCart {
  items = [];

  addProduct(product) {
    this.items.push(product);
    this.totalOutput.innerHTML = `<h2>Total: $${1}</h2>`;
  }

  render() {
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
        <h2>Total: $${0}</h2>
        <button>Order Now!</button>
    `;
    cartEl.classList.add('cart');
    this.totalOutput = cartEl.querySelector('h2');
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log('Added to the cart');
    console.log(this.product);
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.classList.add('product-item');
    prodEl.innerHTML = `
        <div>
            <img src="${this.product.image}" alt="${this.product.title}">
            <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>$${this.product.price}</h3>
                <p>${this.product.desciption}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  listOfProducts = [
    new Product(
      "Women's Wave Rider 23",
      'https://cdn.shopify.com/s/files/1/0258/5411/5893/products/411114.969A_Citadel-Glacier-Gray_A_500x500.png?v=1587227874',
      '120.00',
      'Wave Rider 23 features a dual compound midsole using U4ic and U4icX technologies for unrivalled responsiveness and exhilarating runs. Mizuno Wave cushioning technology provides ultra soft comfort in a super secure fit, coupled with a lightweight and breathable mesh upper to offer controlled temperatures and top unwavering performance.'
    ),
    new Product(
      'Unisex Elite Light Cushion Mini Crew',
      'https://cdn.shopify.com/s/files/1/0258/5411/5893/products/Elite_Mini_Crew_Light_Cushion_Black_side_view_1024x1024.png?v=1587215361',
      '16.00',
      'Engineered with anatomical design and Targeted Compression, providing a Custom-Like Fit and reduced risk of blisters, plus our Light Cushion for added impact protection.'
    ),
  ];

  render() {
    const prodList = document.createElement('ul');
    prodList.classList.add('product-list');
    for (const product of this.listOfProducts) {
      const prodItem = new ProductItem(product);
      const prodEl = prodItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById('app');

    const cartEl = new ShoppingCart();
    const prodList = new ProductList();
    renderHook.append(cartEl.render());
    renderHook.append(prodList.render());
  }
}

class App {
  static init() {
    const shop = new Shop();
    shop.render();
  }
}

App.init();
