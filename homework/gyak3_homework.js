//1. Egy tömbben eltároltuk a Duna egyes városokban mért vízszintjét. Vizsgáld meg, hogy volt-e olyan mérési pont, ahol kiöntött a medréből, amennyiben a gátak 3 méteres vízállásig védenek. (1 pont)
//A feladat csak és kizárólag tömbfüggvény(ek) használatával fogadható el
//Mennyi időbe telt megoldani: //TODO

const waterLevels = randomArray(10, 0, 5);
const protectedTill = 3;

//TODO solve task here

//2. A bemenetként kapott ","-vel elválasztott névsort darabold fel, majd az "a" karaktert tartalmazó neveket ","-vel összefűzve add vissza. (2 pont)
//A feladat csak és kizárólag tömbfüggvény(ek) használatával fogadható el
//Mennyi időbe telt megoldani: //TODO

const names = "Alice,Ben,Charlotte,David,Emma,Frank,Grace,Henry,Isabella,Jack"
const separator = ",";
const character = "a";

//TODO solve task here

//3.a. Kérj be egy számot egy beviteli mezőből és jeleníts meg egy NxN-es szorzótáblát. (Új szám megadása esetén az előző táblázatot töröljük ki) (3 pont)
//Mennyi időbe telt megoldani: //TODO

//TODO solve task here

//Az egyes cellákra való kattintáskor változtasd meg a cella háttérszínét
//3.b. Ha minden egyes cellára külön eseménykezelőt hozol létre, akkor 2 pont
//3.c. Ha delegálás segítségével oldod meg egy eseménykezelővel, akkor 4 pont
//Mennyi időbe telt megoldani: //TODO

//TODO solve task here

//UTILS
//min <= x < max
function randomArray(length, min, max) {
    return Array.from({ length: length }, () => Math.floor(Math.random() * (max - min)) + min);
}