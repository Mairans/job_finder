$(function () {
  var mixer = mixitup('.vacantion__list');
  $('.vacantion__filter-btn').on('click', function () {
    $('.vacantion__filter-btn').removeClass('vacantion__filter-btn--active')
    $(this).addClass('vacantion__filter-btn--active')
  })
})