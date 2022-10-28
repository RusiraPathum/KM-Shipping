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

    var ageTitle = $('#ageTitle').val();
    var ageHostName = $('#ageHostName').val();
    var ageDateTime = $('#ageDateTime').val();
    var ageLoc = $('#ageLoc').val();
    var ageShortDes = $('#ageShortDes').val();
    var ageLongDes = $('#ageLongDes').val();
    var id = "insert";

    if (ageTitle == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The Agenda Title!',
        });
    }else if (ageHostName == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The Agenda Host Name!',
        });
    }else if (ageDateTime == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Select The Agenda Date and Time!',
        });
    }else if (ageLoc == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The Agenda Location!',
        });
    }else if (ageShortDes == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The Agenda Short Description!',
        });
    }else if (ageLongDes == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The Agenda Long Description!',
        });
    }else{

        data = {
            id: id,
            ageTitle: ageTitle,
            ageHostName: ageHostName,
            ageDateTime: ageDateTime,
            ageLoc: ageLoc,
            ageShortDes: ageShortDes,
            ageLongDes: ageLongDes,
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