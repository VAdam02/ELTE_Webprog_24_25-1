<?php
    session_start();

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $errorMessages = [];

        $json = readJSON("./users.json");
        $searchUsername = $_POST["username"];
        $searchPassword = $_POST["password"];
        $resultUser = null;
        foreach ($json as $user) {
            if (isset($user['username']) && $user['username'] == $searchUsername && $user["password"] == $searchPassword) {
                $resultUser = $user;
                break;
            }
        }
        if ($resultUser == null) $errorMessages["auth"] = "Incorrect username or password";

        if (count($errorMessages) == 0) {
            $_SESSION["user"] = [
                "username" => $searchUsername
            ];

            $redirectURI = isset($_SESSION['redirect_after_login']) ? $_SESSION['redirect_after_login'] : '/';
            unset($_SESSION['redirect_after_login']);
            header("Location: $redirectURI");
            die();
        }
    }

    function readJSON($fileName) {
        $jsonText = file_get_contents($fileName);
        $json = json_decode($jsonText, true);
        //return $json ?? [];
        return $json != null ? $json : [];
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="margin: 0">
    <?php include($_SERVER["DOCUMENT_ROOT"] . "/components/navbar.php"); /*megpróbálja betölteni*/ ?>
    <form method="POST">
        <label>
            <span>Username:</span>
            <input type="text" name="username" placeholder="username">
        </label><br>
        <label>
            <span>Password:</span>
            <input type="password" name="password" placeholder="password">
        </label><br>
        <?php if (isset($errorMessages["auth"])) { ?>
            <span><?= $errorMessages["auth"] ?></span><br>
        <?php } ?>
        <button type="submit">Bejelentkezés</button>
    </form>
</body>
</html>
