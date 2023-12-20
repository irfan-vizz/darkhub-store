$(document).ready(function () {
    $('.bannerCarousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: false,
        autoplayHoverPause: true,
        nav: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsiveClass: true,
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            768: { items: 1 },
            1000: { items: 1 }
        }
    });

    $('.BoatCarousel').owlCarousel({
        items: 4,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 4000,
        dots: false,
        autoplayHoverPause: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsiveClass: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            768: { items: 3 },
            1000: { items: 4 }
        }
    });


    function setMageMenu() {
        var windowWidth = $(window).width();
        var parentOffset = $('.megaMenu').offset().left;

        $('.megaMenuWrapper').css({ 'width': windowWidth, 'left': - parentOffset });

        var level1 = $('.mgCat li').first().find('a').addClass('isHovered');
        var attr1 = level1.attr('child');
        $('.mgListing .listingStyle[parent="' + attr1 + '"]').show();

        var level2 = $('.mgListing .listingStyle[parent="' + attr1 + '"] li').first().find('a');
        level2.addClass('isHovered');
        var attr2 = level2.attr('child');
        $('.contentCardsWrapper.listingStyle[parent="' + attr2 + '"]').show();

        // level 1
        $('.mgCatHover').mouseover(function () {
            var child = $(this).attr('child');
            $('.mgListing .listingStyle').hide();
            $('.mgListing .listingStyle[parent="' + child + '"]').show();
            $('.mgListing .listingStyle').find('a').removeClass('isHovered');
            $('.mgClass .listingStyle').find('a').removeClass('isHovered');
            // experiment starts here
            $('.mgCat').find('a').removeClass('isHovered');

            var thisFirst = $('.mgListing .listingStyle[parent="' + child + '"] li').first().find('a');
            var GrandChild = thisFirst.attr('child');
            console.log(GrandChild);
            $('.mgContent .listingStyle').hide();
            $('.mgContent .listingStyle[parent="' + child + '"]').show();
            // forth setep
            $(this).addClass('isHovered');
        });
        $('.mgListinghover').mouseover(function () {
            var child = $(this).attr('child');
            $('.mgListinghover').removeClass('isHovered');
            $(this).addClass('isHovered');
            $('.mgClass .listingStyle').hide();
            $('.mgClass .listingStyle').find('a').removeClass('isHovered');
            $('.mgClass .listingStyle[parent="' + child + '"]').show();
            $('.mgContent .listingStyle').hide();
            $('.mgContent .listingStyle[parent="' + child + '"]').show();
        });
        $('.mgClasshover').mouseover(function () {
            var child = $(this).attr('child');
            $('.mgClasshover').removeClass('isHovered');
            $(this).addClass('isHovered');
            $('.mgContent .listingStyle').hide();
            $('.mgContent .listingStyle[parent="' + child + '"]').show();
        });

        let navHeight = $('.navbar').height();
        $('.dynamic-body-container').css('margin-top', navHeight);
    }
    setMageMenu();

    let counter = 0;
    let interval = setInterval(() => {
        if (counter == 3) {
            clearInterval(interval)
        }
        else {
            counter++;
            setMageMenu()
        }
    }, 3000)
})