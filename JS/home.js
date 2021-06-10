function homeInit() {
    $(document).ready(function () { 
        $('main').fadeIn(500).css("display", "flex");
        kolorujPrzyciski();
    });  
}

// function przejdzDo(strona) {
//     $('main').fadeOut(500, function() {
//         $('main').load(strona, function() {
//             alert("load was performed");
//         });
//     }).fadeIn(500);
    
// }

function przejdzDo(strona) {
    switch(strona) 
    {
        case 'projekty': generujProjekt(); break;
        case 'home': generujHome(); break;
        default: alert("coś poszło nie tak");
    }
}

function generujProjekt() {
    $('main').fadeOut(500, function() {
        $('main').attr("id", "projekty").html(
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
        ).css("flex-flow", "column")
    }).fadeIn(500);
}

function generujHome() {
    $('main').fadeOut(500, function() {
        $('main').html(
            '<section>'
            +'<img id="profilowe" src="img/profilowe.png"/>'
            +'</section>'
            +'<section>'
            + '<h1>Witaj</h1>'
            + '<h3>Trochę o mnie</h3>'
            + '<span id="test"></span>'
            + '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
            + 'Sed cras ornare arcu dui vivamus arcu felis bibendum. At lectus urna duis convallis convallis tellus id interdum velit. '
            + 'Id ornare arcu odio ut sem nulla pharetra. </p>'
            + '<div class="przyciski-box">'
            + '<div class="przyciski" onclick="przejdzDo(\'wiecej\')">Więcej</div>'
            + '<div class="przyciski" onclick="przejdzDo(\'projekty\')">Projekty</div>'
            + '<div class="przyciski" onclick="przejdzDo(\'kontakt\')">Kontakt</div>'
            + '</div>'
            + '</div>'
            +'</section>'
        ).css("flex-flow", "row")
        kolorujPrzyciski();
    }).fadeIn(500);
}

function kolorujPrzyciski() {
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
}
