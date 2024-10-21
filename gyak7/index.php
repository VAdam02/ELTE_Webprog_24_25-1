<?php
//php -S localhost:3000 index.php
//leállítás: ctrl + c

//<?php egy.soros.utasítás ? > //nem kell pontosvessző
/*<?php
több;
soros;
utasítás;
? > //kell pontosvessző
*/

//<?= "text" ? > //nem kell pontosvessző, mintha egy echo utasítás lenne

$variable = "alma";
$username = "VAdam";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello word</h1>
    <p><?php echo($username) ?></p>
    <p><?php echo $username ?></p>

    <p>
        <?php for ($i = 0; $i < 10; $i++) {
            //echo $variable . "\n"; //nem működik
            echo $variable . "<br>";
        }
        ?>
    </p>

    <p>
        <?php for ($i = 0; $i < 10; $i++) { ?>
            <?php echo $variable ?><br>
        <?php } ?>
    </p>

    <p>
        <?php for ($i = 0; $i < 10; $i++): ?>
            <?php echo $variable ?><br>
        <?php endfor; ?>
    </p>

    <?php
    $user = [
        "name" => "Péter",
        "age" => 43,
        "isMan" => true
    ];

    $users = [
        $user,
        [
            "name" => "Anna",
            "age" => 34,
            "isMan" => false
        ],
        [
            "name" => "Ákos",
            "age" => 15,
            "isMan" => true
        ]
    ];

    function printUser($user) {
        //echo $user; //array to string conversion error
        echo $user["name"] . ";" . $user["age"] .";". $user["isMan"] . "<br>";
        echo json_encode($user);
        json_decode(json_encode($user), true);
    }
    printUser($user);

    function printAllUser($users) {?>
        <table>
            <?php foreach ($users as $user): ?>
            <tr>
                <td><?= $user["name"]; ?></td>
                <td><?= $user["age"]; ?></td>
                <td><?= $user["isMan"] ? "férfi" : "nő"; ?></td>
            </tr>
        <?php endforeach;?>
        </table>
    <?php }
    printAllUser($users);


    $questions = [
        [
            "question" => "question1",
            "answers" => [
                "answer1",
                "answer2",
                "answer3"
            ]
        ],
        [
            "question" => "question2",
            "answers" => [
                "answer2.1",
                "answer2.2",
                "answer2.3"
            ]
        ],
        [
            "question" => "question3",
            "answers" => [
                "answer3.1",
                "answer3.2",
                "answer3.3"
            ]
        ]
    ];


    function printQuestions($questions) {
        $value = rand(0, 256*256);
        foreach ($questions as $question) {
            echo "<h2 style=\"background-color: #" . str_pad(dechex($value), 6, "0", STR_PAD_LEFT) . "\">" . $question["question"] . "</h2>";
            echo "<select name=\"" . $question["question"] . "\">";
                foreach ($question["answers"] as $key => $value) {
                    echo "<option>" . $key .";". $value . "</option>";
                }
            echo "</select>";
        }
    }

    printQuestions($questions);

    ?>
</body>
</html>
