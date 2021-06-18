var homeContent = "";
function homeInit() {
    $(document).ready(function () { 
        homeContent = $('main').html();
        createButton(".buttons-box", "onclick=\"goTo('wiecej')\"", "Więcej");
        createButton(".buttons-box", "onclick=\"goTo('projekty')\"", "Projekty");
        createButton(".buttons-box", "onclick=\"goTo('kontakt')\"", "Kontakt");
        $('main').fadeIn(500).css("display","flex");
    });  
}
function goTo(page) {
    switch(page) 
    {
        case 'wiecej': createMore(); break;
        case 'projekty': createProjects(); break;
        case 'home': createHome(); break;
        case 'kontakt': createContact(); break;
        default: alert("coś poszło nie tak");
    }
}
function createHome() {
    $('main').fadeOut(500, function() {
        $('main').html(homeContent).attr("id", "home");
        createButton(".buttons-box", "onclick=\"goTo('wiecej')\"", "Wiecej");
        createButton(".buttons-box", "onclick=\"goTo('projekty')\"", "Projekty");
        createButton(".buttons-box", "onclick=\"goTo('kontakt')\"", "Kontakt");
    }).fadeIn(500);
}
function createButton(divBox, reference, title, color) {
    var className = "home-button";
    var buttonHTML = '<div class="'+className+'" '+reference+'">'+title+'</div>'
    $(divBox).append(buttonHTML);

    var buttonNr = $("."+className).length;
    
    var col = color;
    if(col === undefined){
        col = "var(--color"+buttonNr+")";
    }   

    $('.'+className+':nth-child('+buttonNr+')').css("background", col);
    
    $('.'+className+':nth-child('+buttonNr+')').mouseenter(function() {
        $(this).css("background", "transparent");
    });

    $('.'+className+':nth-child('+buttonNr+')').mouseleave(function() {
        $(this).css("background", col);
    });
}
