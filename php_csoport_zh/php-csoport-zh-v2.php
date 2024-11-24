<?php
/*
Nyilatkozom, hogy a feladatsort és/vagy annak megoldását részben vagy egészben sem teszem közzé 
semmilyen platformon, illetve nem továbbítom másik személy számára. Emellett kijelentem, hogy 
nem szereztem meg sem a feladatsort, sem annak megoldását részben vagy egészben sem, semmilyen 
platformon vagy másik személyen keresztül. Továbbá a megoldáshoz nem vettem igénybe semmilyen 
nem megengedett segédeszközt. Tudomásul veszem, hogy a fenti nyilatkozat megszegésének gyanúja 
esetén az érintettek (mindkét fél) zárthelyi eredményét érvénytelennek kell tekinteni nem 
megengedett segészkeszhöz használatából kifolyólag, akár visszamenőleg is!

[NÉV] [NEPTUN KÓD]

A megoldást nekem küldd el bezippelve, teamsen privátban 19:00-ig bezárólag.
*/

/*
Egy kompokat üzemeltető cég megbízott, hogy készíts egy felületet, ahol rögzíteni lehet a 
szállított járműveket. A te feladatod ebből elkészíteni két komponenst, ahol az egyiken a 
felhasználók rögzíthetik a járművek adatait és ezeket egy json fájlban eltárolni, illetve 
a másik ahol a fájlban tárolt adatokat jeleníted meg egy táblázatban.

1) Beküldött adatok validálása 3 pont
license: szöveg, kötelező megadni, 7 karakter hosszú
passengers: egész szám, kötelező megadni, [1, 9]
roof_rack: logikai érték
trailer: logikai érték
over_3_5t: logikai érték
2) Beküldött adatok állapottartása hibás beküldés esetén 1 pont
3) Talált hibák megjelenítése 1 pont
4) Törlés gomb visszaállítja alapértelmezettre az űrlapot 1 pont
5) Sikeres beküldés esetén a járművet hozzáfűzi egy json fájlban található tömbhöz 2 pont
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
        <h1>Jármű rögzítése</h1>
        <form>
            <label>
                <span>Rendszám</span>
                <input type="text" name="license" placeholder="ABC-123">
            </label><br>
            <label>
                <span>Utasok száma</span>
                <input type="text" name="passengers" placeholder="0">
            </label><br>
            <label>
                <input type="checkbox" name="roof_rack" value="tetőcsomagtartó"><span>Tetőcsomagtartó</span>
            </label><br>
            <label>
                <input type="checkbox" name="trailer" value="utánfutó"><span>Utánfutó</span>
            </label><br>
            <label>
                <input type="checkbox" name="over_3_5t" value="3.5t feletti"><span>3.5t feletti</span>
            </label><br>
            <input type="submit" name="send" value="Rögzítés">
            <input type="submit" name="clear" value="Törlés">
        </form>
    </div>

    <div>
        <h1>Járművek</h1>
        <table>
            <thead>
                <tr>
                    <th>Rendszám</th>
                    <th>Utasok száma</th>
                    <th>Tetőcsomagtartó</th>
                    <th>Utánfutó</th>
                    <th>3.5t feletti</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>ABC-123</td>
                    <td>1</td>
                    <td>true</td>
                    <td>false</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>DEF-456</td>
                    <td>4</td>
                    <td>false</td>
                    <td>true</td>
                    <td>false</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>