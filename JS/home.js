var nav_page = 0;
function homeInit() {
    $(document).ready(function () { 
        $('main').fadeIn(500).css("display", "flex");
        var buttonsCount = $('.przyciski'); 
        for(var i = 1; i <= buttonsCount.length; i++) {
            $('.przyciski:nth-child('+i+')').css("background", "var(--color"+(i+1)+")");
            $('.przyciski:nth-child(n)').css("transition", "background 0.5s");
         
        }

        $('.przyciski:nth-child(n)').mouseenter(function() {
            $(this).css("background", "transparent");
        })

        $('.przyciski:nth-child(n)').mouseleave(function() {
            for(var i = 1; i<= buttonsCount.length; i++) {
            $(".przyciski:nth-child("+i+")").css("background", "var(--color"+(i+1)+")");
            }
        });

    });

}

function przejdzDo(strona) {
    $('main').fadeOut(500, function() {
        $('main').load(strona, function() {
            alert("load was performed");
        });
    }).fadeIn(500);
    
}

function zmienDo(strona) {
    switch(strona) 
    {
        case 'projekty': generujProjekty(); break;
        default: alert("coś poszło nie tak");
    }
}

function generujProjekty() {
    $('main').html(
        '<h1>Projekty</h1>'
        +'<article>'
        +'    <div class="opis-projektu">'
        +'      <h3>Tytul Projektu</h3>'
        +'      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        +'      Sed cras ornare arcu dui vivamus arcu felis bibendum. At lectus urna duis convallis convallis tellus id interdum velit.'
        +'      Id ornare arcu odio ut sem nulla pharetra. </p>'
        +'    </div>'
        +'   <div class="zdjecie-projektu">'
        +'       <img src="img/projekt.jpg"/>'
        +'    </div>'
        +'</article>'
    ).css("flex-flow", "column");
    $('article').css("display", "flex", "flex-flow", "row", "text-align", "left", "justify-content", "space-between", "width", "75%");
}