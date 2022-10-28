$(document).ready(function (){
    loadAgenda();
});

function loadAgenda(){
    var id = "show";

    $.ajax({
        url: '../../../php/agenda.php',
        type: 'POST',
        cache: false,
        data: {id:id},
        success:function (data){
            $('#agenda_content').html(data);
        },
        error: function (request, error){
            alert("Request: "+JSON.stringify(request));
        }
    });
}

$('#save_agenda').click(function( ){

    let data;

    var ageName = $('#ageName').val();
    var ageCategory = $('#ageCategory').val();
    var ageDes = $('#ageDes').val();
    var ageType = $('#ageType').val();
    var id = "insert";

    if (ageName == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The Agenda Name!',
        });
    }else if (ageCategory == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The Agenda Category!',
        });
    }else if (ageDes == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The Agenda Description!',
        });
    }else if (ageType == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The Agenda Type!',
        });
    }else{

        data = {
            id: id,
            ageName: ageName,
            ageCategory: ageCategory,
            ageDes: ageDes,
            ageType: ageType,
        }

        $.ajax({
            url: '../../../php/agenda.php',
            method: 'POST',
            data: data,
            success: function (data) {
                if (data == 1){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Agenda has been saved',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    $("#exampleModal").modal('hide');
                    loadAgenda();
                }
            }, error: function (request, error) {
                console.log("Request: " + JSON.stringify(request));
            }
        })

    }

})

function deleteAgenda(ageId){

    var id = "delete";
    var data = {
        id: id,
        ageId: ageId
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
                url: '../../../php/agenda.php',
                method: 'POST',
                data: data,
                success: function (response) {
                    if (response == 1){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        loadAgenda();
                    }

                },
                error: function (request, error) {
                    alert("Request: " + JSON.stringify(error));
                }
            });
        }
    })
}