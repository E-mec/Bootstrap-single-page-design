$(document).ready(function(){

    // HERO SLIDER
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav: true,
        dots: false,
        items: 1,
        smartSpeed: 1000,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        navText: ['PREV', 'NEXT'],
        responsive:{
            0:{
                nav: false,
            },
            768: {
                nav: true,
            }
            
        }
    });

    // $('#myCarousel').carousel({ interval: 3000, cycle: true });

        // PROJECT SLIDER
        $('#project-slider').owlCarousel({
            loop:true,
            margin:0,
            nav: false,
            dots: true,
            smartSpeed: 1000,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            margin:24,
            responsive:{
                0:{
                    items: 1,
                    margin: 0,
                },
                768: {
                    items: 2,
                },
                1140: {
                    items:2,
                    center: true,
                }
            }
        });

        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots: true,
            items: 1,
            autoplay:true,
            autoplayTimeout:4000,
            autoplayHoverPause:true,
            smartSpeed: 800,
        })
});