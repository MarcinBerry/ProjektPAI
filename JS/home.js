var homeContent = "";

function homeInit() {
    $(document).ready(function () { 
        homeContent = $('main').html();
        generujPrzycisk(".przyciski-box", "onclick=\"przejdzDo('wiecej')\"", "Więcej");
        generujPrzycisk(".przyciski-box", "onclick=\"przejdzDo('projekty')\"", "Projekty");
        generujPrzycisk(".przyciski-box", "onclick=\"przejdzDo('kontakt')\"", "Kontakt");
        $('main').fadeIn(500);
    });  
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
        $('main').html(homeContent).attr("id", "home");
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
