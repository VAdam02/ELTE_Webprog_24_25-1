<?php
require_once($_SERVER["DOCUMENT_ROOT"] . "/auth/protected.php");
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
    <h1>Products</h1>

    <form id="form">
        <label>Select Range:
            <input id="rangeSlider" type="range" min="0" max="300" step="1" value="50" style="width: 300px; appearance: none; height: 5px">
            <div>
                <span>From: <span id="fromValue"></span></span>
                <span>To: <span id="toValue"></span></span>
            </div>
        </label>
        <label>Show only available:
            <input type="checkbox" id="availableCheckbox">
        </label>
        <label>Search:
            <input type="text" id="searchInput">
        </label>
    </form>
    <script>
        function updateSlider() {
            const value = parseInt(rangeSlider.value, 10);
            const min = parseInt(rangeSlider.getAttribute("min"), 10);
            const max = parseInt(rangeSlider.getAttribute("max"), 10);
            let from = parseInt(rangeSlider.getAttribute("from"), 10) || min;
            let to = parseInt(rangeSlider.getAttribute("to"), 10) || max;

            //if value is closer to from, update from, else update to
            if (value < (from + to) / 2) { from = value; }
            else { to = value; }

            const rangeMultiplier = 100 / (max-min);
            const displayMin = (from - min) * rangeMultiplier;
            const displayMax = (to - min) * rangeMultiplier;

            fromValue.textContent = from;
            toValue.textContent = to;
            rangeSlider.style.background = `linear-gradient(to right, #ddd 0%, #ddd ${displayMin}%, #0f0 ${displayMin}%, #0f0 ${displayMax}%, #ddd ${displayMax}%, #ddd 100%)`;
            rangeSlider.setAttribute("from", from);
            rangeSlider.setAttribute("to", to);
        }
        updateSlider();
        rangeSlider.addEventListener("input", updateSlider);
    </script>

    <div id="productsDisplay"></div>

    <script>
        function refresh() {
            const from = rangeSlider.getAttribute("from");
            const to = rangeSlider.getAttribute("to");
            const available = availableCheckbox.checked;
            const search = searchInput.value;

            fetch(`/products/ajax.php?available=${available}&search=${search}&from=${from}&to=${to}`)
            .then(response => response.json())
            .then(products => {
                productsDisplay.innerHTML = "";
                products.forEach(product => {
                    const productDiv = document.createElement('div');
                    productDiv.innerHTML = `
                        <h2>${product.name}</h2>
                        <p>\$${product.price}</p>
                        <p>${product.description}</p>
                    `;
                    productsDisplay.appendChild(productDiv);
                });
            });
        }
        refresh();
        form.addEventListener("input", () => refresh());
    </script>
</body>
</html>
