var main = function() {

// Button 1

  $('#btn-1').click(function() { 
      $("#info-2").fadeOut( 500 );
   /*   $("#info-4").fadeOut( 500 );
      $("#info-5").fadeOut( 500 );
      $("#info-6").fadeOut( 500 );
      $(".LineSeparator2").fadeOut( 500 ); */
      $("#info-3").fadeOut( 500, function() {
        $("#info-1").animate({marginLeft: "300px",}, 800 , function() {
          $("#btn-1").fadeOut( 200,function() {
            $('.main-row #info-1 .deactive-info').fadeIn(900);
            console.log( $(".paco") );
          });
        });
      });
   });

  $('#btn-close-1').click(function () {
    $('.main-row #info-1 .deactive-info').fadeOut(900,function() {
      $("#btn-1").fadeIn( 500 );
      $("#info-1").animate({marginLeft: "0px",}, 800,function() {
        $("#info-2").fadeIn( 500 );
        $("#info-3").fadeIn( 500 );
        
      });
    });
  });

// End Button 1

// Button 2

  $('#btn-2').click(function() { 
      $("#info-1").fadeOut( 500 );
      $("#info-3").fadeOut( 500, function() {
        $("#info-2").animate({marginLeft: "33.33333333%",}, 0 , function() {
          $("#btn-2").fadeOut( 200,function() {
            $('.main-row #info-2 .deactive-info').fadeIn(900);
            console.log( $(".paco") );
          });
        });
      });
   });

  $('#btn-close-2').click(function () {
    $('.main-row #info-2 .deactive-info').fadeOut(900,function() {
      $("#btn-2").fadeIn( 500 );
      $("#info-2").animate({marginLeft: "0%",}, 0,function() {
        $("#info-1").fadeIn( 500 );
        $("#info-3").fadeIn( 500 );
        
      });
    });
  });

// End Button 2

// Button 3

  $('#btn-3').click(function() { 
      $("#info-1").fadeOut( 500 );
      $("#info-2").fadeOut( 500, function() {
        $("#info-3").animate({marginRight: "33.33333333%",}, 800 , function() {
          $("#btn-3").fadeOut( 200,function() {
            $('.main-row #info-3 .deactive-info').fadeIn(900);
            console.log( $(".paco") );
          });
        });
      });
   });

  $('#btn-close-3').click(function () {
    $('.main-row #info-3 .deactive-info').fadeOut(900,function() {
      $("#btn-3").fadeIn( 500 );
      $("#info-3").animate({marginRight: "0px",}, 800,function() {
        $("#info-1").fadeIn( 500 );
        $("#info-2").fadeIn( 500 );
        
      });
    });
  });

// End Button 3

// Button 4

  $('#btn-4').click(function() { 
      $("#info-5").fadeOut( 500 );
   /*   $("#info-4").fadeOut( 500 );
      $("#info-5").fadeOut( 500 );
      $("#info-6").fadeOut( 500 );
      $(".LineSeparator5").fadeOut( 500 ); */
      $("#info-6").fadeOut( 500, function() {
        $("#info-4").animate({marginLeft: "600px",}, 800 , function() {
          $("#btn-4").fadeOut( 500,function() {
            $('.main-row #info-4 .deactive-info').fadeIn(900);
            console.log( $(".paco") );
          });
        });
      });
   });

  $('#btn-close-4').click(function () {
    $('.main-row #info-4 .deactive-info').fadeOut(900,function() {
      $("#btn-4").fadeIn( 500 );
      $("#info-4").animate({marginLeft: "0px",}, 800,function() {
        $("#info-5").fadeIn( 500 );
        $("#info-6").fadeIn( 500 );
        
      });
    });
  });

// End Button 4

//Carousel

  $('.arrow-next').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });


  $('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');
    console.log( "You clicked a paragraph!" );

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });

// End Carousel

}

$(document).ready(main);
