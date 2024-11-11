<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $file = fopen("excel.csv", "r");
    ?>
    
    <table>
        <?php while (($line = fgetcsv($file, null, ";")) !== false) { ?>

        <tr>
            <?php foreach ($line as $cell) {?>
                <td><?= $cell ?></td>
            <?php } ?>
        </tr>

        <?php } ?>
    </table>

    <?php

    function readJSON($fileName) {
        $jsonText = file_get_contents($fileName);
        $json = json_decode($jsonText, true); //fontos, hogy true legyen, különben érdekes adatlekérdezési hibákat okoz
        return $json;
    }

    var_dump(readJSON("data.json"));

    function writeJSON($fileName, $json) {
        //$jsonText = json_encode($json);
        $jsonText = json_encode($json, JSON_PRETTY_PRINT);
        file_put_contents($fileName, $jsonText);
    }

    writeJSON("data2.json", readJSON("data.json"));

    ?>
</body>
</html>