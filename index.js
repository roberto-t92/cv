//desktop - abre el menu
function show() { if($(window).width() >= 768){document.getElementById('sidebar').classList.toggle('active');}};
$(window).resize(function(){if($(window).width() <= 767){$("ul").css("display","none");}});
$("#toggle-mobile").click(function() {
  $("ul").slideToggle();
});
$("#toggle-btn").click(function() {
  $("ul").css("display", "block");
});
//responsive - cierra automaticamente cuando haces click en alguna opcion del menu
if($(window).width() <= 767) { $("nav ul li a").click(function() {$("ul").slideToggle();});};
if($(window).width() <= 767) { $("nav ul li a").click(function() {$("ul").slideUp();});};
$(window).resize(function(){if($(window).width() <= 767){$("nav ul li a").click(function() {$("ul").slideUp();});}});

$('#footerAño').text((new Date()).getFullYear());

ScrollReveal().reveal('.scroll-anim', {
    delay: 100,
    useDelay: 'onload',
    interval: 80,
    reset:true
  });
ScrollReveal().reveal('.scroll-anim-p', {
    delay:170,
    interval:60,
    reset:true
  });

$("#toggle").click(function(){$("#toggle-content").toggle( "slow" );}); 

//menu li smooth scroll
$('a[href*="#"]') 
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {    
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {  
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');      
      if (target.length) {        
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {          
          var $target = $(target);
          //target.focus();         
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            //target.focus();         
          };
        });
      }
    }
  });


