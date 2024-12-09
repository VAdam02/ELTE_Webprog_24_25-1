# Évfolyam zh

## Tudnivalók

- A zárthelyi megoldására **210 perc** áll rendelkezésre, amely **magába foglalja** a kezdőcsomagban található `README.hun.md` fájl kitöltésére, a feladatok elolvasására, az anyagok letöltésére, összecsomagolására és feltöltésére szánt időt is.
- A feladatokat a zh rendszeren keresztül kell beadni. **A rendszer a határidőben lezár, ezután nincs lehetőség beadásra**.
- A feladatok megoldásához a zh rendszerbe előre feltöltött segédanyagok használhatók, illetve a ZH mód mellett engedélyezett [JavaScript](https://developer.mozilla.org/en-US/) és [PHP dokumentáció](https://www.php.net/). **A zárthelyi időtartamában emberi segítség** (szinkron, aszinkron, chat, fórum, stb) **és mesterséges intelligencia** (ChatGPT, Bing AI, GitHub Copilot, stb.) **igénybe vétele tilos!** Ezek elfogadásáról nyilatkoztok a kezdőcsomagban található `README.hun.md` fájlban, amelyben egyben tudomásul is veszitek az esetleges következményeket.
- A feladatok nem épülnek egymásra, **tetszőleges sorrendben** megoldhatók.
- A feladatok megoldásához először [töltsd le az általunk készített keretprogramot](???). Ebben minden feladat külön könyvtárban helyezkedik el. Minden könyvtárban előkészítettük a HTML, CSS, JavaScript, PHP állományokat. Ezekben dolgozz! A kliensoldali feladatokban általában csak a `.js` fájlhoz kell hozzányúlni, de ha kell, akkor a HTML is módosítható, sőt több `.js` fájlra is szétoszthatod a megoldásodat, de ez egyáltalán nem elvárás.
- A letöltött keretprogramban lévő `README.hun.md` fájlban töltsétek ki a nevetek és a Neptun azonosítótokat (a <> jeleket nem kell beleírni)! **A megfelelően kitöltött `README.hun.md` állomány nélküli megoldásokat nem értékeljük!**
- Minden feladat könyvtárában találsz egy `TASKS.md` fájlt. Ezekben az egyes `[ ]` közötti szóközt cseréld le `x`-re azoknál a részfeladatoknál, amiket sikerült (akár részben) megoldanod! Ez segít nekünk abban, hogy miket kell néznünk az értékeléshez.
- A PHP telepítéséhez töltsd le és futtasd a [`PhpComposerInstaller.exe`](???) fájlt!

## JavaScript feladatok

### 1. Bolygók (js-1-planets, 10 pont)

Az SG-1 már több bolygót is felfedezett, és ismeri azok lakóit. Minden bolygó alapvető jellemzőit egyetlen adattáblában gyűjtötték össze. Hammond tábornok megbízott téged, hogy készíts jelentést amely választ ad a kérdéseire. A kiinduló HTML dokumentumba már beágyazott `planets.js` állomány egy `planets` tömböt definiál, amelynek elemei az eddig felfedezett bolygókat írják le (név, megnevezés, leírás, lakosok, minimum hőmérséklet celsius fokban, maximum hőmérséklet celsius fokban, kapcsolat a földdel). Nézd meg az adatszerkezetet, majd oldd meg ezen tömb felhasználásával **programozottan** az alábbi feladatokat! _(Segítség: a mellékelt képről leolvashatók a helyes válaszok.)_ Mivel a dokumentumban a `planets.js` script után az `index.js` is beágyazásra került, így az utóbbiban minden különösebb gond nélkül használható az előbbiben található tömb, ahogyan ezt a beírt `console.log()` is bizonyítja.

- a. (1 pont) A `task1` azonosítójú elembe írd ki, hogy hány bolygó található összesen a tömbben!
- b. (2 pont) A `task2` azonosítójú elembe írd ki, hogy hány olyan bolygó található a tömbben, amely elérhető a földről!
- c. (2 pont) A `task3` azonosítójú elembe írd ki a bolygók átlag középhőmérsékletét! (A kerekítéssel nem szükséges foglalkozni.)
- d. (2 pont) A `task4` azonosítójú elembe írd ki a  leghidegebb bolygót a hozzá tartozó hőmérséklettel!
- e. (3 pont) A `task5` azonosítójú elembe sorold fel az összes különböző fajt, amelyek a bolygókon élnek. Vedd figyelembe, hogy nem csak egy faj él minden bolygón, hanem többen is élhetnek egymással.


### 2. Tárcsázó (js-2-dialer, 14 pont)

A csillagkapu tárcsázó programja meglehetősen elavult, és sokkal modernebb verzióra van szükségünk. A tárcsázónak 7 ékzárat kell elfogadnia. Minden ékzár egy egyedi koordinátát jelent a térben, lehetővé téve a csillagkapu számára, hogy kapcsolatot létesítsen egy másik csillagkapuval a galaxis egy adott helyén. A ékzárak a más bolygók tárcsázására szolgáló címrendszer részét képezik. A hetedik ékzár, más néven a kiindulási pont, minden csillagkapu egyedi jellemzője, és referenciapontként szolgál a kapuhálózat számára. A többi, térbeli koordinátákat jelző ékzártól eltérően a kiindulási pont az egyes csillagkapu térbeli elhelyezkedésére jellemző.

- a. (1 pont) Az `addresses.js` fájl `planets` tömbje alapján generáld le a tárcsázót a `signs` objektumba. Minden cella értéke a megfelelő ékzár képe amelyet az `src` mappában találsz.
- b. (1 pont) Minden kattintásra valamelyik ékzáron add hozzá a táblázat cellájához a `selected` osztályt.
- c. (2 pont) A kiválasztott ékzárakat tárold el, oldd meg, hogy egy ékzárat csak egyszer lehessen hozzáadni. 
- d. (1 pont) A 7 kiválasztott ékzár után jelenítsd meg a `message` div-et tetszőleges üzenettel.
- e. (2 pont) Az b-c illetve f-g pontban foglaltakat a delegate függvény segítségével oldd meg.
- f. (3 pont) A 7. ékzár kiválasztása után vizsgáld meg valamennyi eltárolt bolygó `glyphs` tömbjét, és az egyezés függvényében jeleníts meg üzenetet a `message` div-ben.
- g. (2 pont) Az egyes ékzárak kiválasztásakor a táblázat felett található `address` objektum megfelelő cellájában helyezd el a kiválasztott ékzárat.
- h. (2 pont) Az `address` objektum egyes celláira kattintva távolítsd el az adott ékzárat a címből és a következő kattintáskor ennek a helyére kerüljön a kiválasztott ékzár. Ezzel biztosítva a javítás lehetőségét.

### 3. Csillagtérkép (js-3-starmap, 12 pont)

Az évek során a Csillagkapu projekt kinőtte a CSK-1 erőforrásait, így több CSK csapat felállítása mellett döntöttek. Ahhoz, hogy könnyen nyomon lehessen követni az egyes csapatok mozgását egy csillagtérkép fejlesztését bízzák rád. A csillagtérkép egyszerű implementálása érdekében az alábbi egyszerűsítést alkalmazzuk. Minden misszió 15 másodpercig tartózkodik az adott bolygón, és mivel a csillagkapun történő áthaladás hossza nem függ a távolságtól, így az áthaladás egységesen 5 másodperc kell legyen. Ezek figyelembevételével oldd meg az alábbi feladatokat.

- a. (1 pont) A Föld kordinátáinak helyére rajzolj ki egy 8px sugarú piros kört.
- b. (2 pont) A felhasználó minden kattintásának helyén jeleníts meg egy 5px sugarú világoszöld kört, illetve a földet és a bolygót kösd össze egy 2px vastag egyenessel.
- c. (3 pont) A kattintáskor hozz létre a háttérben egy csapatot, akik kezdő koordinátája a föld, és kezdő sebességű az 5 másodperces utazásnak megfelelő. Ugyanebben az időpillanatban indítsd el a csapatot a célpont felé.
- d. (3 pont) Amikor a csapat eléri a bolygót állítsd meg 15 másodpercre, majd indítsd el visszafelé a föld felé.
- e. (3 pont) Amikor a csapat visszaér a földre szüntesd meg a csapatot.


## PHP feladatok

### 4. Tisztelgés (php-4-tribute, 10 pont)

A sorozat készítői úgy döntöttek, hogy készítenek egy oldalt, ahol emléket állítanak a sorozat leg Segíts nekik, hogy a játékokat meg tudják jeleníteni az új főoldalon!


- a. (1 pont) A `#content` azonosítójú elemen belülre listázz ki egy-egy `char` stílusosztályú `div`-et a `data.php` fájlban található `characters` tömb minden elemére! A `div` az adott elem bármely attribútumát tartalmahatja 
- b. (2 pont) Minden `div.char` elembe helyezz el egy képet, melynek forrása az adott szereplő `image` attribútumából generálható. Az útvonal minden kép esetében az `src/` mappa, adott nevű eleme.
- c. (1 pont) Minden kép `alt` attribútumát állíts be a játék `name` attribútumára!
- d. Minden `div.char` elembe helyezz el egy `info` stílusosztályú elemet, melynek tartalma:
    - 1 pont: A szereplő film béli és valódi neve.
    - 2 pont: Amennyiben a szereplő még él, úgy az életkora, amennyiben már elhunyt, úgy az elhalálozásának éve.
- e. (1 pont) Amennyiben az adott színész már nem él, a képén használd a `died` stílusosztályt.
- f. (2 pont) A `#content` azonosítójú elem fölé készíts egy `div`-et, amely felveszi a `.celebrate` stílust és annak az élő szereplőnek tartalmazza a nevét, és a születésnapját, akinek az mai naphoz a legközelebb van a születésnapja. 


### 5. Regisztráció (php-5-registration, 12 pont)

Remélhetőleg elkészültünk az emlék oldallal, viszont szembetűnő lehet, hogy eléggé hiányos a rajta található szeretplők listája. Egy ilyen adatbázis feltöltése nem egyszerű mutatvány, így készítened kell egy regisztrációs felületet, amely segítségével fel lehet vinni további elemeket.

- a. (2 pont) Minden mező kitöltése kötelező, kivéve az elhalálozás idejét.
- b. (1 pont) A szereplő filmbéli és valódi neve legalább 3 karakterből kell álljon.
- c. (1 pont) Az e-mail cím formailag helyes kell legyen.
- d. (2 pont) A dátumok megfelelő formátumúakkell legyenek.
- e. (2 pont) A film az alábbi listában található értékek egyike kell legyen:
    - `['Stargate', 'ArkOfTruth', 'Continuum', 'SG-1', 'Infinity', 'Atlantis', 'Universe', 'Origins']`
- f. (1 pont) Az űrlap szövegmezői legyenek állapottartók, vagyis a beírt értékek elküldés után is maradjanak meg!
- g. (2 pont) A legördülő menü is legyen állapottartó!
- h. (1 pont) Hibátlan kitöltés esetén (és csak akkor) jelenjen meg a `confirmation` azonosítójú elem!

### 6. Raktár (php-6-warehouse, 14 pont)

A CSK-1 utazásai során nagy mennyiségű különböző tárggyal tért vissza eddigi utazásairól. Téged kértek fel arra, hogy ezeknek egy megfelelő raktár kezelő rendszert építs.

- a. (2 pont) Az oldal tetején található bal oldali űrlap használatával legyen lehetőség egy új kategóriát létrehozni annak nevének és besorolásának megadásával!
- b. (2 pont) Az oldal tetején található jobb oldali űrlapban töltsd fel a legördülő menüt a létrehozott kategóriák neveivel!
- c. (2 pont) A jobb oldali űrlap elküldésekor mentsd el, hogy milyen nevű tárgyat melyik kategória, melyik szitjéhez rendeltünk hozzá.
- d. (3 pont) Jelenítsd meg a ketegóriák nevét és a bennük lévő tárgyakat a mintán látható módon, háromszintű!
- e. (3 pont) Ha az űrlapba beírt tárgy neve már létezik az adott kategóriában, frissítsd az adott tárgy adatait az újonnan megadottra.
- f. (2 pont) Minden tárgy mellett legyen egy `Törlés` feliratú link, amelyre kattintva a tárgy eltávolítható a raktárból!