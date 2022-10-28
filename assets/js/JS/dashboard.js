$(document).ready(function (){
    totalDocument();
    totalUsers();
    totalAgenda();
    totalReport();
});

function totalDocument(){
    var id = "showDocument";

    $.ajax({
        url: '../../../php/dashboard.php',
        type: 'POST',
        cache: false,
        data: {id:id},
        success:function (data){
            $("#docCount").text(data);
        },
        error: function (request, error){
            alert("Request: "+JSON.stringify(request));
        }
    });
}

function totalUsers(){
    var id = "showUsers";

    $.ajax({
        url: '../../../php/dashboard.php',
        type: 'POST',
        cache: false,
        data: {id:id},
        success:function (data){
            $("#useCount").text(data);
        },
        error: function (request, error){
            alert("Request: "+JSON.stringify(request));
        }
    });
}

function totalAgenda(){
    var id = "showAgenda";

    $.ajax({
        url: '../../../php/dashboard.php',
        type: 'POST',
        cache: false,
        data: {id:id},
        success:function (data){
            $("#ageCount").text(data);
        },
        error: function (request, error){
            alert("Request: "+JSON.stringify(request));
        }
    });
}

function totalReport(){
    var id = "showReport";

    $.ajax({
        url: '../../../php/dashboard.php',
        type: 'POST',
        cache: false,
        data: {id:id},
        success:function (data){
            $("#repCount").text(data);
        },
        error: function (request, error){
            alert("Request: "+JSON.stringify(request));
        }
    });
}