<?php
//session_start();
include '../config/database.php';
$db = new database();

if ($_POST['id'] == "insert") {

    $repName = $_POST['repName'];
    $repNum = $_POST['repNum'];
    $repDate = $_POST['repDate'];
    $repType = $_POST['repType'];
    $repDes = $_POST['repDes'];

    $query = "INSERT INTO report (repName, repNum, repDes, repType, repDate) 
    VALUES ('$repName','$repNum','$repDes','$repType', '$repDate')";

    $db->IUD($query);

    echo 1;

}

if ($_POST['id'] == "show") {

    $output = null;

    $query = "SELECT * FROM report ORDER by id";

    $rs = $db->Search($query);

    while ($row = $rs->fetch(2)) {
        $id = $row['id'];
        $repName = $row['repName'];
        $repNum = $row['repNum'];
        $repDate = $row['repDate'];
        $repType = $row['repType'];
        $repDes = $row['repDes'];

        $output .= "
            <div class='col-lg-3 col-md-6'>             
                  <button class='btn-icon-clipboard' data-clipboard-text='active-40'>
                    <div>
                      <i class='ni ni-archive-2'></i>
                      <div class='row ml-2'>
                      <span>$repName</span></br>
                      <span>$repDate</span>
                       </div>                     
                      <span class='ml-4'><i  onclick='deleteReport($id)' class='float-right text-danger fas fa-trash'></i></span>
                    </div>
                  </button>                
                </div>
        ";
    }

    echo $output;

}

if ($_POST['id'] == "delete") {

   $repId = $_POST['repId'];

    $query = "DELETE FROM report WHERE id = '$repId'";

    $db->IUD($query);

    echo 1;

}
