<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mission 6</title>
    <link rel="stylesheet" href="src/index.css">
    <link rel="stylesheet" href="src/task.css">
</head>

<body>
    <header>
        <h1>6. Raktár / Warehouse</h1>
    </header>

    <div id="content">
        <div id="grid">
            <div>
                <h2>Kategória / New Category</h2>
                <form action="newcat.php" method="post" novalidate>
                    <div class="input">
                        <label for="name">Név / Name</label>
                        <input type="text" name="name" id="name" placeholder="Kategória neve / Category name">
                    </div>
                    <div class="input">
                        <label for="protocol">Besorolása / Type</label>
                        <select name="protocol" id="protocol">
                            <option value=""></option>
                            <option value="HazardousMaterials">Hazardous Materials</option>
                            <option value="Biosafety">Biosafety Levels (BSL)</option>
                            <option value="Fire_Explosive">Fire and Explosive Hazard Ratings (NFPA 704)</option>
                            <option value="Radiation">Radiation Hazard Levels</option>
                            <option value="Security">Security Threat Levels</option>
                        </select>
                    </div>
                    <div class="input">
                        <button type="submit">Save / Mentés</button>
                    </div>
                </form>
            </div>
            <div>
                <h2>Új tárgy / New item</h2>
                <form action="newitem.php" method="post" novalidate>
                    <div class="input">
                        <label for="name">Név / Name</label>
                        <input type="text" name="name" id="name" placeholder="Tárgy neve / Item name">
                    </div>
                    <div class="input">
                        <label for="source">Származási hely / Place of origin</label>
                        <input type="text" name="source" id="source" placeholder="Származási hely / Place of origin">
                    </div>
                    <div class="input">
                        <label for="category">Kategória / Category</label>
                        <select name="category" id="category">
                            <option value=""></option>
                            <?php
                            function readJSON($fileName) {
                                $jsonText = file_get_contents($fileName);
                                $json = json_decode($jsonText, true);
                                //return $json ?? [];
                                return $json != null ? $json : [];
                            }

                            $categories = readJSON("data.json");
                            foreach ($categories as $category) : ?>
                                <option value="<?= $category["name"] ?>"><?= $category["name"] ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <div class="input">
                        <label for="level">Szint / Level</label>
                        <select name="level" id="level">
                            <option value=""></option>
                            <option value="level4">Extreme</option>
                            <option value="level3">High</option>
                            <option value="level2">Moderate</option>
                            <option value="level1">Minimal</option>
                        </select>
                    </div>
                    <div class="input">
                        <button type="submit">Save / Mentés</button>
                    </div>
                </form>
            </div>
        </div>

        <h2>Raktár tartalma / Warehouse content</h2>
        <div>
            <p>item1</p>
            <form action="index.php?id=20" method="POST"><button>Törlés</button></form>
        </div>
        <div>
            <p>item3</p>
            <form action="index.php" method="get">
                <input type="hidden" name="id" value="25">
                <button>Törlés</button>
            </form>
        </div>
        <div>
            <p>item3</p>
            <form action="index.php" method="post">
                <input type="hidden" name="id" value="19">
                <button>Törlés</button>
            </form>
        </div>
    </div>
</body>

</html>