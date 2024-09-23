addEventListener("load", () => {
    console.log("Page loaded");

    //TODO EVENTLISTENERS GO HERE
});

//0. készíts egy szövegdobozt <input type="text" /> és biztosítsd, hogy csak számot lehessen bevinni a mezőbe
//Mennyi időbe telt megoldani a feladatot:

//TODO solve here

//14. Adott egy könyvtári nyilvántartás. Egy könyvről a következő adatokat tároljuk (hozzunk létre neki egy osztályt):
//Mennyi időbe telt megoldani a feladatot:
//szerző
//cím
//kiadás éve
//kiadó
//ISBN szám

class Book {

    //TODO solve here

}

const books = [
    new Book("J. K. Rowling", "Harry Potter and the Philosopher's Stone", 1997, "Bloomsbury", "9780747532743"),
    new Book("J. K. Rowling", "Harry Potter and the Chamber of Secrets", 1998, "Bloomsbury", "9780747538493"),
    new Book("J. K. Rowling", "Harry Potter and the Prisoner of Azkaban", 1999, "Bloomsbury", "9780747542155"),
    new Book("J. K. Rowling", "Harry Potter and the Goblet of Fire", 2000, "Bloomsbury", "9780747551003"),
    new Book("J. K. Rowling", "Harry Potter and the Order of the Phoenix", 2003, "Bloomsbury", "9780747551003"),
    new Book("J. K. Rowling", "Harry Potter and the Half-Blood Prince", 2005, "Bloomsbury", "9780747581086"),
    new Book("J. K. Rowling", "Harry Potter and the Deathly Hallows", 2007, "Bloomsbury", "9780747591054"),
    new Book("J. R. R. Tolkien", "The Hobbit", 1937, "Allen & Unwin", "9780048231470"),
    new Book("J. R. R. Tolkien", "The Lord of the Rings", 1954, "Allen & Unwin", "9780618640157"),
    new Book("J. R. R. Tolkien", "The Silmarillion", 1977, "Allen & Unwin", "9780007284257"),
    new Book("J. R. R. Tolkien", "The Children of Húrin", 2007, "HarperCollins", "9780007246224")
];

//14.a. Biztosíts lehetőséget új könyvek felvételéhez szöveges beviteli mezőkkel és egy gombbal
//Mennyi időbe telt megoldani a feladatot:
console.log("14.a. feladat");

//TODO solve here

//14.b. Felületen kérj be egy évszámot, és listázd ki az abban az évben megjelent könyvek címét a weboldalra! (ha nincs találat, akkor írd ki, hogy "Nincs találat!")
//Mennyi időbe telt megoldani a feladatot:
console.log("14.b. feladat");

//TODO solve here

//Nehezebb feladat (opcionális):
//14.c. Készíts egy legördülő mezőt, amelyben az egyes kiadók vannak felsorolva. Ha kiválasztunk egy kiadót a legördülő listából, akkor táblázatos formában jelenítsd meg a kiválasztott kiadóhoz tartozó könyveket! A legördülő lista választéka automatikus frissüljön, ha új könyvet adunk hozzá egy új kiadóval
//tipp: az ismétlődések kiszűrésére használható a tömbfüggvény filter és indexOf kombinációja
//a filternek felhasználjuk mind a 3 inputját és minden egyes elemnél megvizsgáljuk, hogy a most vizsgált értéknek az indexe megegyezik-e a tömbben az indexOf-al, ami az első előfordulásának helyét adja vissza, ha megegyezik, akkor megtartjuk, ha nem egyezik meg, akkor eldobjuk
//Mennyi időbe telt megoldani a feladatot:
console.log("14.c. feladat");

//TODO solve here
