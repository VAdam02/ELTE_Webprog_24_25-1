//BASIC TUTORIAL TASKS:

//6. Adott egy pont a síkon. Írj függvényt, amely megmondja, hogy a pont melyik síknegyedbe esik!
//basic syntax: function, if-else, return
//Mennyi időbe telt megoldani a feladatot: //TODO
console.log("6. feladat");

//TODO solve here

console.assert(quadrant(1, 1) === 1, "1, 1 should be in the first quadrant");
console.assert(quadrant(-1, 1) === 2, "-1, 1 should be in the second quadrant");
console.assert(quadrant(-1, -1) === 3, "-1, -1 should be in the third quadrant");
console.assert(quadrant(1, -1) === 4, "1, -1 should be in the fourth quadrant");
console.assert(quadrant(0, 0) === 0, "0, 0 should be in the center");

//PREDICATE TUTORIAL TASKS: (dokumentációt igényel)

//12.b. Egy sorozatban keresd meg az elsőt, ami megfelel a predikátumnak és add vissza az indexét. A feladatot fat arrow (const változóban megírt => függvény) és tömbfüggvény segítségével
//basic syntax: fat arrow, array method
//Mennyi időbe telt megoldani a feladatot: //TODO
console.log("12.b. feladat");

//TODO solve here
//const find2 = 

console.assert(find2([1, 2, 3, 4, 5], x => x < 0) === -1, "find2([1, 2, 3, 4, 5], x => x < 0) should be -1");
console.assert(find2([1, 2, 3, -4, 5], x => x < 0) === 3, "find2([1, 2, 3, -4, 5], x => x < 0) should be 3");
console.assert(find2([1, 2, 3, 4, 5], x => x % 2 === 1) === 0, "find2([1, 2, 3, 4, 5], x => x % 2 === 1) should be 0");
console.assert(find2([1, 2, 3, 4, 5], x => x % 2 === 0) === 1, "find2([1, 2, 3, 4, 5], x => x % 2 === 0) should be 1");
console.assert(find2([1, 2, 3, 4, 5], x => x === factorial(2)) === 1, "find2([1, 2, 3, 4, 5], x => x === factorial(2)) should be 1");

//TÖMBFÜGGVÉNYEK: (dokumentációt igényel)

//19. Adott egy matematikai kifejezés, ami (, [ és { zárójeleket is használ. Döntsd el egy verem (tömb []) segítségével, hogy helyes-e a zárójelezés!
//for, if-else, push, pop
//Mennyi időbe telt megoldani a feladatot: //TODO
console.log("19. feladat");

//TODO solve here

console.assert(isParenthesisValid("()") === true, "isParenthesisValid('()') should be true");
console.assert(isParenthesisValid("[]") === true, "isParenthesisValid('[]') should be true");
console.assert(isParenthesisValid("{}") === true, "isParenthesisValid('{}') should be true");
console.assert(isParenthesisValid("()[]{}") === true, "isParenthesisValid('()[]{}') should be true");
console.assert(isParenthesisValid("([{}])") === true, "isParenthesisValid('([{}])') should be true");
console.assert(isParenthesisValid("(") === false, "isParenthesisValid('(') should be false");
console.assert(isParenthesisValid(")") === false, "isParenthesisValid(')') should be false");
console.assert(isParenthesisValid("([)]") === false, "isParenthesisValid('([)]') should be false");
console.assert(isParenthesisValid("([)") === false, "isParenthesisValid('([)') should be false");

//29. Pár napon keresztül minden délben megmértük a levegő hőmérsékletét.
//array functions

//29.a. Válogasd ki azokat az értékeket, amikor fagyott!
//Mennyi időbe telt megoldani a feladatot: //TODO
console.log("29.a. feladat");

//TODO solve here

console.assert(compareArrays(freezing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), []), "freezing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should be []");
console.assert(compareArrays(freezing([-1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [-1]), "freezing([-1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should be [-1]");
console.assert(compareArrays(freezing([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]), "freezing([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]) should be [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]");
console.assert(compareArrays(freezing([5, -4, 4, 10, 0, 3, 5, 1, "alma"]), [-4]), "freezing([5, -4, 4, 10, 0, 3, 5, 1, 'alma']) should be [-4]");

//29.b. Mindegyik hőmérséklet érték végére fűzd oda a C szöveget!
//Mennyi időbe telt megoldani a feladatot: //TODO
console.log("29.b. feladat");

//TODO solve here

console.assert(compareArrays(addC([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), ["1C", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C"]), "addC([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should be ['1C', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C']");

//29.c. Add meg a legmagasabb hőmérséklet értékét!
//Mennyi időbe telt megoldani a feladatot: //TODO
console.log("29.c. feladat");

//TODO solve here

console.assert(max([1, 2, 3, 4, 5, 6, 7, 8, 11, 10]) === 11, "max([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should be 11");

//29.d. Add meg, hányszor ment a hőmérséklet 20 fok alá!
//Mennyi időbe telt megoldani a feladatot: //TODO
console.log("29.d. feladat");

//TODO solve here

console.assert(countBelow20([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) === 10, "countBelow20([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should be 10");
console.assert(countBelow20([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -20]) === 11, "countBelow20([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -20]) should be 11");
console.assert(countBelow20([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -20, 20]) === 11, "countBelow20([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -20, 20]) should be 11");
console.assert(countBelow20([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -20, 20, 21]) === 11, "countBelow20([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -20, 20, 21]) should be 11");

//29.e. Döntsd el, van-e 40 fok fölötti érték!
//Mennyi időbe telt megoldani a feladatot: //TODO
console.log("29.e. feladat");

//TODO solve here

console.assert(hasAbove40([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) === false, "hasAbove40([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should be false");
console.assert(hasAbove40([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 40]) === false, "hasAbove40([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 40]) should be false");
console.assert(hasAbove40([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 40, 41]) === true, "hasAbove40([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 40, 41]) should be true");

//29.f. Döntsd el, hogy mindegyik hőmérsékletérték pozitív-e!
//Mennyi időbe telt megoldani a feladatot: //TODO
console.log("29.f. feladat");

//TODO solve here

console.assert(allPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) === true, "allPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should be true");
console.assert(allPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -40]) === false, "allPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -40]) should be false");

//29.g. Add meg az első olyan értéket, amikor 10 fok fölé ment a hőmérséklet!
//Mennyi időbe telt megoldani a feladatot: //TODO
console.log("29.g. feladat");

//TODO solve here

console.assert(firstAbove10([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) === undefined, "firstAbove10([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should be undefined");
console.assert(firstAbove10([1, 2, 3, 4, 5, 6, 7, 11, 9, 10, 10]) === 11, "firstAbove10([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) should be 11");

//UTILS
function factorial(n)
{
    let result = 1;
    for (let i = 2; i <= n; i++)
    {
        result *= i;
    }
    return result;
}

function compareArrays(arr1, arr2)
{
    if (arr1.length !== arr2.length) { return false; }
    for (let i in arr1)
    {
        if (arr1[i] !== arr2[i]) { return false; }
    }
    return true;
}
