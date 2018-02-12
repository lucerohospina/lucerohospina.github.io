$(document).ready(function(){
  $('#home').click(function(event) {
    event.preventDefault();
    $("html, body").animate({ 
      scrollTop: $('#home-target').offset().top-98
    }, 1000);
  });
  $('#about-me').click(function(event) {
    event.preventDefault();
    $("html, body").animate({ 
      scrollTop: $('#about-me-target').offset().top-98
    }, 1000);
  });
  $('#projects').click(function(event) {
    event.preventDefault();
    $("html, body").animate({ 
      scrollTop: $('#projects-target').offset().top-98
    }, 1000);
  });
  $('#contact-me').click(function(event) {
    event.preventDefault();
    $("html, body").animate({ 
      scrollTop: $('#contact-me-target').offset().top-98
    }, 1000);
  });

  $('#eng-languaje').click(function(){
    window.location.href = 'index.html'
  })

  $('#esp-language').click(function(){
    window.location.href = 'index-esp.html'
  })
});
