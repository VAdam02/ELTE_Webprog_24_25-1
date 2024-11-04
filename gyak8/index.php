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
    
</body>
</html>