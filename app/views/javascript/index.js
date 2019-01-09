$(document).on('click', '.devour', function(event) {
    event.preventDefault();
    burgerId = $(this).attr('id');
    $.ajax({
        method: 'PUT',
        url: '/api/burgers/',
        data: {
            burgerId: burgerId
        }
    }).then(() => {
        $('#eaten ul').append($('<li>').append($('#burger' + burgerId).attr('class', 'teal-text')));
        $(this).remove();
    }).catch(err => {
        console.log(err);
    })
});

$(document).on('click', '#add', event => {
    event.preventDefault();
    $.ajax({
        method: 'POST',
        url: '/api/burgers/',
        data: {
            burger: $('#newBurger').val()
        }
    }).then(() => {
        location.reload();
    }).catch(err => {
        console.log(err);
    })
});