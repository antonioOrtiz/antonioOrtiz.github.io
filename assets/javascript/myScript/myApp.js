var j = jQuery.noConflict();

j(document).ready(function() {
    function openFancybox() {
          setTimeout(function () {
            j("#banner").trigger('click');
                }, 500);

    };

    var visited = j.cookie('visited');
    if (visited == 'yes') {
        return false;
    } else {
        openFancybox();
    };
    j.cookie('visited', 'yes', {
        expires: 7
    });

    j("#banner").click(function() {
        j.fancybox({
          href: this.href,
            type: "image",
            maxWidth: 750,
            maxHeight: 502
        });
        return false;
    });
});