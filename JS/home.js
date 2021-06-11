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
        case 'projekty': generujProjekty(); break;
        case 'home': generujHome(); break;
        default: alert("coś poszło nie tak");
    }
}

function generujProjekty() {
    $('main').fadeOut(500, function() {
        $('main').html("<h1>Projekty</h1>");
        for(var i = 0; i < 3; i++) {
            generujProjekt();
        }
    }).fadeIn(500);
}

function generujProjekt(tytul, opis, zdjecie) {
    var ty = tytul;
    var op = opis;
    var zd = zdjecie;
    
    if(ty === undefined) {
        ty = "Przykładowy tytuł";
    }

    if(op === undefined) {
        op = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    }
    if(zd === undefined) {
        zd = "projekt.jpg";
    }

    var content = '<article class="projekt">'
    +'    <div class="opis-projektu">'
    +'      <h3>'+ty+'</h3>'
    +'      <p>'+op+'</p>'
    +'    </div>'
    +'   <div class="zdjecie-projektu">'
    +'       <img src="img/'+zd+'"/>'
    +'    </div>'
    +'</article>';

    $('main').attr("id", "projekty").append(content).css("flex-flow", "column")
}

function generujHome() {
    $('main').fadeOut(500, function() {
        $('main').html(homeContent).attr("id", "home").css("flex-flow", "row");
        kolorujPrzyciski();
    }).fadeIn(500);
}
