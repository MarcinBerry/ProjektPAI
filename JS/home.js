function homeInit() {
    $(document).ready(function () { 
        $('main').fadeIn(500).css("display", "flex");
        var buttonsCount = $('.przyciski');
        var testText = "";
        var tab = [];
        for(var i = 1; i <= buttonsCount.length; i++) {
            tab[i] = i*50;
            $('.przyciski:nth-child('+i+')').css("background", "rgb("+tab[i]+", 150, 150)");
            $('.przyciski:nth-child(n)').css("transition", "background 0.5s");
            
        }

        // $('#przycisk1').mouseenter(function() {
        //     $(this).css("background", "transparent");
        // });
       

        $('.przyciski:nth-child(n)').mouseenter(function() {
            $(this).css("background", "transparent");
        })

        $('.przyciski:nth-child(n)').mouseleave(function() {
            $(this).css("background", "#ffff00");
        })

        $('#test').text(testText)
        
    });

}