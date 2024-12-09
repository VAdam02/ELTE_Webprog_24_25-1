<?php
function readJSON($fileName) {
    $jsonText = file_get_contents($fileName);
    $json = json_decode($jsonText, true); //fontos, hogy true legyen, különben érdekes adatlekérdezési hibákat okoz
    return $json;
}

$products = readJSON($_SERVER['DOCUMENT_ROOT'] . '/products/products.json');

function getAllProducts() {
    global $products;
    return $products;
}

function filterAvailable($products) {
    return array_values(array_filter($products, function($product) {
        return $product["stock"] > 0;
    }));
}

function filterBySearch($products, $searchText) {
    return array_values(array_filter($products, function($product) use ($searchText) {
        return (strpos($product["name"], $searchText) !== false) || (strpos($product["description"], $searchText) !== false);
    }));
}

function filterByMinPrice($products, $minPrice) {
    return array_values(array_filter($products, function($product) use ($minPrice) {
        return $product["price"] >= $minPrice;
    }));
}

function filterByMaxPrice($products, $maxPrice) {
    return array_values(array_filter($products, function($product) use ($maxPrice) {
        return $product["price"] <= $maxPrice;
    }));
}
?>