<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task 5</title>
    <link rel="stylesheet" href="src/index.css">
    <link rel="stylesheet" href="src/task.css">
</head>

<body>
    <header>
        <h1>5. Szállás / Hotel</h1>
    </header>

    <div id="content">
        <form novalidate action="index.php">
            <div class="input">
                <label for="name">Szállásfoglaló neve / Name on reservation</label>
                <input type="text" name="name" id="name" placeholder="Szállásfoglaló neve / Name on reservation">
            </div>
            <div class="input">
                <label for="email">E-mail cím / E-mail address</label>
                <input type="email" name="email" id="email" placeholder="E-mail cím / E-mail address">
            </div>
            <div class="input">
                <label for="people">Személyek száma / Number of people</label>
                <input type="number" name="people" id="people" placeholder="Személyek száma / Number of people">
            </div>
            <div class="input">
                <label for="children">Gyerekek / Children</label>
                <input type="number" name="children" id="children" placeholder="Gyerekek száma / Number of children">
            </div>
            <div class="input">
                <label for="payment_method">Fizetési mód / Payment method</label>
                <select name="payment_method" id="payment_method">
                    <option value=""></option>
                    <option value="cash">Készpénz érkezéskor / Cash on arrival</option>
                    <option value="card">Bankkártya / Debit or credit card</option>
                    <option value="transfer">Banki átutalás / Wire transfer</option>
                    <option value="coupon">Ajándékutalvány / Gift coupon</option>
                    <option value="other">Egyéb / Other</option>
                </select>
            </div>
            <div class="input">
                <button type="submit">Küldés / Send</button>
            </div>
        </form>
        
        <div id="confirmation">
            Sikeres foglalás! / Reservation successful!
        </div>

        <div id="testing">
            <h2>Linkek a teszteléshez / Links for testing</h2>
            <div>A megoldásod nem elég, ha helyes eredményt az ezekre a tesztekre! Ez csak segítség, ha szeretnéd ellenőrizni.</div>
            <div>Your solution is not necessarily correct if it passes these tests! This is just a help if you want to check.</div>
            <ul>
                <li><a href="index.php?name=Joe&email=joe99%40example.com&people=5&children=2&payment_method=card">Helyes / Correct</a></li>
                <li><a href="index.php?name=&email=joe99%40example.com&people=5&children=2&payment_method=card">Hiányzó mező / Missing field</a></li>
                <li><a href="index.php?name=Xy&email=joe99%40example.com&people=5&children=2&payment_method=card">Helytelen név / Incorrect name</a></li>
                <li><a href="index.php?name=Joe&email=joe99%40.com&people=5&children=2&payment_method=card">Helytelen e-mail / Incorrect e-mail</a></li>
                <li><a href="index.php?name=Joe&email=joe99%40example.com&people=5.2&children=2&payment_method=card">Személyek száma nem egész / Number of people is not an integer</a></li>
                <li><a href="index.php?name=Joe&email=joe99%40example.com&people=0&children=2&payment_method=card">Személyek száma tartományon kívüli / Number of people is out of range</a></li>
                <li><a href="index.php?name=Joe&email=joe99%40example.com&people=6&children=2.5&payment_method=card">Gyerekek száma nem egész / Number of children is not an integer</a></li>
                <li><a href="index.php?name=Joe&email=joe99%40example.com&people=6&children=7&payment_method=card">Gyerekek száma tartományon kívüli / Number of children is out of range</a></li>
                <li><a href="index.php?name=Joe&email=joe99%40example.com&people=3&children=1&payment_method=other">Érvénytelen fizetési mód / Invalid payment method</a></li>
            </ul>
        </div>
    </div>
</body>
</html>