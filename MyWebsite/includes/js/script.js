/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

// this tell jquery to wait till page loads and execute the function
$(function () {
  $('#alertMe').click(function (e) {
    // when we clicks a link it tries to do it's default behaviour
    // so we are preveting it.
    e.preventDefault();
    $('#successAlert').slideDown();
  })

  $('a.pop').click(function (e) {
    e.preventDefault();

  });
  $('a.pop').popover();

  $('[rel="tooltip"]').tooltip();

});
