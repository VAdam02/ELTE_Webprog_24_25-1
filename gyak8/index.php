<?php
    //echo var_dump($_SERVER);
    echo $_SERVER["REMOTE_ADDR"] . "<br>";

    //php -S 0.0.0.0:3000 index.php //ez minden címre hallgat (localhost, 127.0.0.1, helyi ip cím, ...)

    /*
    http://127.0.0.1:3000
    http://localhost:3000
    http://[::1]:3000 //ipv6
    http://10.10.10.87:3000 //feladatkezelőben a hálózatnál tudod megnézni a sajátod
    */

    if (!($_SERVER["REMOTE_ADDR"] == "127.0.0.1" || $_SERVER["REMOTE_ADDR"] == "::1")) {
        echo "Az oldal csak helyi hálózatról érhető el";
        return;
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        echo $_SERVER["REQUEST_METHOD"] . "<br>";

        if ($_SERVER["REQUEST_METHOD"] == "GET") {
            //Do nothing
        } else if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if (isset($_POST["clear"])) {
                $_POST = array();
            }
            else if (isset($_POST["send"])) {
                $errorMessages = array();

                if (!isset($_POST["username"])) {
                    //echo "Username required<br>";
                    //$errorMessages[] = "Username is required"; //hozzáfűzés a tömb végére
                    $errorMessages["username"] = "Username is required";
                }
                else if (!strlen($_POST["username"]) >= 3) {
                    //echo "Username must be at least 3 characters<br>";
                    //$errorMessages[] = "Username must be at least 3 characters";
                    $errorMessages["username"] = "Username must be at least 3 characters";
                }

                if (!isset($_POST["age"])) {
                    //echo "Age required<br>";
                    $errorMessages["age"] = "Age is required";
                }
                else if (!is_numeric($_POST["age"])) {
                    //echo "Must be number<br>";
                    $errorMessages["age"] = "Must be number";
                }
                else if (!(18 <= $_POST["age"] && $_POST["age"] < 100)) {
                    //echo "Age out of limit<br>";
                    $errorMessages["age"] = "Age out of limit";
                }

                //var_dump($errorMessages); //kiechozza a tömb tartalmát

                if (count($errorMessages) > 0) {
                    echo "Hiba történt";
                }
                else {
                    //process
                    echo "Data processed";

                    //clear
                    $_POST = array(); //céges környezetben annyira nem szép, zh-n célnak megfelel
                }
            }
        }
    ?>

    <a href="?color=yellow">Sárga</a> <!-- GET paraméteres link -->
    <form action="/" method="get" style="background-color: <?= isset($_GET["color"]) ? $_GET["color"] : "" ?>">
        <input type="radio" id="blue" name="color" value="Blue">
        <label for="blue">Blue</label><br>
        <input type="radio" id="red" name="color" value="Red">
        <label for="red">Red</label><br>
        <input type="radio" id="green" name="color" value="Green">
        <label for="green">Green</label><br>
        <input type="submit" name="send" id="bekuldes" value="Beküldés">
    </form>

    <form action="/" method="post">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" value="<?= isset($_POST["username"]) ? $_POST["username"] : "" ?>" placeholder="Kis Anna">
        <span><?= isset($errorMessages["username"]) ? $errorMessages["username"] : "" ?></span><br>
        <label for="age">Age</label>
        <input type="number" id="age" name="age" value="<?= isset($_POST["age"]) ? $_POST["age"] : "" ?>" placeholder="18">
        <span><?= isset($errorMessages["age"]) ? $errorMessages["age"] : "" ?></span><br>
        <input type="submit" name="send" id="bekuldes" value="Beküldés">
        <input type="submit" name="clear" id="torles" value="Törlés">
    </form>
</body>
</html>