$(document).ready(function() {
    var $calendar = $('.home-calendar-events');

    if ($calendar.length) {
        $calendar.slick({
            slidesToShow: 6,
            slidesToScroll: 6,
            draggable: false,
            vertical: true,
            infinite: false,
            appendArrows: $('.events-arrows'),
            prevArrow: '<button type="button" class="slick-prev">Poprzednie</button>',
            nextArrow: '<button type="button" class="slick-next">Następne</button>',
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                  }
                }
            ]
        });
    }
});
