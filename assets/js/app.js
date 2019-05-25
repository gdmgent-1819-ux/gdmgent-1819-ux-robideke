
//reservatie form
$(document).ready(function() {
    var panelOne = $('.form-panel.two').height(),
      panelTwo = $('.form-panel.two')[0].scrollHeight;
  
    $('.form-panel.two').not('.form-panel.two.active').on('click', function(e) {
      e.preventDefault();
  
      $('.form-toggle').addClass('visible');
      $('.form-panel.one').addClass('hidden');
      $('.form-panel.two').addClass('active');
   
    });
  
    $('.form-toggle').on('click', function(e) {
      e.preventDefault();
      $(this).removeClass('visible');
      $('.form-panel.one').removeClass('hidden');
      $('.form-panel.two').removeClass('active');
    
    });
  });




  
//fade in

$(document).ready(function() {
    
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
      /* Check the location of each desired element */
      $('.hideme').each( function(i){
          
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){
              
              $(this).animate({'opacity':'1'}, 550);
                  
          }
          
      }); 
  
  });
  
});


//Alpha fade
function delayedAlert() {
  var timeoutID = window.setTimeout(expandLogo, 1000);
}
function expandLogo() {
  $('.Name').addClass('is-expanded');
}
delayedAlert();



 
