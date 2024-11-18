<?php
/*
Egy balatonparti étterem szeretne egy egységes rendszert létrehozni a rendelések kezelésére. Ennek elkészítéséhez a te segítségedet kérték. A weboldal két részből fog állni, az egyik ahol a rendeléseket lehet felvenni, a másik pedig ahol a már felvett rendeléseket lehet látni.

1) Beküldött adatok validálása 3 pont
name: kötelező megadni, szöveg, legalább 2 szóból áll
table: kötelező megadni, egész szám, [1, 40]
order: kötelező megadni, csak a lista eleme lehet
2) Beküldött adatok állapottartása hibás beküldés esetén 1 pont
3) Talált hibák megjelenítése 1 pont
4) Törlés gomb visszaállítja alapértelmezettre az űrlapot 1 pont
5) Sikeres beküldés esetén a rendelés eltárolása json fájlban 2 pont
6) Adatok beolvasása json fájlból és megjelenítése táblázatban 2 pont
*/
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <h1>Rendelés felvétel</h1>
        <form>
            <label>
                <span>Pincér neve:</span>
                <input type="text" name="name" placeholder="Nagy István">
            </label><br>
            <label>
                <span>Asztal:</span>
                <input type="number" name="table" placeholder="0">
            </label><br>
            <label>
                <span>Rendelés:</span>
                <select value="Kérlek válassz">
                    <option>Fagyi</option>
                    <option>Lángos</option>
                    <option>Hotdog</option>
                </select>
            </label><br>
            <input type="submit" name="send" value="Megrendelés">
            <input type="submit" name="clear" value="Törlés">
        </form>
    </div>
    <div>
        <h1>Rendelések</h1>
        <table>
            <thead>
                <tr>
                    <th>Pincér</th>
                    <th>Asztal</th>
                    <th>Rendelés</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Nagy István</td>
                    <td>25</td>
                    <td>Fagyi</td>
                </tr>
                <tr>
                    <td>Kis Anna</td>
                    <td>3</td>
                    <td>Lángos</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>