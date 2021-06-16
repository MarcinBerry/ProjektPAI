function generujWiecej() {
    $('main').fadeOut(500, function() {
        $('main').html("<h2>Więcej</h2>").attr("id", "projekty");
        generujRozdzial("doswiadczenie", "Mój Tytuł");
        generujWpis("#doswiadczenie-admissions");
        generujWpis("#doswiadczenie-admissions");
    }).fadeIn(500);
}

function generujRozdzial(klasa = "przykladowa", tytul = "Przykładowy tytuł") {
    var content = 
    "<section class='chapter' id='"+klasa+"'>"
    +"<div class='"+klasa+"-title'><h4>"+tytul+"</h4></div>"
    +"<div class='admissions' id='"+klasa+"-admissions'></div></section>"
    +"<hr/>";

    $('main').append(content);
}

function generujWpis(klasa = "przykladowa",
    data = "2020 - TEST",
    tytul = "Przykładowy tytuł",
    opis = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.") 
    {
    var content = 
    "<div class='entry'><div><p>"+data+"</p></div>"
    +"<div><h5>"+tytul+"</h5>"
    +"<p>"+opis+"</p></div></div>"

    $(klasa).append(content);
}