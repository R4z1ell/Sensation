//----- SCROLL -----//

$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      /* The optional number (800) specifies the number of milliseconds it takes to scroll to the 
            specified area */
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

//----- STICKY NAV -----//
if ($(window).width() < 415) {
  $(".navigation").addClass("navigation__sticky");
  $(".navigation__nav").addClass("navigation__sticky--nav");
  $(".navigation__logo").addClass("navigation__sticky--logo");
  $(".sticky-links").css("color", "#232323");
  $(".sticky-home").css("color", "#cfa670");
  $(".cls-1").css({ fill: "#232323", "font-size": "50px" });
  $(".mobile-menu").css({ fill: "#232323" });
  $(".navigation__mobile--icon").css({ top: "25%" });
}

if ($(window).width() > 415) {
  $(".js--about-us").waypoint(
    function(direction) {
      if (direction == "down") {
        $(".navigation").addClass("navigation__sticky");
        $(".navigation__nav").addClass("navigation__sticky--nav");
        $(".navigation__logo").addClass("navigation__sticky--logo");
        $(".sticky-links").css("color", "#232323");
        $(".sticky-home").css("color", "#cfa670");
        $(".cls-1").css({ fill: "#232323", "font-size": "50px" });
        $(".mobile-menu").css({ fill: "#232323" });
        $(".navigation__mobile--icon").css({ top: "25%" });
      } else {
        $(".navigation").removeClass("navigation__sticky");
        $(".navigation__nav").removeClass("navigation__sticky--nav");
        $(".navigation__logo").removeClass("navigation__sticky--logo");
        $(".sticky-links").css("color", "#fff");
        $(".cls-1").css({ fill: "#fff", "font-size": "59px" });
        $(".mobile-menu").css({ fill: "#fff" });
        $(".navigation__mobile--icon").css({ top: "3%" });
      }
    },
    {
      offset: "60px"
    }
  );
}

//----- MOBILE NAV -----//

$(".js--nav-icon").click(function() {
  $(".navigation").toggleClass("navigation__clicked", 400);
  $(".navigation__nav").toggle();
  $(".navigation__logo-box").toggle(400);
  $(".navigation__mobile--icon").toggleClass("navigation__icon--position");
});
