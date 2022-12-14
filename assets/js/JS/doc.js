$(document).ready(function (){
    loadDocument();
});

function loadDocument(){
    var id = "show";

    $.ajax({
        url: '../../../php/document.php',
        type: 'POST',
        cache: false,
        data: {id:id},
        success:function (data){
            $('#document_content').html(data);
        },
        error: function (request, error){
            alert("Request: "+JSON.stringify(request));
        }
    });
}

$('#save_document').click(function( ){

    let data;

    var docName = $('#docName').val();
    var docCategory = $('#docCategory').val();
    var docDes = $('#docDes').val();
    var docType = $('#docType').val();
    var id = "insert";

    if (docName == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The Document Name!',
        });
    }else if (docCategory == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The Document Category!',
        });
    }else if (docDes == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The Document Description!',
        });
    }else if (docType == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops...',
            text: 'Please Fill The Document Type!',
        });
    }else{

        data = {
            id: id,
            docName: docName,
            docCategory: docCategory,
            docDes: docDes,
            docType: docType,
        }

        $.ajax({
            url: '../../../php/document.php',
            method: 'POST',
            data: data,
            success: function (data) {
                if (data == 1){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Document has been saved',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    $("#exampleModal").modal('hide');
                    loadDocument();
                }
            }, error: function (request, error) {
                console.log("Request: " + JSON.stringify(request));
            }
        })

    }

})

function deleteDocument(docId){

    var id = "delete";
    var data = {
        id: id,
        docId: docId
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
                url: '../../../php/document.php',
                method: 'POST',
                data: data,
                success: function (response) {
                    if (response == 1){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        loadDocument();
                    }

                },
                error: function (request, error) {
                    alert("Request: " + JSON.stringify(error));
                }
            });
        }
    })
}