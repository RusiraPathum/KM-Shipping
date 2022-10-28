$(document).ready(function (){
    loadProfile();
    loadUsersList();
});

function loadProfile(){
    var id = "show";

    $.ajax({
        url: '../../../php/profile.php',
        type: 'POST',
        cache: false,
        data: {id:id},
        success:function (data){
            $('#profile_content').html(data);
        },
        error: function (request, error){
            alert("Request: "+JSON.stringify(request));
        }
    });
}

function loadUsersList(){
    var id = "userList";

    $.ajax({
        url: '../../../php/profile.php',
        type: 'POST',
        cache: false,
        data: {id:id},
        success:function (data){
            $('#user_list_content').html(data);
        },
        error: function (request, error){
            alert("Request: "+JSON.stringify(request));
        }
    });
}

$('#profile_update').click(function( ){

    let data;

    var userName = $('#userName').val();
    var email = $('#email').val();
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var id = "update";

    if (userName == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The User Name!',
        });
    }else if (email == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The Email!',
        });
    }else if (firstName == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The First Name!',
        });
    }else if (lastName == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The Last Name!',
        });
    }else{

        data = {
            id: id,
            userName: userName,
            email: email,
            firstName: firstName,
            lastName: lastName,
        }

        $.ajax({
            url: '../../../php/profile.php',
            method: 'POST',
            data: data,
            success: function (data) {
                if (data == 1){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Details has been updated',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    $("#exampleModal").modal('hide');
                    loadProfile();
                }
            }, error: function (request, error) {
                console.log("Request: " + JSON.stringify(request));
            }
        })

    }

})

function deleteUser(userId){

    var id = "delete";
    var data = {
        id: id,
        userId: userId
    };

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: '../../../php/profile.php',
                method: 'POST',
                data: data,
                success: function (response) {
                    if (response == 1){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        loadUsersList();
                    }

                },
                error: function (request, error) {
                    alert("Request: " + JSON.stringify(error));
                }
            });
        }
    })
}

$('#save_employee').click(function( ){

    let data;

    var firstNameEmployee = $('#firstNameEmployee').val();
    var lastNameEmployee = $('#lastNameEmployee').val();
    var emailEmployee = $('#emailEmployee').val();
    var userNameEmployee = $('#userNameEmployee').val();
    var id = "employeeInsert";

    if (firstNameEmployee == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The First Name!',
        });
    }else if (lastNameEmployee == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The Last Name!',
        });
    }else if (emailEmployee == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The Email!',
        });
    }else if (userNameEmployee == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The User Name!',
        });
    }else{

        data = {
            id: id,
            firstNameEmployee: firstNameEmployee,
            lastNameEmployee: lastNameEmployee,
            emailEmployee: emailEmployee,
            userNameEmployee: userNameEmployee,
        }

        $.ajax({
            url: '../../../php/profile.php',
            method: 'POST',
            data: data,
            success: function (data) {
                if (data == 1){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Employee has been saved',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    $("#exampleModal").modal('hide');
                    loadUsersList();
                }
            }, error: function (request, error) {
                console.log("Request: " + JSON.stringify(request));
            }
        })

    }

})