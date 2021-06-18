function generujKontakt() {
    $('main').fadeOut(500, function() {
        $('main').html("").attr("id", "contact");
        generujInfo();
        generujFormularz();
    }).fadeIn(500);
}

function generujInfo() {
    var content = 
    "<div id='info'>"
    +"<h2>Kontakt</h2>"
    +"<h4 class='info-subtitle'>Telefon</h4>"
    +"<p>123-123-123</p>"
    +"<h4 class='info-subtitle'>Email</h4>"
    +"<p>przykladowy@mail.com</p>"
    +"</div>"
    $('main').append(content)
}

function generujFormularz() {
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
    +"<label>Wiadomość</label>"
    +"<textarea rows='8' cols='45' name='wiadomosc' id='wiadomosc'></textarea>"
    +"</div></div>"
    +"<input type='submit' id='submit-button'></input>"
    +"</form>"
    $('main').append(content)
}