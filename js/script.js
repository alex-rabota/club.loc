document.addEventListener('DOMContentLoaded', () => {
    const queen = document.querySelector('.bg-queen');
    const king = document.querySelector('.bg-king');
    const pawn = document.querySelector('.bg-pawn');
    const horse = document.querySelector('.bg-horse');

    const queenY = parseInt(getComputedStyle(queen).getPropertyValue("bottom").slice(0, -2));
    const kingY = parseInt(getComputedStyle(king).getPropertyValue("bottom").slice(0, -2));
    const pawnY = parseInt(getComputedStyle(pawn).getPropertyValue("bottom").slice(0, -2));
    const horseY = parseInt(getComputedStyle(horse).getPropertyValue("bottom").slice(0, -2));

    window.addEventListener('scroll', function() {
        queen.style.bottom = (this.scrollY / 6 + queenY) + "px";
        king.style.bottom = (this.scrollY / 5 + kingY) + "px";
        pawn.style.bottom = (this.scrollY / 4 + pawnY) + "px";
        horse.style.bottom = (this.scrollY / 3 + horseY) + "px";
    });

    const marquee = document.querySelectorAll('.marquee');
    marquee.forEach(function (item) {
        item.innerHTML += item.innerHTML;
    });

    const anchors = document.querySelectorAll('a[href*="#"]');
    anchors.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            const blockID = item.getAttribute('href').slice(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    const swiperStages = new Swiper('.stages__content', {
        enabled: false,
        speed: 400,
        spaceBetween: 20,
        breakpoints: {
            1263: {
                enabled: false,
            },
            1150: {
                enabled: true,
                slidesPerView: 3,
            },
            800: {
                enabled: true,
                slidesPerView: 2,
            },
            0: {
                enabled: true,
                slidesPerView: 1,
            },
        },
        pagination: {
            el: ".stages__pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.stages__next',
            prevEl: '.stages__prev',
        },
    });

    const swiper = new Swiper('.swiper', {
        speed: 400,
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },    
        breakpoints: {
            1150: {
                slidesPerView: 3,
            },
            800: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const btn = document.querySelectorAll('.player__btn');
    btn.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
        }, false);
    });

    const wow = new WOW({
        animateClass: "animated",
        offset: 100,
        mobile: false,
    });
    wow.init();
});