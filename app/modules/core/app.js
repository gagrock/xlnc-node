

define(['modules/nav/topnav','materialize'],function(tn){

   
   console.log('app module start ..');
  

$(function(){
    tn.toggleDropDown();
    $('.button-collapse').sideNav();
    $('.parallax,.bt-contact').parallax();
    $('.contact-trigger').leanModal();
    $('#pd-4 , #pd-3 , #pd-2, #pd-1').leanModal();

    }); // end of document ready


});
