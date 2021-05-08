window.onunload = function() {};

function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
}

sizecheck();

$(function () {
  
  if (w <= 768) {
    $('header .drawer').click(function(){
      $('body').toggleClass('nav-open');
      $('header .navbar').fadeToggle(200);
    });
    
    $('header .navbar ul li a').click(function(){
      $('body').toggleClass('nav-open');
      $('header .navbar').fadeToggle(200);
    }); 
  }

  if (w >768) {
  $('header ul').show();
  }
  
  $(window).resize(sizecheck());
}); 


