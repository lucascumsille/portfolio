$(document).ready((function(){$("#hamburguer-nav").click((function(){"0px"==$(".navbar-mobile").css("margin-right")?$(".navbar-mobile").animate({"margin-right":"-=260"}):$(".navbar-mobile").animate({"margin-right":"+=260"})})),$("#nav-mobile-close").click((function(){$(".navbar-mobile").animate({"margin-right":"-=260"})}))}));var scrollp=0;!function(n){n(document).ready((function(){n((function(){n(window).scroll((function(){n(this).scrollTop()<scrollp||window.pageYOffset<50?(n("#navbar-mobile-main").fadeIn(),scrollp=n(this).scrollTop(),console.log("is working")):(n("#navbar-mobile-main").fadeOut(),scrollp=n(this).scrollTop())}))}));let i=n("#navbar-mobile-main").outerHeight();n("main").next("div").css({"margin-top":i})}))}(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsImNzcyIsImFuaW1hdGUiLCJtYXJnaW4tcmlnaHQiLCJzY3JvbGxwIiwid2luZG93Iiwic2Nyb2xsIiwidGhpcyIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiZmFkZUluIiwiY29uc29sZSIsImxvZyIsImZhZGVPdXQiLCJoZWFkZXJIZWlnaHQiLCJvdXRlckhlaWdodCIsIm5leHQiLCJtYXJnaW4tdG9wIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBQUMsVUFBQUMsT0FBQSxXQUNBRixFQUFBLG1CQUFBRyxPQUFBLFdBQ0EsT0FBQUgsRUFBQSxrQkFBQUksSUFBQSxnQkFDQUosRUFBQSxrQkFBQUssUUFBQSxDQUFBQyxlQUFBLFVBRUFOLEVBQUEsa0JBQUFLLFFBQUEsQ0FBQUMsZUFBQSxhQUdBTixFQUFBLHFCQUFBRyxPQUFBLFdBQ0FILEVBQUEsa0JBQUFLLFFBQUEsQ0FBQUMsZUFBQSxnQkFLQSxJQUFBQyxRQUFBLEdBQ0EsU0FBQVAsR0FDQUEsRUFBQUMsVUFBQUMsT0FBQSxXQUNBRixHQUFBLFdBQ0FBLEVBQUFRLFFBQUFDLFFBQUEsV0FHQVQsRUFBQVUsTUFBQUMsWUFBQUosU0FBQUMsT0FBQUksWUFBQSxJQUNBWixFQUFBLHVCQUFBYSxTQUNBTixRQUFBUCxFQUFBVSxNQUFBQyxZQUNBRyxRQUFBQyxJQUFBLGdCQUVBZixFQUFBLHVCQUFBZ0IsVUFDQVQsUUFBQVAsRUFBQVUsTUFBQUMsbUJBT0EsSUFBQU0sRUFBQWpCLEVBQUEsdUJBQUFrQixjQUNBbEIsRUFBQSxRQUFBbUIsS0FBQSxPQUFBZixJQUFBLENBQUFnQixhQUFBLE9BcEJBLENBdUJBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAkKCcjaGFtYnVyZ3Vlci1uYXYnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgaWYoJCgnLm5hdmJhci1tb2JpbGUnKS5jc3MoXCJtYXJnaW4tcmlnaHRcIikgPT0gXCIwcHhcIikge1xuICAgICAgICAgICAgJCgnLm5hdmJhci1tb2JpbGUnKS5hbmltYXRlKHtcIm1hcmdpbi1yaWdodFwiOiAnLT0yNjAnfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcubmF2YmFyLW1vYmlsZScpLmFuaW1hdGUoe1wibWFyZ2luLXJpZ2h0XCI6ICcrPTI2MCd9KTtcbiAgICAgICAgfSBcbiAgICB9KTsgXG4gICAgJCgnI25hdi1tb2JpbGUtY2xvc2UnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLm5hdmJhci1tb2JpbGUnKS5hbmltYXRlKHtcIm1hcmdpbi1yaWdodFwiOiAnLT0yNjAnfSk7XG4gICAgfSk7XG5cbn0pO1xuXG52YXIgc2Nyb2xscD0wO1xuKGZ1bmN0aW9uICgkKSB7XG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgJChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIGFzayBhYm91dCB0aGUgcG9zaXRpb24gb2Ygc2Nyb2xsIFxuXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPCBzY3JvbGxwIHx8IHdpbmRvdy5wYWdlWU9mZnNldCA8IDUwICkge1xuICAgICAgICAgICAgICAgICAgICAkKCcjbmF2YmFyLW1vYmlsZS1tYWluJykuZmFkZUluKCk7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbHA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpcyB3b3JraW5nJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI25hdmJhci1tb2JpbGUtbWFpbicpLmZhZGVPdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xscD0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICBcbiAgICAgICAgIC8vICQoXCJib2R5XCIpLmZhZGVJbigxMDAwKTtcbiAgXG4gICAgbGV0IGhlYWRlckhlaWdodCA9ICQoJyNuYXZiYXItbW9iaWxlLW1haW4nKS5vdXRlckhlaWdodCgpO1xuICAgICQoJ21haW4nKS5uZXh0KCdkaXYnKS5jc3MoeydtYXJnaW4tdG9wJzogKGhlYWRlckhlaWdodCl9KVxuXG4gICAgfSk7XG59KGpRdWVyeSkpOyJdfQ==
