
// collaspible nav
// This code dosen't works on Firefox and IE and works on other browesers.
$(document).ready(function () {
    $('.animated-icon1,.animated-icon3,.animated-icon4').click(function () {
        $(this).toggleClass('open');
    });
});

// Works everywhere
$(document).ready(function () {

    // Hide/show animation hamburger function
    $('.navbar-toggler').on('click', function () {

        // Take this line to first hamburger animations
        $('.animated-icon1').toggleClass('open');

        // Take this line to second hamburger animation
        $('.animated-icon3').toggleClass('open');

        // Take this line to third hamburger animation
        $('.animated-icon4').toggleClass('open');
    });

});

// // sticky nav
$(document).ready(function() {
    var windowH = $(window).height();
    var stickToBot = windowH - $('#menu').outerHeight(true);
    //outherHeight(true) will calculate with borders, paddings and margins.
    $('#menu').css({'top': stickToBot + 'px'});

    $(window).scroll(function() {
       var scrollVal = $(this).scrollTop();
        if ( scrollVal > stickToBot ) {
            $('#menu').css({'position':'fixed','top' :'0px'});
        } else {
            $('#menu').css({'position':'absolute','top': stickToBot +'px'});
        }
    });
});​


// employee profiles about page
// $(document).ready(function () {
//     $("#loriText").hide()
//     $("#piperText").hide()
  
//     $("#loriButton").click(function(){
//             $("#loriText").toggle()
//         });
//     $("#piperButton").click(function(){
//             $("#piperText").toggle()
//         });
// });

