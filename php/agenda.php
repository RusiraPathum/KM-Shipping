<?php

//session_start();
include '../config/database.php';
$db = new database();

if ($_POST['id'] == "insert") {

    $id = $_POST['id'];
    $ageTitle = $_POST['ageTitle'];
    $ageHostName = $_POST['ageHostName'];
    $ageDateTime = $_POST['ageDateTime'];
    $ageLoc = $_POST['ageLoc'];
    $ageShortDes = $_POST['ageShortDes'];
    $ageLongDes = $_POST['ageLongDes'];

    $query = "INSERT INTO agenda (ageTitle, ageHostName, ageDateTime, ageLoc, ageShortDes, ageLongDes) 
    VALUES ('$ageTitle','$ageHostName','$ageDateTime','$ageLoc', '$ageShortDes', '$ageLongDes')";

    $db->IUD($query);

    echo 1;

}

if ($_POST['id'] == "show") {

    $output = "";

    $query = "SELECT * FROM agenda ORDER by id";

    $rs = $db->Search($query);

    while ($row = $rs->fetch(2)) {
        $id = $row['id'];
        $ageTitle = $row['ageTitle'];
        $ageHostName = $row['ageHostName'];
        $ageDateTime = $row['ageDateTime'];
        $ageLoc = $row['ageLoc'];
        $ageShortDes = $row['ageShortDes'];
        $ageLongDes = $row['ageLongDes'];

        $output .= "
                  <tr>
                    <th scope='row'>$id</th>
                    <th scope='row'>$ageTitle</th>
                    <td class='budget'>$ageHostName</td>
                    <td>$ageDateTime</td>
                    <td>$ageLoc</td>
                    <td class=''><span class='ml-5'><i  onclick='deleteAgenda($id)' class=' text-danger fas fa-trash'></i></span></td>
                  </tr>
        ";
    }

    echo $output;

}

if ($_POST['id'] == "delete") {

    $ageId = $_POST['ageId'];

    $query = "DELETE FROM agenda WHERE id = '$ageId'";

    $db->IUD($query);

    echo 1;

}
