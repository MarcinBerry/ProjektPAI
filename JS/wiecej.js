function generujWiecej() {
    $('main').fadeOut(500, function() {
        $('main').html("<h2>Więcej</h2>").attr("id", "projekty");
        generujRozdzial("doswiadczenie", "Mój Tytuł");
        generujWpis("#doswiadczenie-admissions");
        generujWpis("#doswiadczenie-admissions");
    }).fadeIn(500);
}

function generujRozdzial(id = "przykladowa", tytul = "Przykładowy tytuł") {
    var content = 
    "<section class='chapter' id='"+id+"'>"
    +"<div class='"+id+"-title'><h4 class='admissions-title'>"+tytul+"</h4></div>"
    +"<div class='admissions' id='"+id+"-admissions'></div></section>"
    +"<hr style='width: 100%;'/>";

    $('main').append(content);
}

function generujWpis(id = "przykladowa",
    data = "2020 - TEST",
    tytul = "Przykładowy tytuł",
    opis = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.") 
    {
    var content = 
    "<div class='entry'><div><p class='entry-date'>"+data+"</p></div>"
    +"<div class='entry-desc'><h5 class='entry-title'>"+tytul+"</h5>"
    +"<p class='entry-text'>"+opis+"</p></div></div>"

    $(id).append(content);
}