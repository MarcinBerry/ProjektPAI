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
    generujPrzycisk(".przyciski-box")
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

function przejdzDo(strona) {
    switch(strona) 
    {
        case 'wiecej': generujWiecej(); break;
        case 'projekty': generujProjekty(); break;
        case 'home': generujHome(); break;
        case 'kontakt': generujKontakt(); break;
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

function generujPrzycisk(divBox, odnosnik, tytul, kolor) {
    var htmlPrzycisku = '<div class="przyciski" '+odnosnik+'">'+tytul+'</div>'
    $(divBox).append(htmlPrzycisku);

    var numerPrzycisku = $(".przyciski").length;
    
    var kol = kolor;
    if(kol === undefined){
        kol = "var(--color"+numerPrzycisku+")";
    }   

    $('.przyciski:nth-child('+numerPrzycisku+')').css("background", kol);
    
    $('.przyciski:nth-child('+numerPrzycisku+')').mouseenter(function() {
        $(this).css("background", "transparent");
    });

    $('.przyciski:nth-child('+numerPrzycisku+')').mouseleave(function() {
        $(this).css("background", kol);
    });
}


