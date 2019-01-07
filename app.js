$('#keyboard-upper-container').hide();

$(document).keydown(function (e) {
    if (e.which === 16) {

        $('#keyboard-lower-container').hide();
        $('#keyboard-upper-container').show();

    }
});

$(document).keyup(function (e) {
    if (e.which === 16) {

        $('#keyboard-lower-container').show();
        $('#keyboard-upper-container').hide();

    }
});

$(document).keypress(function (e) {

    let key = $('#' + e.which);
    $(key).css('background', 'yellow');

    $(document).keyup(function (e) {
        $(key).css('background', 'whitesmoke');
    });
});