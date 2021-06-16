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

    $('main').attr("id", "projekty").append(content)/*.css("flex-flow", "column")*/
}