function createContact() {
    $('main').fadeOut(500, function() {
        $('main').html("<h2>Kontakt</h2><div id='contact-box'></div>").attr("id", "contact");
        createInfo('#contact-box');
        createForm('#contact-box');
    }).fadeIn(500);
}

function createInfo(divId) {
    var content = 
    "<div id='info'>"
    +"<h4 class='info-subtitle'>Telefon</h4>"
    +"<p>123-123-123</p>"
    +"<h4 class='info-subtitle'>Email</h4>"
    +"<p>przykladowy@mail.com</p>"

    $(divId).append(content)
}

function createForm(divId) {
    var content = 
    "<form onsubmit='formCheck()' method='POST'>"
    +"<div class='fields-box'>"
    +"<div class='field'>"
    +"<label>Imię</label>"
    +"<input type='text' name='name'/>"
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
    +"<select size='1' name='subject'>"
    +"<option value='tech'>Technologia</option>"
    +"<option value='moto'>Motoryzacja</option>"
    +"<option value='eko'>Ekologia</option>"
    +"<option value='spo'>Sport</option>"
    +"</select>"
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
    +"<div class='field' id='message-div'>"
    +"<label>Wiadomość</label>"
    +"<textarea rows='8' cols='45' name='message' id='message'></textarea>"
    +"</div>"
    +"</div>"
    +"<input type='submit' id='submit-button'></input>"
    +"</form>"
    $(divId).append(content)
}

function formCheck() {
    var name=$("input[name=name]").val();
    var surname=$("input[name=surname]").val();
    var email=$("input[name=email]").val();
    var subject=$("option:selected").val();
    var checkboxs=$("input:checkbox:checked").map(function() {
        return $(this).val();
    }).get();
    var sex=$("input[name=sex]:checked").val();
    var message=$("#message").val();

    if(email < 3)
        alert("Pole e-mail nie może być puste");

    if(sex === undefined) {
        alert("Pole płeć musi być zaznaczone");
    }
    localStorage.setItem("name", name);
    localStorage.setItem("surname", surname);
    localStorage.setItem("email", email);
    localStorage.setItem("subject", subject);
    localStorage.setItem("hobby", checkboxs);
    localStorage.setItem("sex", sex);
    localStorage.setItem("message", message);
}