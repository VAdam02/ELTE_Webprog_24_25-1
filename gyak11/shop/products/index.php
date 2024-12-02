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
    <p>Products</p>

    <div id="productsDisplay"></div>

    <script>
        async function getListAwait() {
            const result = await fetch("/products/ajax.php");
            const json = await result.json();
            return json;
        }
        //console.log(getListAwait());
        getListAwait()/*.catch(error) {
            console.log("Error1", error)
        }*/.then(value => {
                value.forEach(element => {
                const parent = document.createElement("div")

                const name =document.createElement("h2");
                name.innerHTML = element.name;
                const price = document.createElement("p");
                //price.innerHTML = element.price;
                price.innerHTML = `\$${element.price}`;
                const description =document.createElement("p");
                description.innerHTML =element.description;

                parent.appendChild(name);
                parent.appendChild(price);
                parent.appendChild(description);

                productsDisplay.appendChild(parent);
            })
        }).catch(error => {
            console.log("Error2", error)
        })

        function getListPromise() {
            fetch("/products/ajax.php").then((value) => {
                return value.json();
            }).then(json => {
                console.log(json);
            });
        }
        //getListPromise();
    </script>
</body>
</html>