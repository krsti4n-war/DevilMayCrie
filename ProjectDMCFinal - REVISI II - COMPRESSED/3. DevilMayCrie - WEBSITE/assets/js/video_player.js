$('gameplay_video').each(function(){
    if ($(this).is(":in-viewport")) {
        $(this)[0].play();
    } else {
        $(this)[0].pause();
    }
})