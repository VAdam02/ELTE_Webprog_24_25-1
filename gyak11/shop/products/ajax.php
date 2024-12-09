<?php
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    require_once($_SERVER['DOCUMENT_ROOT'] . '/products/productUtil.php');
    $products = getAllProducts();

    if (isset($_GET['available']) && $_GET['available'] == 'true') { $products = filterAvailable($products); }
    if (isset($_GET['search'])) { $products = filterBySearch($products, $_GET['search']); }
    if (isset($_GET['from'])) { $products = filterByMinPrice($products, $_GET['from']); }
    if (isset($_GET['to'])) { $products = filterByMaxPrice($products, $_GET['to']); }
    
    echo json_encode($products);
}
?>