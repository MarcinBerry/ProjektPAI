var homeContent = "";

function homeInit() {
    $(document).ready(function () { 
        homeContent = $('main').html();
        generujPrzycisk(".przyciski-box", "wiecej", "Więcej");
        generujPrzycisk(".przyciski-box", "projekty", "Projekty");
        generujPrzycisk(".przyciski-box", "kontakt", "Kontakt");
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
        generujPrzycisk(".przyciski-box", "wiecej", "Wiecej");
        generujPrzycisk(".przyciski-box", "projekty", "Projekty");
        generujPrzycisk(".przyciski-box", "kontakt", "Kontakt");
    }).fadeIn(500);
}

function generujWiecej() {
    var content = "<h3>Więcej</h3>"
    +"<section class='doswiadczenie'>"
    +"<h4>Doświadczenie</h4>"
    +"</section>"

    $('main').fadeOut(500, function() {
        $('main').html(content).attr("id", "projekty").css("flex-flow", "column");
        generujWpis();
    }).fadeIn(500);
}

function generujWpis(data, tytul, opis) {
    var ty = tytul;
    var op = opis;
    var dat = data;
    
    if(ty === undefined) {
        ty = "Przykładowy tytuł";
    }

    if(op === undefined) {
        op = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    }
    if(dat === undefined) {
        dat = "2020 - Present";
    }
    
    var content = 
    "<div><p>"+data+"</p></div"
    +"<div><h5>"+tytul+"</h5>"
    +"<p>"+opis+"</p><d/iv>"

    $('.doswiadczenie').append(content);
}