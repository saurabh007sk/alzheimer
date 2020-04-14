    ////////////____Input Focus___//////////////////

    $('.form-control').focusout(function() {
        $('.form-group').removeClass('focus');
    });
    $('.form-control').focus(function() {
        $(this).closest('.form-group').addClass('focus');
    });

    /// Input Kepress Filled  Focus
    $('.form-control').keyup(function() {
        if($(this).val().length > 0){
            $(this).closest('.form-group').addClass('filled');
        }

        else{
            $(this).closest('.form-group').removeClass('filled');
        }
    });

    /// Input Check Filled Focus
    var $formControl = $('.form-control');
    var values = {};
    var validate =    $formControl.each(function() {
        if($(this).val().length > 0){
            $(this).closest('.form-group').addClass('filled');
        }
        else{
            $(this).closest('.form-group').removeClass('filled');
        }
    });

// Button switching

$('.caption').click(function(){
  $(this).closest('.log-form').addClass('open');
});


$('.close').click(function(){
  $(this).closest('.log-form').removeClass('open');
});
//Ripple Effect
$(".btn").click(function(e) {

  // Remove olds ones
  $(".ripple").remove();

  // Setup
  var posX = $(this).offset().left,
      posY = $(this).offset().top,
      buttonWidth = $(this).width(),
      buttonHeight = $(this).height();

  // Add the element
  $(this).prepend("<span class='ripple'></span>");

  // Make it round!
  if (buttonWidth >= buttonHeight) {
    buttonHeight = buttonWidth;
  } else {
    buttonWidth = buttonHeight;
  }

  // Get the center of the element
  var x = e.pageX - posX - buttonWidth / 2;
  var y = e.pageY - posY - buttonHeight / 2;

  // Add the ripples CSS and start the animation
  $(".ripple").css({
    width: buttonWidth,
    height: buttonHeight,
    top: y + 'px',
    left: x + 'px'
  }).addClass("rippleEffect");
});
/////////////////////////
$('#login-button').click(function(){
    $('#login-button').fadeOut("slow",function(){
      $("#container").fadeIn();
      TweenMax.from("#container", .4, { scale: 0, ease:Sine.easeInOut});
      TweenMax.to("#container", .4, { scale: 1, ease:Sine.easeInOut});
    });
  });
  
  $(".close-btn").click(function(){
    TweenMax.from("#container", .4, { scale: 1, ease:Sine.easeInOut});
    TweenMax.to("#container", .4, { left:"0px", scale: 0, ease:Sine.easeInOut});
    $("#container, #forgotten-container").fadeOut(800, function(){
      $("#login-button").fadeIn(800);
    });
  });

  $(".close-btn").click(function(){
    TweenMax.from("#container", .4, { scale: 1, ease:Sine.easeInOut});
    TweenMax.to("#container", .4, { left:"0px", scale: 0, ease:Sine.easeInOut});
    $("#container, #cnw-container").fadeOut(800, function(){
      $("#login-button").fadeIn(800);
    });
  });
  
  /* Forgotten Password */
  $('#forgotten').click(function(){
    $("#container").fadeOut(function(){
      $("#forgotten-container").fadeIn();
    });
  });

  $('#cnw').click(function(){
    $("#container").fadeOut(function(){
      $("#cnw-container").fadeIn();
    });
  });
/////////////////////////////
$('.login-input').on('focus', function() {
    $('.login').addClass('focused');
  });
  
  $('.login').on('submit', function(e) {
    e.preventDefault();
    $('.login').removeClass('focused').addClass('loading');
  });
  /////////////////////////
  var formAnim = {
    $form: $('#form'),
    animClasses: ['face-up-left', 'face-up-right', 'face-down-left', 'face-down-right', 'form-complete', 'form-error'],
    resetClasses: function() {
        var $form = this.$form;
        
        $.each(this.animClasses, function(k, c) {
            $form.removeClass(c);
        });
    },
    faceDirection: function(d) {
        this.resetClasses();
        
        d = parseInt(d) < this.animClasses.length? d : -1;
        
        if(d >= 0) {
            this.$form.addClass(this.animClasses[d]);
        } 
    }
}