const heroSwiper = document.querySelector('.hero-swiper');

if (heroSwiper) {
    const swiper = new Swiper(heroSwiper, {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.hero-swiper-button-next',
            prevEl: '.hero-swiper-button-prev',
        },
        pagination: {
            el: '.hero-swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                const slideNumber = (index + 1).toString().padStart(2, '0');
                return `<span class="${className}">${slideNumber}</span>`;
            }
        }
    });
}