let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let i = 0;
let currentSentence = sentences[i];
let letterPosition = 0;
let currentLetter = currentSentence.substring(letterPosition, letterPosition + 1);

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

   if (e.which === sentences[i].charCodeAt(letterPosition)) {

        letterPosition++;
        currentLetter = currentSentence.substring(letterPosition, letterPosition + 1);
        $('#target-letter').text(currentLetter);
    
        if (letterPosition === currentSentence.length) {
    
            i++;
    
        } else {
            
            currentSentence = sentences[i];
            $('#sentence').text(currentSentence);
            letterPosition = 0;
            currentLetter = currentSentence.substring(letterPosition, letterPosition + 1);
            $('#target-letter').text(currentLetter);
            console.log(letterPosition);
    
        }
    }
});