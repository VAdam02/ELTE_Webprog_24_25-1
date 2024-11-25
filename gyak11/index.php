<?php
session_start();
var_dump($_SESSION);

//teljes mappaszerkezet hostolása a jelenlegi mappából:
//php -S localhost:3000
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?= $_SESSION["username"] ?><br>
    <a href="./setSession.php">Set session</a>
    <a href="./deleteSession.php">Delete session</a>
</body>
</html>