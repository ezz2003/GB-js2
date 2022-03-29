class ProductList {
    constructor(container = ".products") {
        this.container = container;
        this.goods = [];
        this._fetchProducts(); //рекомендация, чтобы метод был вызван в текущем классе
        this.render(); //вывод товаров на страницу
    }
    _fetchProducts() {
        this.goods = [
            { id: 1, title: "Notebook", price: 2000 },
            { id: 2, title: "Mouse", price: 20 },
            { id: 3, title: "Keyboard", price: 200 },
            { id: 4, title: "Gamepad", price: 50 },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
            //           block.innerHTML += item.render();
        }
    }
}

class ProductItem {
    constructor(product, img = "https://via.placeholder.com/200x150") {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render() {
        return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`;
    }
}

class BasketItem {
    constructor(product, count = 1, costCount = 0) {
        this.product = product;
        this.count = count;
        this.costCount = costCount;
        this.calcCostCount();
    }
    countIncrease() {
        this.count++;
        this.calcCostCount();
    }

    calcCostCount() {
        this.costCount = this.count * this.product.price;
    }

    render() {}
}

class BasketAll {
    constructor(productBask, totalPrice = 0) {
        this.productBask = productBask;
        this.basketItems = [];
        this.totalPrice = totalPrice;
    }

    addingToCart(prod) {
        let f = 1;
        for (let i of this.basketItems) {
            if (i.product.id == prod.product.id) {
                i.countIncrease();
                f = 0;
            }
        }
        if (f) {
            this.basketItems.push(new BasketItem(prod));
        }
    }

    deleteFromCart(prod) {}

    calcTotalPrice() {
        for (let i of this.basketItems) {
            totalPrice = +i.costCount;
        }
    }

    render() {}
}

let list = new ProductList();

//const products = [
//    {id: 1, title: 'Notebook', price: 2000},
//    {id: 2, title: 'Mouse', price: 20},
//    {id: 3, title: 'Keyboard', price: 200},
//    {id: 4, title: 'Gamepad', price: 50},
//];
//
//const renderProduct = (product,img='https://placehold.it/200x150') => {
//    return `<div class="product-item">
//                <img src="${img}">
//                <h3>${product.title}</h3>
//                <p>${product.price}</p>
//                <button class="buy-btn">Купить</button>
//            </div>`
//};
//const renderPage = list => document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
//
//renderPage(products);