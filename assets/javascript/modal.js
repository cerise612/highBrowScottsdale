$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
  
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
  
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  
  $(window).on('resize scroll', function() {
    $('.footer').each(function() {
        // var footer = $(this).attr('id');
      if ($('.footer').isInViewport()) {
        $('#myModal').show();
      } else {
        $('#myModal').hide();
      }
    });
  });

  $('#myModal').modal({ backdrop: 'static' }, 'show');



