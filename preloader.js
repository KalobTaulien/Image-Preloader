// Wait for jQuery to finish loading.
$(document).ready(function() {

  // When the page is done gathering all its assets, we can display the images.
  $(window).on('load', function () {

    // This is a fake timeout so you can see the image gradient.
    // This timeout is for people with fast connections. Remove it later, along with line #25.
    setTimeout(function YouCanRemoveThisTimeout() {


      // Select the preloading container
      const $preloadContainer = $('.preload__images');
      // Add the "fadeout" class. In the CSS, this takes 450ms by default.

      // That 450ms is reflected in the 450ms timeout function below.
      $preloadContainer.addClass('preload__images--fadeout');

      // Wait for 450ms (the time of the CSS transition to fade out, plus 50ms buffer)
      // before removing these classes.
      setTimeout(function () {
        $preloadContainer.removeClass('preload__images preload__images--fadeout');
      }, 450);


    }, 1500); // End of the fake timeout. Remove this. 

  });

});