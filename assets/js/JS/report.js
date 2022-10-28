$(document).ready(function (){
    loadReport();
});

function loadReport(){
    var id = "show";

    $.ajax({
        url: '../../../php/report.php',
        type: 'POST',
        cache: false,
        data: {id:id},
        success:function (data){
            $('#report_content').html(data);
        },
        error: function (request, error){
            alert("Request: "+JSON.stringify(request));
        }
    });
}

$('#save_report').click(function( ){

    let data;

    var repName = $('#repName').val();
    var repNum = $('#repNum').val();
    var repDate = $('#repDate').val();
    var repType = $('#repType').val();
    var repDes = $('#repDes').val();
    var id = "insert";

    if (repName == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The Report Name!',
        });
    }else if (repNum == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The Report Number!',
        });
    }else if (repDate == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Select The Report Publish Date!',
        });
    }else if (repType == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The Report Type!',
        });
    }else if (repDes == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The Report Description!',
        });
    }else{

        data = {
            id: id,
            repName: repName,
            repNum: repNum,
            repDate: repDate,
            repType: repType,
            repDes: repDes,
        }

        $.ajax({
            url: '../../../php/report.php',
            method: 'POST',
            data: data,
            success: function (data) {
                if (data == 1){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Report has been saved',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    $("#exampleModal").modal('hide');
                    loadReport();
                }
            }, error: function (request, error) {
                console.log("Request: " + JSON.stringify(request));
            }
        })

    }

})

function deleteReport(repId){

    var id = "delete";
    var data = {
        id: id,
        repId: repId
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
                url: '../../../php/report.php',
                method: 'POST',
                data: data,
                success: function (response) {
                    if (response == 1){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        loadReport();
                    }

                },
                error: function (request, error) {
                    alert("Request: " + JSON.stringify(error));
                }
            });
        }
    })
}
