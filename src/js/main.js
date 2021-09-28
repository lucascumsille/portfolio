$(document).ready(function(){
    $('#hamburguer-nav').click(function() {
        if($('.navbar-mobile').css("margin-right") == "0px") {
            $('.navbar-mobile').animate({"margin-right": '-=260'});
        } else {
            $('.navbar-mobile').animate({"margin-right": '+=260'});
        } 
    }); 
    $('#nav-mobile-close').click(function() {
        $('.navbar-mobile').animate({"margin-right": '-=260'});
    });

});

var scrollp=0;
(function ($) {
    $(document).ready(function(){
        $(function () {
            $(window).scroll(function () {
            // ask about the position of scroll 

                if ($(this).scrollTop() < scrollp || window.pageYOffset < 50 ) {
                    $('#navbar-mobile-main').fadeIn();
                    scrollp= $(this).scrollTop();
                    console.log('is working');
                } else {
                    $('#navbar-mobile-main').fadeOut();
                    scrollp= $(this).scrollTop();
                }
            });
        });
      
         // $("body").fadeIn(1000);
  
    let headerHeight = $('#navbar-mobile-main').outerHeight();
    $('main').css({'margin-top': (headerHeight)})

    });
}(jQuery));