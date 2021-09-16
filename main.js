/*MAINJSFILE*/
jQuery(document).ready(function ($) {
    let root = document.documentElement;

root.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', e.clientX + "px");
  root.style.setProperty('--mouse-y', e.clientY + "px");
});


        $("#primary-colour").change(function () {
                root.style.setProperty('--primary-colour', this.value);
        });
    
    $("#dark-night-toggle").change(function () {
                $('body').toggleClass('lightmode');
        });
    $('.work-image').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});
		
    
});