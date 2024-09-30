//1. Egy tömbben megkaptuk, hogy a megemelkedett dunai vízállás mellett az egyes hidak alatt milyen magas hajó fér át maximum. Egy hajó társaság felkért arra, hogy vizsgáld meg, hogy az 5 méter magas hajójuk végig tud-e menni a vizsgált szakaszon. (1 pont)
//A feladat csak és kizárólag tömbfüggvény(ek) használatával fogadható el

const maxShipHeight = randomArray(10, 4, 10);
const shipHeight = 5;

//TODO solve task here

//2. A bemenetként kapott ";"-vel elválasztott szavakat darabold fel, majd add vissza az egyes szavak hosszúságának összegét. (2 pont)
//A feladat csak és kizárólag tömbfüggvény(ek) használatával fogadható el

const words = "apple;ball;cat;dog;elephant;flower;guitar;house;island;jacket";
const separator = ";";

//TODO solve task here

//3.a. Kérj be egy számot egy beviteli mezőből és jeleníts meg N db gombot. (Új szám megadása esetén az előző tartalmat töröljük ki) (3 pont)

//TODO solve task here

//Az egyes gombokra való kattintáskor növeld meg egy közös változó értékét és cseréld le a gomb szövegét erre az értékre
//3.b. Ha minden egyes gombra külön eseménykezelőt hozol létre, akkor 2 pont
//3.c. Ha delegálás segítségével oldod meg egy eseménykezelővel, akkor 4 pont

//TODO solve task here

//UTILS
//min <= x < max
function randomArray(length, min, max) {
    return Array.from({ length: length }, () => Math.floor(Math.random() * (max - min)) + min);
}