
/**
* Smooth scrolling to anchor link under various conditions:
* - from within the page where the target is (both on page load and after cliking on an anchor link on the same page)
* - from a different the page where the target is
**/

function smooth_scroll_to(hash, e) {
    if(hash === '') {
        return false;
    } else {
        if($(hash).length > 0) {
            if(typeof e !== 'undefined') {
                e.preventDefault();
                history.pushState(null, null, $(e.target).attr('href'));
            }
            var offset;
            if ($(window).width() < 1000) {
                offset = $('.home-news').eq(1).height() + 150;
            }
            else {
                offset = $('.home-news').eq(0).height() + 300;
            }
            $('html, body').animate({
                scrollTop: $(hash).offset().top - offset
            }, 350 );
        }
    }
}

$(window).on('load',function() {
    smooth_scroll_to(window.location.hash);
});

$(document).ready(function() {
    var $calendar = $('.home-calendar-events');
    var $calendarMobile = $('.home-calendar-events--mobile');
    var $blogBackground = $('.base.blog');
    var $galleryImages = $('.gallery-row-main');
    var $newsletterSubmitBtn = $('.newsletter-submit');
    var $gridWrapper = $('.blog-snippets-wrapper');
    var $newsContainer = $('.home-news-container');
    var $newsContainerMobile = $('.home-news-container--mobile');
    var $reportGalleryRows = $('.gallery-row');

    var $homeGallery = $('.home-gallery');

    $('#newsLink').on('click', function(e) {
        smooth_scroll_to('#newsy', e);
    });

    $('.navbar-collapse').collapse("hide");

    $newsletterSubmitBtn.on('click', function () {
        var email = $('.newsletter-input').val();
        ga('set', 'userId', email); 
    });

    if ($homeGallery.length) {
        $homeGallery.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            draggable: true,
            vertical: false,
            infinite: true,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            pauseOnFocus: false,
            variableWidth: true,
            autoplaySpeed: 5500,
            speed: 800,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: false,
                    }
                }
            ]
        });
    }

    if ($newsContainer.length) {
        $newsContainer.slick({
            slidesToShow: 3,
            slidesToScroll: 2,
            autoplay: false,
            draggable: true,
            vertical: false,
            infinite: false,
            arrows: false,
            dots: true
        });
    }

    if ($newsContainerMobile.length) {
        $newsContainerMobile.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: false,
            vertical: false,
            infinite: false,
            arrows: false,
            dots: true
        });
    }

    if ($gridWrapper.length) {
        $gridWrapper.masonry({
            columnWidth: '.grid-sizer',
            itemSelector: '.blog-post-container',
            percentPosition: true,
            gutter: '.gutter-sizer'
        });
    }

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

    if ($reportGalleryRows.length) {
        $reportGalleryRows.each( function (index) {
            $(this).slick({
            vertical: false,
            slidesToScroll: 1,
            slidesToShow: 2,
            infinite: false,
            appendArrows: $('.gallery-arrows-'+index),
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
            });
        });
    }

    if ($calendar.length) {
        $calendar.slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            draggable: false,
            vertical: true,
            infinite: false,
            appendArrows: $('.events-arrows'),
            prevArrow: '<button type="button" class="slick-prev">Poprzednie</button>',
            nextArrow: '<button type="button" class="slick-next">Następne</button>',
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
