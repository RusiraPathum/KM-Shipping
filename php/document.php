<?php
//session_start();
include '../config/database.php';
$db = new database();

if ($_POST['id'] == "insert") {

    $docName = $_POST['docName'];
    $docCategory = $_POST['docCategory'];
    $docDes = $_POST['docDes'];
    $docType = $_POST['docType'];

    $query = "INSERT INTO document (docName, docCategory, docDes, docType) 
    VALUES ('$docName','$docCategory','$docDes','$docType')";

    $db->IUD($query);

    echo 1;

}

if ($_POST['id'] == "show") {

    $output = null;

    $query = "SELECT * FROM document ORDER by id";

    $rs = $db->Search($query);

    while ($row = $rs->fetch(2)) {
        $id = $row['id'];
        $docName = $row['docName'];
        $docCategory = $row['docCategory'];
        $docDes = $row['docDes'];
        $docType = $row['docType'];

        $output .= "
            <div class='col-lg-3 col-md-6'>             
                  <button class='btn-icon-clipboard' data-clipboard-text='active-40'>
                    <div>
                      <i class='ni ni-archive-2'></i>
                      <span>$docName</span>
                      <span class='ml-5'><i  onclick='deleteDocument($id)' class='float-right text-danger fas fa-trash'></i></span>
                    </div>
                  </button>                
                </div>
        ";
    }

    echo $output;

}

if ($_POST['id'] == "delete") {

   $docId = $_POST['docId'];

    $query = "DELETE FROM document WHERE id = '$docId'";

    $db->IUD($query);

    echo 1;

}
