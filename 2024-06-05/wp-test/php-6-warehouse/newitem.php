<?php
if ($_SERVER["REQUEST_METHOD"] != "POST") die();

$name = $_POST['name'];
$source = $_POST['source'];
$category = $_POST['category'];
$level = $_POST['level'];

$categories = readJSON('data.json');

for ($i = 0; $i < count($categories); $i++) {
    if ($categories[$i]["name"] == $category) {
        $categories[$i][$level][] = [
            'name' => $name,
            'source' => $source
        ];

        break;
    }
}

writeJSON('data.json', $categories);

header('Location: /');

function readJSON($fileName) {
    $jsonText = file_get_contents($fileName);
    $json = json_decode($jsonText, true); //fontos, hogy true legyen, különben érdekes adatlekérdezési hibákat okoz
    return $json;
}

function writeJSON($fileName, $json) {
    $jsonText = json_encode($json, JSON_PRETTY_PRINT);
    file_put_contents($fileName, $jsonText);
}
?>
