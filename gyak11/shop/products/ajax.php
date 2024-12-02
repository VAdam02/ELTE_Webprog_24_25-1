<?php
function readJSON($fileName) {
    $jsonText = file_get_contents($fileName);
    $json = json_decode($jsonText, true); //fontos, hogy true legyen, különben érdekes adatlekérdezési hibákat okoz
    return $json;
}

echo json_encode(readJSON($_SERVER['DOCUMENT_ROOT'] . '/products/products.json'));
?>