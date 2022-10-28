$('#save_document').click(function( ){
    $("#add").html('');
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your Document has been saved',
        showConfirmButton: false,
        timer: 2000
    })

    $("#exampleModal").modal('hide');

    $("#add").append('<button type="button" class="btn-icon-clipboard" data-clipboard-text="basket" title="Copy to clipboard">\n' +
        '                    <div>\n' +
        '                      <i class="ni ni-archive-2"></i>\n' +
        '                      <span>Document -14</span>\n' +
        '                    </div>\n' +
        '                  </button>');

})

$('#save_report').click(function( ){
    $("#add").html('');
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your Report has been saved',
        showConfirmButton: false,
        timer: 2000
    })

    $("#exampleModal").modal('hide');

    $("#add").append('<button type="button" class="btn-icon-clipboard" data-clipboard-text="basket" title="Copy to clipboard">\n' +
        '                    <div>\n' +
        '                      <i class="ni ni-folder-17"></i>\n' +
        '                      <span>basket</span>\n' +
        '                    </div>\n' +
        '                  </button>');

})

$('#save_agent').click(function( ){
    $("#agent").html('');
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Agent has been saved',
        showConfirmButton: false,
        timer: 2000
    })

    $("#exampleModal").modal('hide');

    $("#agent").append('<th scope="row">\n' +
        '                      <div class="media align-items-center">\n' +
        '                        <a href="#" class="avatar rounded-circle mr-3">\n' +
        '                          <img alt="Image placeholder" src="../assets/img/theme/team-1.jpg">\n' +
        '                        </a>\n' +
        '                        <div class="media-body">\n' +
        '                          <span class="name mb-0 text-sm"> T R M Arachchi </span>\n' +
        '                        </div>\n' +
        '                      </div>\n' +
        '                    </th>\n' +
        '                    <td class="budget">\n' +
        '                      rashmikat@dfcc.com\n' +
        '                    </td>\n' +
        '                    <td>\n' +
        '                      <span class="badge badge-dot mr-4">\n' +
        '                        <i class="bg-success"></i>\n' +
        '                        <span class="status">Bank Assistant</span>\n' +
        '                      </span>\n' +
        '                    </td>\n' +
        '                    <td>\n' +
        '                      <div class="d-flex align-items-center">\n' +
        '                        <span class="completion mr-2">100%</span>\n' +
        '                        <div>\n' +
        '                          <div class="progress">\n' +
        '                            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>\n' +
        '                          </div>\n' +
        '                        </div>\n' +
        '                      </div>\n' +
        '                    </td>\n' +
        '                    <td class="text-right">\n' +
        '                      <div class="dropdown">\n' +
        '                        <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
        '                          <i class="fas fa-ellipsis-v"></i>\n' +
        '                        </a>\n' +
        '                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">\n' +
        '                          <a class="dropdown-item" href="#">Action</a>\n' +
        '                          <a class="dropdown-item" href="#">Another action</a>\n' +
        '                          <a class="dropdown-item" href="#">Something else here</a>\n' +
        '                        </div>\n' +
        '                      </div>\n' +
        '                    </td>');

})