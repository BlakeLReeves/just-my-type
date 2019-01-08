let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let i = 0;
let currentSentence = sentences[i];
let letterPosition = 0;
let currentLetter = currentSentence.substring(letterPosition, letterPosition + 1);
let numberOfMistakes = 0;

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

$('#sentence').text(currentSentence);
$('#target-letter').text(currentLetter);

$(document).keypress(function (e) {

    let start = new Date();

    if (e.which === sentences[i].charCodeAt(letterPosition)) {

        $('#yellow-block').css('left', '+=17.5px');
        $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>')

        letterPosition++;
        currentLetter = currentSentence.substring(letterPosition, letterPosition + 1);
        $('#target-letter').text(currentLetter);

        if (letterPosition === currentSentence.length) {

            i++

            if (i === sentences.length) {
                let elasped = (new Date() - start) / 60000;
                let minutes = elasped;
                let wpm = Math.round(54 / minutes - 2 * numberOfMistakes);
                alert('You typed ' + wpm + ' words per minute!');
            }

            currentSentence = sentences[i];
            $('#sentence').text(currentSentence);
            letterPosition = 0;
            currentLetter = currentSentence.substring(letterPosition, letterPosition + 1);
            $('#target-letter').text(currentLetter);
            $('#yellow-block').css('left', '15.5px');
            $('#feedback').empty();

        }
    } else {
        $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
        numberOfMistakes++;
    }
});