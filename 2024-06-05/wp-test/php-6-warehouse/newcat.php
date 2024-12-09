<?php

$name = $_POST["name"];
$protocol = $_POST["protocol"];

$json = readJSON("data.json");

$json[] = [
    "name" => $name,
    "protocol" => $protocol,
    "level1" => [],
    "level2" => [],
    "level3" => [],
    "level4" => []
];

writeJSON("data.json", $json);

header("Location: /");

function readJSON($fileName) {
    $jsonText = file_get_contents($fileName);
    $json = json_decode($jsonText, true);
    //return $json ?? [];
    return $json != null ? $json : [];
}

function writeJSON($fileName, $json) {
    //$jsonText = json_encode($json);
    $jsonText = json_encode($json, JSON_PRETTY_PRINT);
    file_put_contents($fileName, $jsonText);
}
?>