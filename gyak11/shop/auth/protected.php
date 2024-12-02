<?php
session_start();
if (!isset($_SESSION["user"])) {
    header('Location: /auth/login.php');
    die(); //fontos ne hagyd le, mert akkor két aktív oldalról kapja az outputot
}
?>