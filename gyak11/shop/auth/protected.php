<?php
session_start();
if (!isset($_SESSION["user"])) {
    $_SESSION["redirect_after_login"] = $_SERVER["REQUEST_URI"];
    header('Location: /auth/login.php');
    die(); //fontos ne hagyd le, mert akkor két aktív oldalról kapja az outputot
}
?>