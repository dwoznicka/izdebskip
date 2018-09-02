$(document).ready(function() {
    var $calendar = $('.home-calendar-events');
    var $calendarMobile = $('.home-calendar-events--mobile');
    var $blogBackground = $('.base.blog');
    var $galleryImages = $('.gallery-row');
    var $newsletterSubmitBtn = $('.newsletter-submit');

    $newsletterSubmitBtn.on('click', function () {
        var email = $('.newsletter-input').val();
        ga('set', 'userId', email); 
    });

    if ($galleryImages.length) {
        $galleryImages.slick({
            vertical: false,
            slidesToScroll: 3,
            slidesToShow: 3,
            infinite: false,
            appendArrows: $('.gallery-arrows'),
            prevArrow: '<button type="button" class="slick-prev">&lt;&lt; Poprzednie</button>',
            nextArrow: '<button type="button" class="slick-next">Następne &gt;&gt;</button>',
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        })
    }

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

    if ($calendarMobile.length) {
        $calendarMobile.slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            draggable: false,
            vertical: true,
            infinite: false,
            appendArrows: $('.events-arrows--mobile'),
            prevArrow: '<button type="button" class="slick-prev">Poprzednie</button>',
            nextArrow: '<button type="button" class="slick-next">Następne</button>'
        });
    }

    if ($blogBackground.length) {
        var num = 50;
        var increase = true;
        window.setInterval(function () {
            // increase by num 1, reset to 0 at 10
            num = increase ? (num + 1) : (num - 1);
            if (num === 100) {
                increase = false;
            }
            else if (num === 0) {
                increase = true;
            }
            $blogBackground.css('background-position-x', num+'%');
        }, 500); // repeat forever, polling every 3 seconds
    }
});
