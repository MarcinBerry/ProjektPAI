function generujKontakt() {
    $('main').fadeOut(500, function() {
        $('main').html("<h2>Kontakt</h2><div id='contact-box'></div>").attr("id", "contact");
        generujInfo('#contact-box');
        generujFormularz('#contact-box');
    }).fadeIn(500);
}

function generujInfo(divId) {
    var content = 
    "<div id='info'>"
    +"<h4 class='info-subtitle'>Telefon</h4>"
    +"<p>123-123-123</p>"
    +"<h4 class='info-subtitle'>Email</h4>"
    +"<p>przykladowy@mail.com</p>"
    +"</div>"
    $(divId).append(content)
}

function generujFormularz(divId) {
    var content = 
    "<form onsubmit='testowaFunkcja()' method='POST'>"
    +"<div class='fields-box'>"
    +"<div class='field'>"
    +"<label>Imię</label>"
    +"<input type='text' name='name' />"
    +"</div>"
    +"<div class='field'>"
    +"<label>Nazwisko</label>"
    +"<input type='text' name='surname' />"
    +"</div>"
    +"<div class='field'>"
    +"<label>E-mail</label>"
    +"<input type='text' name='email' />"
    +"</div>"
    +"<div class='field'>"
    +"<label>Temat</label>"
    +"<input type='text' name='subject' />"
    +"</div>"
    +"<div class='field'>"
    +"<label>Zainteresowania</label>"
    +"<label><input type='checkbox' name='hobby' value='music' />Muzyka</label>"
    +"<label><input type='checkbox' name='hobby' value='gry' />Gry</label>"
    +"<label><input type='checkbox' name='hobby' value='movies' />Filmy</label>"
    +"</div>"
    +"<div class='field'>"
    +"<label>Płeć</label>"
    +"<label><input type='radio' name='sex' value='m' />Mężczyzna</label>"
    +"<label><input type='radio' name='sex' value='k' />Kobieta</label>"
    +"</div>"
    +"<div class='field' id='message'>"
    +"<label>Wiadomość</label>"
    +"<textarea rows='8' cols='45' name='wiadomosc' id='wiadomosc'></textarea>"
    +"</div>"
    +"</div>"
    +"<input type='submit' id='submit-button'></input>"
    +"</form>"
    $(divId).append(content)
}