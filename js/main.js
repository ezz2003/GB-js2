const products = [
    { id: 1, img: "img/notebook.png", title: "Notebook", price: 2000 },
    { id: 2, img: "img/mouse.png", title: "Mouse", price: 20 },
    { id: 3, img: "img/keyboard.png", title: "Keyboard", price: 200 },
    { id: 4, img: "img/gamepad.png", title: "Gamepad", price: 50 },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (vProd) => {
    return `<div class="product-item">
                <img src= ${vProd[1]} >
                <h3>${vProd[2]}</h3>
                <p>${vProd[3]}</p>
                <button class="buy-btn">Купить</button>
            </div>`;
};

const renderPage = (list, el) => {
    const productsList = list.map((item) => renderProduct(Object.values(item)));
    el.innerHTML = productsList.join("");
};

const elProducts = document.querySelector(".products");
renderPage(products, elProducts);