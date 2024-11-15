### 5. Szállás (php-5-hotel, 12 pont)

Teljes mappa futtatásához használd ezt a parancsot:
php -S localhost:3000 -t ./

Szuper! Kiválasztottuk, hogy hol nyaralunk, már csak le kell foglalni a szállást! Készítsd el a kiindulási csomagban található űrlap ellenőrzését az alábbi pontok szerint! Ha az űrlap kitöltésében hibát észleltél, akkor jeleníts meg egy egyértelmű hibaüzenetet a mezők alatt!

- a. (2 pont) Minden mező kitöltése kötelező.
- b. (1 pont) A foglaló neve legalább 3 karakterből kell álljon.
- c. (1 pont) Az e-mail cím formailag helyes kell legyen.
- d. (1 pont) A személyek száma egész szám kell legyen.
- e. (1 pont) A személyek száma legalább 1, legfeljebb 20 lehet.
- f. (1 pont) A gyerekek száma egész szám kell legyen.
- g. (1 pont) A gyerekek száma legalább 0, legfeljebb a személyek száma lehet.
- h. (1 pont) A fizetési mód az alábbi listában található értékek egyike kell legyen:
    - `['cash', 'card', 'transfer', 'coupon']`
- i. (1 pont) Az űrlap szövegmezői legyenek állapottartók, vagyis a beírt értékek elküldés után is maradjanak meg!
- j. (1 pont) A legördülő menü is legyen állapottartó!
- k. (1 pont) Hibátlan kitöltés esetén (és csak akkor) jelenjen meg a `confirmation` azonosítójú elem!
