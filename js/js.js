$(document).ready(function(){
    $('.sidenav').sidenav();
});

function desactivar(name) {
        var name='btn-'+name; 
        document.getElementsByName(name)[0].style.visibility = 'hidden';
}
function activar(name) {    
    var name='btn-'+name; 
    document.getElementsByName(name)[0].style.visibility = 'visible';
}


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.parallax').parallax();
  });


// Slider

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.carousel').carousel();
  });

  var instance = M.Carousel.init({
    fullWidth: true
  });

  // Or with jQuery

  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });