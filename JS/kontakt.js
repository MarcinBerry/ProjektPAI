function generujKontakt() {
    $('main').fadeOut(500, function() {
        $('main').html("").attr("id", "kontakt")/*.css("flex-flow", "row")*/;
        generujInfo();
        generujFormularz();
    }).fadeIn(500);
}

function generujInfo() {
    var content = 
    "<div id='info'>"
    +"<h2>Kontakt</h2>"
    +"<p>Przykładowy tekst</p>"
    +"<h4>Telefon</h4>"
    +"<p>123-123-123</p>"
    +"<h4>Email</h4>"
    +"<p>przykladowy@mail.com</p>"
    +"</div>"
    $('main').append(content)
}

function generujFormularz() {
    var content = 
    "<form id='formularz' onsubmit='testowaFunkcja()' method='POST'>"
    +"<div class='pole'>"
    +"<label>Imię</label>"
    +"<input type='text' name='name' />"
    +"</div>"
    +"<div class='pole'>"
    +"<label>Nazwisko</label>"
    +"<input type='text' name='surname' />"
    +"</div>"
    +"<div class='pole'>"
    +"<label>E-mail</label>"
    +"<input type='text' name='email' />"
    +"</div>"
    +"<div class='pole'>"
    +"<label>Temat</label>"
    +"<input type='text' name='subject' />"
    +"</div>"
    +"<div class='pole'>"
    +"<label>Wiadomość</label>"
    +"<textarea rows='8' cols='45' name='wiadomosc' id='wiadomosc'></textarea>"
    +"</div>"
    +"<div class='pole'>"
    +"<input type='submit' id='submit'></input>"
    +"</div>"
    +"</form>"
    $('main').append(content)
}