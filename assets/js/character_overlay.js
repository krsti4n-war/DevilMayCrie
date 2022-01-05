$(window).on('load', function () {
    $("#trigger-overlay1").click(function(){
       $('#overlay-bg1').show();
    });

    $("#trigger-overlay2").click(function(){
       $('#overlay-bg2').show();
    });
    
    $("#trigger-overlay3").click(function(){
       $('#overlay-bg3').show();
    });

    $('.overlay-bg').click(function(){
        $('.overlay-bg').hide();
    });
});