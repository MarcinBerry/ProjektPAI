var homeContent = "";

function homeInit() {
    $(document).ready(function () { 
        generujPrzycisk(".przyciski-box", "wiecej", "Wiecej");
        generujPrzycisk(".przyciski-box", "projekty", "Projekty");
        generujPrzycisk(".przyciski-box", "kontakt", "Kontakt");
        homeContent = $('main').html();
        $('main').fadeIn(500).css("display", "flex");
    });  
}

function testowaFunkcja() {

}

function generujPrzycisk(divBox, odnosnik, tytul) {
    var htmlPrzycisku = '<div class="przyciski" onclick="przejdzDo(\''+odnosnik+'\')">'+tytul+'</div>'
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

function przejdzDo(strona) {
    switch(strona) 
    {
        case 'wiecej': generujWiecej(); break;
        case 'projekty': generujProjekty(); break;
        case 'home': generujHome(); break;
        default: alert("coś poszło nie tak");
    }
}

function generujHome() {
    $('main').fadeOut(500, function() {
        $('main').html(homeContent).attr("id", "home").css("flex-flow", "row");
    }).fadeIn(500);
}