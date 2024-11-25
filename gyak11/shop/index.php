<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="margin: 0">
    <nav style="display: flex; justify-content: space-between; background-color: gray">
        <div>
            <a href="/">Home</a>
            <a href="/">Dummy</a>
        </div>
        <div>
            <?php if (isset($_SESSION["username"])) : ?>
                <a href="/login"><?= $_SESSION["username"] ?></a>
                <a href="/logout">Logout</a>
            <?php else : ?>
                <a href="/login">Login</a>
            <?php endif ?>
        </div>
    </nav>
</body>
</html>