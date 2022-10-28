<?php
include '../config/database.php';
$db = new database();

if ($_POST['id'] == "showDocument") {

    $sql = "SELECT * from document";

    $result = $db->Search($sql);

    $result->rowCount();

    // Display result
    echo $result->rowCount();

}

if ($_POST['id'] == "showUsers") {

    $sql = "SELECT * from user_list";

    $result = $db->Search($sql);

    $result->rowCount();

    // Display result
    echo $result->rowCount();

}

if ($_POST['id'] == "showAgenda") {

    $sql = "SELECT * from agenda";

    $result = $db->Search($sql);

    $result->rowCount();

    // Display result
    echo $result->rowCount();

}if ($_POST['id'] == "showReport") {

    $sql = "SELECT * from report";

    $result = $db->Search($sql);

    $result->rowCount();

    // Display result
    echo $result->rowCount();

}
