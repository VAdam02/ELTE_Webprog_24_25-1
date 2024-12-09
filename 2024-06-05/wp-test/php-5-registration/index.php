<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mission 5</title>
    <link rel="stylesheet" href="src/index.css">
    <link rel="stylesheet" href="src/task.css">
</head>

<body>
    <header>
        <h1>5. Regisztráció / Registration</h1>
    </header>

    <div id="content">
        <form novalidate action="index.php">
            <div class="input">
                <label for="seriesName">Szereplő neve / Character name</label>
                <input type="text" name="seriesName" id="seriesName" placeholder="Szereplő neve / Character name">
            </div>
            <div class="input">
                <label for="realName">Valódi név / Real name</label>
                <input type="text" name="realName" id="realName" placeholder="Valódi név / Real name">
            </div>
            <div class="input">
                <label for="email">E-mail cím / E-mail address</label>
                <input type="email" name="email" id="email" placeholder="E-mail cím / E-mail address">
            </div>            
            <div class="input">
                <label for="born">Születés idő / Date of Birth</label>
                <input type="date" name="born" id="born" placeholder="Születés idő / Date of Birth">
            </div>
            <div class="input">
                <label for="dead">Elhalálozás ideje / Date of dead</label>
                <input type="date" name="dead" id="dead" placeholder="Elhalálozás ideje / Date of dead">
            </div>
            <div class="input">
                <label for="saga">Film / Movie</label>
                <select name="saga" id="saga">
                    <option value=""></option>
                    <option value="Stargate">Stargate (1994)</option>
                    <option value="ArkOfTruth"> Stargate: The Ark of Truth (2008)</option>
                    <option value="Continuum">Stargate: Continuum (2008)</option>
                    <option value="SG-1">Stargate SG-1 (1997–2007)</option>
                    <option value="Infinity"> Stargate Infinity (2002–2003)</option>
                    <option value="Atlantis">Stargate Atlantis (2004–2009)</option>
                    <option value="Universe">Stargate Universe (2009–2011)</option>
                    <option value="Origins">Stargate Origins (2018)</option>
                </select>
            </div>
            <div class="input">
                <button type="submit">Küldés / Send</button>
            </div>
        </form>

        <div id="confirmation">
            Sikeres rögzítés! / Saved successful!
        </div>

        <div id="testing">
            <h2>Linkek a teszteléshez / Links for testing</h2>
            <div>A megoldásod nem elég, ha helyes eredményt az ezekre a tesztekre! Ez csak segítség, ha szeretnéd ellenőrizni.</div>
            <div>Your solution is not necessarily correct if it passes these tests! This is just a help if you want to check.</div>
            <ul>
                <li><a href="index.php?seriesName=Joe Doe&realName=John Higgins&email=joe99%40example.com&born=222/11/2023&dead=&saga=Continuum">Helyes / Correct</a></li>
                <li><a href="index.php?seriesName=&realName=John Higgins&email=joe99%40example.com&born=22/11/2023&dead=&saga=Continuum">Hiányzó mező / Missing field</a></li>
                <li><a href="index.php?seriesName=Joe Doe&realName=John Higgins&email=joe99%40.com&born=22/11/2023&dead=&saga=Continuum">Helytelen e-mail / Invalid e-mail</a></li>
                <li><a href="index.php?seriesName=Joe Doe&realName=John Higgins&email=joe99%40example.com&born=22/11&dead=&saga=Continuum">Nem megfelelő dátum / Invalid date</a></li>
                <li><a href="index.php?seriesName=Joe Doe&realName=John Higgins&email=joe99%40example.com&born=22/11/2023&dead=&saga=anything">Nem megfelelő film / Invalid movie</a></li>
            </ul>
        </div>
    </div>
</body>
</html>