var homeContent = "";

function homeInit() {
    $(document).ready(function () { 
        homeContent = $('main').html();
        generujPrzycisk(".przyciski-box", "onclick=\"przejdzDo('wiecej')\"", "Więcej");
        generujPrzycisk(".przyciski-box", "onclick=\"przejdzDo('projekty')\"", "Projekty");
        generujPrzycisk(".przyciski-box", "onclick=\"przejdzDo('kontakt')\"", "Kontakt");
        $('main').fadeIn(500).css("display", "flex");
    });  
}

function testowaFunkcja() {
    generujKontakt();
}

function generujKontakt() {
    $('main').fadeOut(500, function() {
        $('main').html("").attr("id", "kontakt").css("flex-flow", "row");
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
    "<div id='formularz'>"
    +"<form action='mailto:beatap@cs.pollub.pl' method='POST'>"
    +"<label>Imię i nazwisko</label>"
    +"<input type='text' name='name' />"
    +"<label>Nazwisko</label>"
    +"<input type='text' name='name' />"
    +"<label>E-mail</label>"
    +"<input type='text' name='name' />"
    +"<label>Temat</label>"
    +"<input type='text' name='name' />"
    +"<label>Wiadomość</label>"
    +"<input type='text' name='name' />"
    +"<div id='submitbutton'></div>"
    +"</form>"
    generujPrzycisk("#submitbutton", "javascript:this.form.submit()", "Wyślij")
    $('main').append(content)

}

function przejdzDo(strona) {
    switch(strona) 
    {
        case 'wiecej': generujWiecej(); break;
        case 'projekty': generujProjekty(); break;
        case 'home': generujHome(); break;
        case 'kontakt': generujKontkat(); break;
        default: alert("coś poszło nie tak");
    }
}

function generujHome() {
    $('main').fadeOut(500, function() {
        $('main').html(homeContent).attr("id", "home").css("flex-flow", "row");
        generujPrzycisk(".przyciski-box", "onclick=\"przejdzDo('wiecej')\"", "Wiecej");
        generujPrzycisk(".przyciski-box", "onclick=\"przejdzDo('projekty')\"", "Projekty");
        generujPrzycisk(".przyciski-box", "onclick=\"przejdzDo('kontakt')\"", "Kontakt");
    }).fadeIn(500);
}

function generujPrzycisk(divBox, odnosnik, tytul) {
    var htmlPrzycisku = '<div class="przyciski" '+odnosnik+'">'+tytul+'</div>'
    $(divBox).append(htmlPrzycisku);

    var numerPrzycisku = $('.przyciski').length;
    $('.przyciski:nth-child('+numerPrzycisku+')').css("background", "var(--color"+numerPrzycisku+")");
    
    $('.przyciski:nth-child('+numerPrzycisku+')').mouseenter(function() {
        $(this).css("background", "transparent");
    });

    $('.przyciski:nth-child('+numerPrzycisku+')').mouseleave(function() {
        $(this).css("background", "var(--color"+numerPrzycisku+")");
    });
}

