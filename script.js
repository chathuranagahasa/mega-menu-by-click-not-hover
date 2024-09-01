$(document).ready(function () {
  "use strict";

  $(".menu > ul > li:has(ul)").addClass("menu-dropdown-icon");

  $(".menu > ul > li > ul:not(:has(ul))").addClass("normal-sub");

  $(".menu > nav > div > a").before(
    '<a href="#" class="menu-mobile"><i class=\'icon-mod-mais fs1\'></i></a>'
  );

  $(".menu > ul > li").click(function (e) {
    if ($(window).width() > 943) {
      if ($(this).children(".menu-list").is(":visible")) {
        $(this).children(".menu-list").fadeToggle(15);
        $(this).children(".menu-list").toggleClass("center");
        e.preventDefault();
      } else {
        $(".menu-list").hide();
        $(".menu-list").removeClass("center");
        $(this).children(".menu-list").fadeToggle(15);
        $(this).children(".menu-list").toggleClass("center");
        e.preventDefault();
      }
    }
  });

  $("body").click(function (e) {
    var target = e.target;
    if (
      target.className.indexOf("menu-button") == -1 &&
      target.offsetParent.className.indexOf("menu-button") == -1
    ) {
      $(".menu-list").hide();
      $(".menu-list").removeClass("center");
      return;
    }
  });

  $(".menu > ul > li").click(function () {
    if ($(window).width() <= 943) {
      $(this).children("ul").fadeToggle(100);
    }
  });

  $(".menu-mobile").click(function (e) {
    $(".menu > ul").toggleClass("show-on-mobile");
    e.preventDefault();
  });
});
