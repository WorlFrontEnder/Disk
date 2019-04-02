$(document).ready( function() {

 var btn = $(".btn-mobil");
 var topNavMenu =$('.top-nav-menu');

 $(btn).on('click', function(e){
 	e.preventDefault();
    topNavMenu.slideToggle();
 });


 var btn2 = $(".btn-mobil2");
 var topNavMenu2 =$('.footer-menu');

 $(btn2).on('click', function(e){
 	e.preventDefault();
    topNavMenu2.slideToggle();
 });
 
});