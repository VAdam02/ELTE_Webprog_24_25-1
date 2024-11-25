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
            <a href="/auth/logout.php">Logout</a>
        <?php else : ?>
            <a href="/auth/login.php">Login</a>
        <?php endif ?>
    </div>
</nav>