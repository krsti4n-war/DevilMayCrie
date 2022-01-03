$(document).ready(function() {
    var $slider = $(".slider")
    var size = $slider.find("> div").length;
    var position = 0;
    var sliderIntervalID;

    var set = $.extend({
        fadeSpeed: 1000,
    });

    $slider.find("div:first-of-type").addClass("show");

    $slider.find("> div").not(".show").fadeOut();

    //Next Slide
    $slider.find("> .right").click(nextSlide);

    //Previous Slide
    $slider.find("> .left").click(prevSlide);

    function nextSlide() {
        position = $slider.find(".show").index() + 1;
        if (position > size - 1) position = 0;
        changeCarousel(position);
    }

    function prevSlide() {
        position = $slider.find(".show").index() - 1;
        if (position < 0) position = size - 1;
        changeCarousel(position);
    }

    //this changes the image and button selection
    function changeCarousel() {
        $slider.find(".show").removeClass("show").fadeOut();
        $slider
            .find("> div")
            .eq(position)
            .fadeIn(1000)
            .addClass("show");
    }
});
