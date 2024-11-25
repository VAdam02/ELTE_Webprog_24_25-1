<?php
session_start();
?>

<nav style="display: flex; justify-content: space-between; background-color: gray">
    <div>
        <a href="/">Home</a>
        <a href="/">Dummy</a>
    </div>
    <div>
        <?php if (isset($_SESSION["username"])) : ?>
            <span><?= $_SESSION["username"] ?></span>
            <a href="/logout">Logout</a>
        <?php else : ?>
            <a href="/login">Login</a>
        <?php endif ?>
    </div>
</nav>