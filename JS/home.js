/*
$(document).ready(function() {
    $('#przyciski li').on('mouseenter', function() {
        $('#przyciski li').animate({background: '#000000'}, 20, 'linear');
    });
});
*/
function homeInit() {
    $(document).ready(function () { 
        $('main').fadeIn(500).css("display", "flex");
    });

}
function changeColor() {
    $('#przycisk1').on('click', function() {
        $('#effect').animate({
            backgroundColor: "#000000"
        }, 200);
    });
    //$('#przycisk1').css("background", "var(--tlo-kolor)");
}