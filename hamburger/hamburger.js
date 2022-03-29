class Hamburger {
    constructor(size, stuffing, topping) {
        this.size = size;
        this.sizes = [];
        this.stuffing = stuffing;
        this.stuffings = [];
        this.topping = topping;
        this.toppings = [];
        this._fetchToppings();
        this._fetchStuffing();
        this._fetchSize();
    }

    _fetchSize() {
        this.sizes = [
            { name: "big", calories: 40, price: 100 },
            { name: "little", calories: 20, price: 50 },
        ];
        this.sizes.forEach((e) => {
            if (e.name == this.size) {
                this.size = e;
            }
        });
    }

    _fetchToppings() {
        this.toppings = [
            { name: "seasoning", calories: 0, price: 15 },
            { name: "mayonnaise", calories: 5, price: 20 },
        ];
        let a = [];
        this.topping.forEach((e) => {
            this.toppings.forEach((el) => {
                if (e == el.name) {
                    a.push(el);
                }
            });
        });
        this.topping.length = 0;
        this.topping = a;
    }

    _fetchStuffing() {
        this.stuffings = [
            { name: "cheese", calories: 20, price: 10 },
            { name: "salad", calories: 5, price: 20 },
            { name: "potatoes", calories: 10, price: 15 },
        ];
        this.stuffings.forEach((e) => {
            if (e.name == this.stuffing) {
                this.stuffing = e;
            }
        });
    }

    // Добавить добавку;
    addTopping(topp) {
        this.toppings.forEach((e) => {
            if (e.name == topp) {
                console.log(e.name);
                this.topping.name = "e.name";
            }
        });
    }

    // Убрать добавку;
    removeTopping() {
        this.topping = "";
    }

    // Получить список добавок;
    getToppings() {
        let t = "Предлагаются добавки: \n";
        this.toppings.forEach((e) => {
            t = t + `Добавка ${e.name}, содержит ${e.calories}, цена ${e.price}\n`;
        });
        return t;
    }

    // Узнать размер гамбургера;
    getSize() {
        return this.size.name;
    }

    // Узнать начинку гамбургера;
    getStuffing() {
        return this.stuffing.name;
    }

    // Узнать цену;
    calculatePrice() {
        let totPrice = 0;
        this.topping.forEach((i) => {
            totPrice += i.price;
        });
        totPrice = totPrice + this.size.price + this.stuffing.price;
        let elTotPrice = document.querySelector('.total-price-number');
        elTotPrice.innerText=totPrice;
    }

    // Узнать калорийность;
    calculateCalories() {
        let totCalories = 0;
        this.topping.forEach((i) => {
            totCalories += i.calories;
        });
        totCalories = totCalories + this.size.calories + this.stuffing.calories;
        let elTotCalories = document.querySelector('.total-calories-number');
        elTotCalories.innerText = totCalories;
    }
}

// class Order {
// constructor()
// }
//

let size = "";
let stuffing = "";
let topping = [];
let hamb;

let elSizes = document.querySelectorAll('input[name="size"]');
let elStuffings = document.querySelectorAll('input[name="stuffing"]');
let elToppings = document.querySelectorAll('input[name="topping"]');
let elButtonBuy = document.querySelector(".buy-burger");

elButtonBuy.addEventListener("click", (e) => {
    elSizes.forEach((i) => {
        if (i.checked) {
            size = i.value;
        }
    });
    elStuffings.forEach((i) => {
        if (i.checked) {
            stuffing = i.value;
        }
    });
    elToppings.forEach((i) => {
        if (i.checked) {
            topping.push(i.value);
        }
    })
    hamb = new Hamburger(size, stuffing, topping);
    console.log(hamb);
    hamb.calculatePrice();
    hamb.calculateCalories();
});

// document.body.addEventListener("click", (event) => {
//     let click = event.target;
//     switch (click.className) {
//         case 'size-little':
//             size = 'little';
//            alert(`Выбор ${size}`)
//             break;
//         case 'size-big':
//             size = 'big';
//             break;
//         case 'stuffing-cheese':
//             stuffing = 'cheese';
//             alert(`Выбор ${stuffing}`)
//             break;
//         case 'stuffing-salad':
//             stuffing = 'salad';
//             break;
//         case 'stuffing-potatoes':
//             stuffing = 'potatoes';
//             break;
//         case 'topping-seasoning':
//             hamb.addTopping('seasoning');
//             break;
//         case 'topping-mayonnaise':
//             hamb.addTopping('mayonnaise');
//             break;
//         case 'topping-no-topping':
//             hamb.removeTopping();
//             break;
//         case 'calculate-price':
//             alert(hamb.calculatePrice());
//             break;
//     }

//     if (size && stuffing) {
//         hamb = new Hamburger(size, stuffing);
//         console.log(hamb);
//     }

// });