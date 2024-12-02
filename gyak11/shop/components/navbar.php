<?php
session_start();
?>

<nav style="display: flex; justify-content: space-between; background-color: gray">
    <div>
        <a href="/">Home</a>
        <a href="/products/">Products</a>
    </div>
    <div>
        <?php if (isset($_SESSION["user"]["username"])) : ?>
            <span><?= $_SESSION["user"]["username"] ?></span>
            <a href="/auth/logout.php">Logout</a>
        <?php else : ?>
            <a href="/auth/login.php">Login</a>
        <?php endif ?>
    </div>
</nav>