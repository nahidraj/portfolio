$(function () {
    // preloader js
    $(window).on('load', function () {
        $('.preloader').delay(1500).fadeOut(300);
    })

    // active menu js
    const li = document.querySelectorAll(".links");
    const sec = document.querySelectorAll("section");

    function activeMenu() {
        let len = sec.length;
        while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
        li.forEach(ltx => ltx.classList.remove("active"));
        li[len].classList.add("active");
    }

    activeMenu();
    window.addEventListener("scroll", activeMenu)

    // circle progressbar
    $('.circlechart').circlechart();

    // venobox js
    $('.venobox').venobox();

    // fixed menu js
    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();
        if (scrolling > 10) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });

    // counter up js
    $('.counter').counterUp({
        delay: 100,
        time: 2000
    });

    // navbar js
    $('.side-menu').click(function () {
        $('.sidebar').addClass('show-menu');
    });

    $('.side-menu').click(function () {
        $('.full-overlay').addClass('visible');
    });

    $('.sidebar .side-nav li a').click(function () {
        $('.sidebar').removeClass('show-menu');
    });

    $('.sidebar .side-nav li a').click(function () {
        $('.full-overlay').removeClass('visible');
    });

    $('.full-overlay').click(function () {
        $('.full-overlay').removeClass('visible');
    });

    $('.full-overlay').click(function () {
        $('.sidebar').removeClass('show-menu');
    });

    // banner type js
    var typed = new Typed('.type', {
        strings: [
            'Frontend Developer',
            'Youtuber',
            'PHP Developer',
            'Lecturer',
        ],
        typeSpeed: 80,
        loop: true,
        backSpeed: 30,
        backDelay: 3000,
    });

    // animation on scroll js
    AOS.init();

    // slick slider js
    $('.slider-main').slick({
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 2,
        arrows: false,
        slidesToScroll: 1,
        slidesToScroll: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

    // smooth scroll js
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 74
                }, 0);
                return false;
            }
        }
    });

    // back to top button
    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, );
    });

    // color switcher
    // $('.mixer .icon').click(function () {
    //     $('.mixer').toggleClass('show-mixer');
    // });

});