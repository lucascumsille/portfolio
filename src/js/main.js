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

    let headerHeight = $('#navbar-mobile-main').outerHeight();
    $('#navbar-mobile-main').next('div').css({'margin-top': (headerHeight)})
});    