 // Load cookie library
 $.getScript('https://cdn.rawgit.com/js-cookie/js-cookie/v2.1.2/src/js.cookie.js', function() {

    // If cookie found (already shown)
    if(Cookies.get('notice') !== undefined) {

      // Hide cookie notice (change jQuery selector to match your own)
      $('.modal-wrapper').remove();
    }

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
    // On button click
    $('#modalCloseButton').click(function() {
        // Calculate when you want to display the notice again (change 15 to number of minutes you want)
        var expireTime = new Date(new Date().getTime() + 60000 * 60 * 24 * 60);
        // Set this cookie
        Cookies.set('notice', 'shown', { expires: expireTime });
      });
    });
  });

  $('#myModal').modal({ backdrop: 'static' }, 'show');

  $ (document).ready(function() {   
    if ($ .cookie("popup_1_2") == null) {
         $('#modalUser').modal('show');
    $ .cookie("popup_1_2", "2");
 }
});