<?php

include '../config/database.php';
$db = new database();

if ($_POST['id'] == "employeeInsert") {

    $firstNameEmployee = $_POST['firstNameEmployee'];
    $lastNameEmployee = $_POST['lastNameEmployee'];
    $emailEmployee = $_POST['emailEmployee'];
    $userNameEmployee = $_POST['userNameEmployee'];

    $query = "INSERT INTO user_list (firstName, lastName, email, userName) 
    VALUES ('$firstNameEmployee','$lastNameEmployee','$emailEmployee','$userNameEmployee')";

    $db->IUD($query);

    echo 1;

}

if ($_POST['id'] == "show") {

    $output = "";

    $query = "SELECT * FROM user where id=4";

    $rs = $db->Search($query);

    $id = "";
    $firstName = "";
    $lastName = "";
    $email = "";
    $userName = "";
    $password = "";

    while ($row = $rs->fetch(2)) {
        $id = $row['id'];
        $firstName = $row['firstName'];
        $lastName = $row['lastName'];
        $email = $row['email'];
        $userName = $row['userName'];
        $password = $row['password'];

    }

    $output .= "
           <div class='pl-lg-4'>
                  <div class='row'>
                    <div class='col-lg-6'>
                      <div class='form-group'>
                        <label class='form-control-label' for='userName'>Username</label>
                        <input type='text' id='userName' class='form-control' placeholder='Username' value='$userName'>
                      </div>
                    </div>
                    <div class='col-lg-6'>
                      <div class='form-group'>
                        <label class='form-control-label' for='email'>Email address</label>
                        <input type='email' id='email' class='form-control' value='$email' placeholder='Email'>
                      </div>
                    </div>
                  </div>
                  <div class='row'>
                    <div class='col-lg-6'>
                      <div class='form-group'>
                        <label class='form-control-label' for='firstName'>First name</label>
                        <input type='text' id='firstName' class='form-control' placeholder='First name' value='$firstName'>
                      </div>
                    </div>
                    <div class='col-lg-6'>
                      <div class='form-group'>
                        <label class='form-control-label' for='lastName'>Last name</label>
                        <input type='text' id='lastName' class='form-control' placeholder='Last name' value='$lastName'>
                      </div>
                    </div>
                  </div>
                </div>      
        ";

    echo $output;

}

if ($_POST['id'] == "userList") {
    $output = "";

    $query = "SELECT * FROM user_list ORDER by id";

    $rs = $db->Search($query);

    while ($row = $rs->fetch(2)) {
        $id = $row['id'];
        $firstName = $row['firstName'];
        $lastName = $row['lastName'];
        $email = $row['email'];
        $userName = $row['userName'];

        $output .= "
                  <tr>
                    <th scope='row'>$id</th>
                    <th scope='row'>$firstName</th>
                    <td class='budget'>$lastName</td>
                    <td>$email</td>
                    <td>$userName</td>
                    <td class=''><span class='ml-5'><i  onclick='deleteUser($id)' style='cursor: pointer' class=' text-danger fas fa-trash'></i></span></td>
                  </tr>
        ";
    }

    echo $output;
}

if ($_POST['id'] == "update") {

    $id = 4;
    $userName = $_POST['userName'];
    $email = $_POST['email'];
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];

    $query = "update user set userName = '$userName', firstName= '$firstName', lastName= '$lastName', email= '$email' where id = '$id'";

    $db->IUD($query);

    echo 1;

}

if ($_POST['id'] == "delete") {

    $userId = $_POST['userId'];

    $query = "DELETE FROM user_list WHERE id = '$userId'";

    $db->IUD($query);

    echo 1;

}