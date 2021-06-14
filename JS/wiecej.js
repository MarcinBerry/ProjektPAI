function generujWiecej() {
    $('main').fadeOut(500, function() {
        $('main').html("<h3>Wiecej</h3>").attr("id", "projekty").css("flex-flow", "column");
        generujRozdzial("doswiadczenie", "Mój Tytuł");
        generujWpis("doswiadczenie");
        generujWpis("doswiadczenie");
    }).fadeIn(500);
}

function generujRozdzial(klasa = "przykladowa", tytul = "Przykładowy tytuł") {
    var content = 
    "<section class='"+klasa+"'>"
    +"<div class='"+klasa+"-tytul'><h4>"+tytul+"</h4></div>"
    +"<div class='"+klasa+"-wpisy'></div></section>"
    +"<hr style='width: 100%'/>";

    $('main').append(content);
    $('.'+klasa+'-wpisy').css({"display": "flex", "flex-flow": "column"})
    $('.'+klasa).css({"display": "flex", "flex-flow": "row", "justify-content": "space-between"});
    
}

function generujWpis(klasa = "przykladowa",
    data = "2020 - TEST",
    tytul = "Przykładowy tytuł",
    opis = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.") 
    {
    var content = 
    "<div class='wpis'><div><p>"+data+"</p></div>"
    +"<div><h5>"+tytul+"</h5>"
    +"<p>"+opis+"</p></div></div>"

    $('.'+klasa+"-wpisy").append(content);
}