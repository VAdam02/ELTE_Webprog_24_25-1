<?php
session_start();
?>

<nav style="background-color: gray; color: white; width: 100%; display: flex; justify-content: space-between;">
    <div style="padding: 10px; display: flex; gap: 10px;">
        <a href="/">Home</a>
        <a href="/products/">Products</a>
    </div>
    <div style="padding: 10px; display: flex; gap: 10px;">
        <?php if (isset($_SESSION["user"])) : ?>
            <span><?= $_SESSION["user"]["username"] ?></span>
            <a href="/auth/logout.php">Logout</a>
        <?php else : ?>
            <a href="/auth/login.php">Login</a>
        <?php endif; ?>
    </div>
</nav>