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
function przejdzDo() {
    $('main').fadeOut(500, function() {
        $('main').load("wiecej.html", function() {
            alert("load was performed");
        });
    }).fadeIn(500);
    
}