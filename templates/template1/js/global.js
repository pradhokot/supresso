$(document).ready(function () {

   // Set tinggi minimum page-body dan padding page
   var windowHeight = $(window).height();
   var runtextHeight = $('.runtext').outerHeight();
   var navbarHeight = $('.navbar').outerHeight();
   var headerHeight = runtextHeight + navbarHeight;
   $('body').css('padding-top', headerHeight + 'px');

   // Responsive base on screen width
   // if ($(window).width() >= 992) { } else { }

});