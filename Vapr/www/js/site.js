// :::::/\/\/\:::::  Site Functionality  :::::/\/\/\:::::  //

var slider = function() {

  // instantiates slider
    $('.bxslider').bxSlider();

};

var linkToggle = function() {
  $('.link_toggle').click(function() {
    $(this).next('p').slideToggle(150);
    $(this).toggleClass('active_link_toggle');
  });
};


$(document).ready(function() {
  setTimeout(function() {
    slider();
    linkToggle();
  }, 100);
});
