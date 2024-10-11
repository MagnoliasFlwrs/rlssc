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

const govermentSwiper = document.querySelector('.goverment-swiper');
if (govermentSwiper) {
    const swiperGov = new Swiper(govermentSwiper, {
        slidesPerView: 1.1,
        spaceBetween: 15,
        loop: true,
        navigation: {
            nextEl: '.goverment-next',
            prevEl: '.goverment-prev',
        },
        breakpoints: {
            768: {
              slidesPerView: 1.5,
              spaceBetween: 15,
            },
            900: {
                slidesPerView: 2.1,
                spaceBetween: 20,
              },

            1100: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1340: {
              slidesPerView: 3.1,
              spaceBetween: 30,
            }
          }
    
    });
}