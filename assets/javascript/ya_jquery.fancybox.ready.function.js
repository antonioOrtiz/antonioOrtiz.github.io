blarg = jQuery.noConflict();

blarg(document).ready(function() {
    blarg(".fancybox, .fancybox.iframe").fancybox({
        width: '853px',
        height: '480px',openEffect  : 'none',
		closeEffect : 'none',
		 helpers : {
          media: {
              youtube : {
                  params : {
                      autoplay : 1,
                      color:'white',
                      theme:'light'
                  }
              }
          }
      }
    });
});

