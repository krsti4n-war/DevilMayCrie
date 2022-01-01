(function($) {
    $.fn.sliderResponsive = function() {
        var set = $.extend({
            slidePause: 5000,
            fadeSpeed: 800,
            autoPlay: "on",
        });

        var $slider = $(this);
        var size = $slider.find("> div").length; //number of slides
        var position = 0; // current position of carousal
        var sliderIntervalID; // used to clear autoplay

        // Put .show on the first Slide
        $slider.find("div:first-of-type").addClass("show");

        //fadeout all items except .show
        $slider.find("> div").not(".show").fadeOut();
        startSlider();

        // function to start auto play
        function startSlider() {
            sliderIntervalID = setInterval(function() {
                nextSlide();
            }, set.slidePause);
        }

        // on mouseover stop the autoplay
        $slider.mouseover(function() {
            if (set.autoPlay === "on") {
                clearInterval(sliderIntervalID);
            }
        });

        // on mouseout starts the autoplay
        $slider.mouseout(function() {
            if (set.autoPlay === "on") {
                startSlider();
            }
        });

        //on right arrow click
        $slider.find("> .right").click(nextSlide);

        //on left arrow click
        $slider.find("> .left").click(prevSlide);

        // Go to next slide
        function nextSlide() {
            position = $slider.find(".show").index() + 1;
            if (position > size - 1) position = 0;
            changeCarousel(position);
        }

        // Go to previous slide
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
                .fadeIn(set.fadeSpeed)
                .addClass("show");
        }

        return $slider;
    };
})(jQuery);

$(document).ready(function() {
    $(".slider").sliderResponsive({});
});