const API =
    "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";
// const APIBAS = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json'

// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     // window.ActiveXObject -> xhr = new ActiveXObject()
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status !== 200){
//                 console.log('Error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     };
//     xhr.send();
// };

class ProductsList {
    constructor(container = ".products") {
            this.container = container;
            this.goods = []; //массив товаров из JSON документа
            this._getProducts().then((data) => {
                //data - объект js
                this.goods = data;
                //                 console.log(data);
                this.render();
            });
        }
        // _fetchProducts(cb){
        //     getRequest(`${API}/catalogData.json`, (data) => {
        //         this.goods = JSON.parse(data);
        //         console.log(this.goods);
        //         cb();
        //     })
        // }
    async _getProducts() {
        try {
            const result = await fetch(`${API}/catalogData.json`);
            return await result.json();
        } catch (error) {
            console.log(error);
        }
    }
    calcSum() {
        return this.allProducts.reduce((accum, item) => (accum += item.price), 0);
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            //            this.allProducts.push(productObj);
            block.insertAdjacentHTML("beforeend", productObj.render());
        }
    }
}

class ProductItem {
    constructor(product, img = "https://via.placeholder.com/200x150") {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
    }
}

class BasketItem {
    constructor(product, img = 'https://via.placeholder.com/50x50"') {
        this.name = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.quantity = product.quantity;
        this.img = img;
    }

    render() {
        return `<div class="basket-product-item" data-id="${this.id}">
        <img src="${this.img}" alt="Some img">
        <div class="basket-desc">
            <h3>${this.name}</h3>
            <h4>Quantity: ${this.quantity}</h4>
            <p>${this.price} $</p>
        </div>
        <button class = "button-del">Remove</button>
    </div>`;
    }
}

class Basket {
    constructor(container = ".basket-vis") {
        this.container = container;
        this.goodsBasket = [];
        this._getProducts().then((data) => {
            this.goodsBasket = data;
            this.render();
            this._basketAct();
        });
    }

    async _getProducts() {
        try {
            const result = await fetch(`${API}/getBasket.json`);
            return await result.json();
        } catch (error) {
            console.log(error);
        }
    }

    _basketAct() {
        let elBasket = document.querySelector(this.container);
        document.body.addEventListener("click", (e) => {
            if (e.target.className == "btn-cart") {
                elBasket.classList.toggle("basket-non-visible");
            } else {
                elBasket.classList.add("basket-non-visible");
            }
        });
    }

    addGood() {}

    removeGood() {}

    changeGood() {}

    render() {
        const block = document.querySelector(this.container);
        let blockContent = `<span>Стоимость всех товаров ${this.goodsBasket.amount}</span> \
        <span>Количество товаров ${this.goodsBasket.countGoods}</span>`;
        for (let i of this.goodsBasket.contents) {
            const basketObj = new BasketItem(i);
            blockContent = blockContent + basketObj.render();
        }
        block.insertAdjacentHTML("beforeend", blockContent);
    }
}

let list = new ProductsList();
// console.log(list.allProducts);
let basket = new Basket();

// let elBasket = document.querySelector(".basket-vis");
// document.body.addEventListener("click", (e) => {
// if (e.target.className == "btn-cart") {
// elBasket.classList.toggle("basket-non-visible");
// } else {
// elBasket.classList.add("basket-non-visible");
// }
// });
// console.log(basket);