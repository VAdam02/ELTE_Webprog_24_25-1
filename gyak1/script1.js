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