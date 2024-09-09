console.log("Hello 3");

//SOHA ne használd
//var akarmi = "25";

const konstans = "ez egy konstans szöveg";
let valtozo = "ez egy változó";

if (false) {
    konstans = "alma"; //nem fog szólni a hibáról ha nem ér oda a kód
}

valtozo = 25;

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log("Páros " + i);
        console.log("Páros ", i); //debug esetén inkább ezt használd
    }
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

console.log("70 fahrenheit celsiusban", fahrenheitToCelsius(70))

const fahrenheitToCelsius2 = (fahrenheit) => {
    return (fahrenheit - 32) / 1.8;
}

console.log("70 fahrenheit celsiusban 2", fahrenheitToCelsius2(70))

function percentage(number, percent) {
    return number * percent / 100;
}

const percentage2 = (number, percent) => {
    return number * percent / 100;
}

function lnko(a, b) {
    if (a < b) {
        let c = a;
        a = b;
        b = c;
    }

    let maradek = a % b;
    while (maradek > 0) {
        a = b;
        b = maradek;
        maradek = a % b;
    }
    return b;
}

const tomb = [24, 2, 1];
tomb[2] = "alma";

console.log("Tömb tartalma:", tomb)

//TÖMBFÜGGVÉNYEK

function randomArray(length, min, max) {
    let tomb = [];
    for (let i = 0; i < length; i++) {
        tomb.push(Math.floor(Math.random() * (max - min) + min));
    }
    return tomb;
}

function evenNumbers(array) {
    const results = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) { // nem egyenlő és típusvizsgálat !==
            results.push(array[i])
        }
    }
    return results;
}

const inputArray = randomArray(10, -5, 5);
console.log("Páros számok kiszűrése", inputArray, inputArray.filter((number) => {
    return number % 2 == 0;
}))

//tömb másolása, majd rendezése
console.log(inputArray.map(number => number).sort());

const arr1 = [1, 2, 3, 4, 5]
const arr2 = arr1.map(element => element);
arr1[3] = "A";

function generateMatrix(a, b, min, max) {
    const matrix = [];
    for (let i = 0; i < a; i++) {
        matrix.push(randomArray(b, min, max));
    }
    return matrix;
}

const matrix = generateMatrix(4, 5, 0, 10);
console.log(matrix, matrix[2][3])

//matrix[2,3] //véletlenül se