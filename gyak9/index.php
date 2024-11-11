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

    var_dump($file);
    ?>
</body>
</html>