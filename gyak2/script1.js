class Product {
    name;
    manufaturer;
    price;
    quantity;

    constructor(name, manufaturer, price, quantity) {
        this.name = name;
        this.manufaturer = manufaturer;
        this.price = price;
        this.quantity = quantity;
    }

    print() {
        //console.log([this.name, this.manufaturer, this.price, this.quantity]);
        console.log({
            name: this.name,
            gyarto: this.manufaturer,
            price: this.price,
            db: this.quantity
        })
    }
}

class Warehouse {
    #stock = [];

    //constructor() {}

    add(newProduct) {
        /*
        const selected = this.#stock.find(prod => {
            return newProduct.name === prod.name
             && newProduct.manufaturer === prod.manufaturer;
        })
        */
        const selected = this.#stock.find(prod => newProduct.name === prod.name
             && newProduct.manufaturer === prod.manufaturer);
        
        //null == undefined true
        //null === undefined false
        if (selected == undefined) {
            this.#stock.push(newProduct);
        } else {
            selected.quantity += newProduct.quantity;
        }   
    }

    print() {
        this.#stock.forEach(prod => prod.print());
    }
}

const warehouse = new Warehouse();
warehouse.add(new Product("alma", "1. kft", 100, 10));
warehouse.add(new Product("körte", "2. kft", 200, 5));

let element;

let number = 0;

addEventListener("load", event => {
    element = document.getElementById("numberOutput");
    console.log(element)

    //ne használd ha nem muszáj
    /*
    plus.onclick = (event) => {
        console.log(1, event);
    }

    plus.onclick = (event) => {
        console.log(2, event);
    }
    */

    plus.addEventListener("click", (esemeny) => {
        number++;
        numberOutput.innerText = number;
    })

    minus.addEventListener("click", (esemeny) => {
        number--;
        numberOutput.innerText = number;
    })

    /*
    plus.addEventListener("click", (esemeny) => {
        console.log(2, event);
    })
    */

    document.querySelector("div > input[type=text]").addEventListener("change", inputText) //(event) => inputText(event)

    document.querySelector("div > input[type=number]")
})

function removeOldTexts() {
    document.querySelector("div > p").remove()
}

function inputText(event) {
    console.log(event.target.value);
    //console.log({asd: event.target}); //prinnt out HTMLElement attributes
}