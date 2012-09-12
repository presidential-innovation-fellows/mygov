(function(){

  var stickyNav = function(){
    if ($(window).scrollTop() >= 196){
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  }

  $(function(){
    /* Sticky Nav */
    stickyNav();

    /* toggle nav */
    $("#menu-icon").on("click", function(){
      $("#nav").slideToggle();
      $(this).toggleClass("active");
    });
  });

  $(document).scroll(stickyNav);

}());
