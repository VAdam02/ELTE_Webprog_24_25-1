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
