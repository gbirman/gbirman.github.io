

/*!
    * Start Bootstrap - Freelancer v6.0.0 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict

    let name = "Gabriel Birman"
    let phone_number = "(609) 933-4082"
    let email = "gabrielbirman1@gmail.com"

    $(document).ready(() => {
      //when the document is finished loading, replace everything
      //between the <a ...> </a> tags with the value of splitText
      // document.getElementById("emailLink").innerHTML = email;
      document.getElementById("emailLink").setAttribute('href', "mailto:"+email);
      document.getElementById("nameLink").innerHTML = name;
      document.getElementById("aboutLink0").innerHTML = "Hello there! Wouldn't want to waste your time rambling on and on and on....so let's get started! My name's Gabriel, I'm a junior software developer who studied CS at Princeton (graduated in 2020). On this page you can find some of my coding projects, hobbies, and other miscellaneous information that is likely of no use to you. Enjoy!";
      // document.getElementById("masthead-subheading").innerHTML = "Software Engineer by day, dreamer at night";
    }
    );
  
    // TODO: add projects
    // Chinese Language App
    // MRI stuff 
    // Hesai stuff
    // Coral Research 
    // Human Skin Segementation
    // Depth Estimation
    // Visual Basic 
    // Automate arbitrage bet placements?

    // Cool Stuff
    // Language Learning
    // Poem? 
    // Woodworking demo 
    // Juggling
    // Musical Compositions
    // Sports betting stuff? 



    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  