    jQuery(function($) {

        $('#Container').mixItUp();
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            scrollDistance: 300, // Distance from top/bottom before showing element (px)
            scrollFrom: 'top', // 'top' or 'bottom'
            scrollSpeed: 1000, // Speed back to top (ms)
            easingType: 'easeInOutCubic', // Scroll to top easing (see http://easings.net/)
            animation: 'slide', // Fade, slide, none
            animationSpeed: 200, // Animation speed (ms)
            scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
            scrollTarget: false, // Set a custom target element for scrolling to. Can be element or number
            scrollText: 'Scroll to top', // Text for element, can contain HTML
            scrollTitle: false, // Set a custom <a> title if required.
            scrollImg: false, // Set true to use image
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
            zIndex: 8009 // Z-Index for the overlay
        });
        $('.resume').jBox('Tooltip', {
            animation: 'pulse',
            theme: 'TooltipDark',
            closeOnClick: true
        });
        $('.miroLink').jBox('Tooltip', {
            animation: 'tada',
            theme: 'TooltipDark',
            closeOnClick: true

        });
        new jBox('Image', {
            width: 500,
            height: 500,
            imageFade: 2000,
            animation: 'slide',
            addClass: 'jBoxID2'
        });
        $('body').flowtype({
            minimum: 420,
            maximum: 1000,
            minFont: 5,
            maxFont: 20,
            fontRatio: 30
        });

    });