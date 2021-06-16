var homeContent = "";

function homeInit() {
    $(document).ready(function () { 
        homeContent = $('main').html();
        generujPrzycisk(".buttons-box", "onclick=\"przejdzDo('wiecej')\"", "Więcej");
        generujPrzycisk(".buttons-box", "onclick=\"przejdzDo('projekty')\"", "Projekty");
        generujPrzycisk(".buttons-box", "onclick=\"przejdzDo('kontakt')\"", "Kontakt");
        $('main').fadeIn(500).css("display","flex");
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
        generujPrzycisk(".buttons-box", "onclick=\"przejdzDo('wiecej')\"", "Wiecej");
        generujPrzycisk(".buttons-box", "onclick=\"przejdzDo('projekty')\"", "Projekty");
        generujPrzycisk(".buttons-box", "onclick=\"przejdzDo('kontakt')\"", "Kontakt");
    }).fadeIn(500);
}

function generujPrzycisk(divBox, odnosnik, tytul, kolor) {
    var className = "home-button";
    var htmlPrzycisku = '<div class="'+className+'" '+odnosnik+'">'+tytul+'</div>'
    $(divBox).append(htmlPrzycisku);

    var numerPrzycisku = $("."+className).length;
    
    var kol = kolor;
    if(kol === undefined){
        kol = "var(--color"+numerPrzycisku+")";
    }   

    $('.'+className+':nth-child('+numerPrzycisku+')').css("background", kol);
    
    $('.'+className+':nth-child('+numerPrzycisku+')').mouseenter(function() {
        $(this).css("background", "transparent");
    });

    $('.'+className+':nth-child('+numerPrzycisku+')').mouseleave(function() {
        $(this).css("background", kol);
    });
}
