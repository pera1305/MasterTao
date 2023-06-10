$( document ).ready(function() {
  $('.first-screen-slider').slick({
      dots: true,
      speed: 1000,
      appendArrows: ".container-arrows",
      responsive: [
          {
            breakpoint: 991,
            settings: {
              arrows: false,
              // fade: true,
            }
          },
           
      ]
  });
});

mobileOnlySlider(".advantages-slider", true, false, 991);

    function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
      var slider = $($slidername);
      var settings = {
        mobileFirst: true,
        dots: $dots,
        dotsClass: 'slick-dots',
        arrows: $arrows,
        responsive: [
          {
            breakpoint: $breakpoint,
            settings: "unslick"
          }
        ]
      };
    
      slider.slick(settings);
    
      $(window).on("resize", function () {
        if ($(window).width() > $breakpoint) {
          return;
        }
        if (!slider.hasClass("slick-initialized")) {
          return slider.slick(settings);
        }
      });
    } // Mobile Only Slider






function checkboxContainerPadding() {
  const checkButton = document.querySelectorAll('.check-button');
  checkButton.forEach(item => {
      item.closest('[class*="col"]').classList.add('padding-top');
  });
};

if (document.querySelector('.calculation-form')) {
  checkboxContainerPadding()
} else {
  null
}
