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

var activeCategory = function() {

  $('.list-inset .item').click(function() {
    $(this).toggleClass('active_list_item');
  });

};

$(document).ready(function() {
  setTimeout(function() {
    slider();
    linkToggle();
    activeCategory();
  }, 400);
});
