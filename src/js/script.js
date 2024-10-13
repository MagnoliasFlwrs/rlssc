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

const fancyboxBoxes = document.querySelectorAll('[data-fancybox]');


if (fancyboxBoxes.length >0) {
    Fancybox.bind("[data-fancybox]", {

    });
}

const servicesSelects =  document.querySelectorAll('.services');

servicesSelects?.forEach((item) => {
    item.addEventListener('click' , ()=> {
        const servicesOptions = item.closest('.services-wrap').querySelectorAll('.services-list li');
        const servicesSelectBody = item.closest('.services-wrap').querySelector('.services-list');

        servicesSelectBody.classList.add('active');
        item.closest('.services-wrap').querySelector('p').addEventListener('click' , () => {
            servicesSelectBody.classList.add('active');
        })
        servicesOptions.forEach(el => {
            el.addEventListener('click' , ()=> {
                item.querySelector('p').innerHTML = el.innerHTML;
                item.dataset.current = el.dataset.value;
                servicesSelectBody.classList.remove('active')
            })
        })
        document.addEventListener('click' , (e)=> {
            if ((!e.target.closest('.services-wrap')) && servicesSelectBody.classList.contains('active')) {
                servicesSelectBody.classList.remove('active');
            }
        })
    })
})


const links = document.querySelectorAll('.dropdown-link');
const menus = document.querySelectorAll('.dropdown-menu');

function hideAllMenus() {
    menus.forEach(menu => menu.classList.remove('active'));
    links.forEach(link => link.classList.remove('active'));
}

links.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        hideAllMenus();
        link.classList.add('active');
        menus[index].classList.add('active');
    });
});
window.addEventListener('DOMContentLoaded', () => {
    links[0].classList.add('active');
    menus[0].classList.add('active');
});

const burgerBtn = document.querySelector('.burger-btn');
const burgerBtnsClose = document.querySelectorAll('.burger-btn-close');
const headerMenu = document.querySelector('.header-menu');

burgerBtn.addEventListener('click', (event) => {
    if(headerMenu.classList.contains('close')) {
        headerMenu.classList.remove('close');
    }
    headerMenu.classList.add('active');
    document.querySelector('body').style.overflow='hidden';

})
burgerBtnsClose.forEach((burgerBtnClose) => {
    burgerBtnClose.addEventListener('click', (event) => {
        headerMenu.classList.remove('active');
        headerMenu.classList.add('close');
        document.querySelector('body').style.overflowY='auto';

    })
})

const menuModalDropdowns = document.querySelectorAll('.header-mobile-dropdown');

menuModalDropdowns.forEach(menu => {
    menu.addEventListener('click', (event) => {
        menu.classList.toggle('active');
        menu.querySelectorAll('.dropdown-menu a').forEach(elem => {
            elem.addEventListener('click', function(event) {
                event.stopPropagation();
            })
        })
    })
})

const servicesSwiper = document.querySelector('.services-swiper');

if (servicesSwiper) {
    const swiper = new Swiper('.services-swiper', {
        loop: true,
        on: {
            slideChange: updatePagination,
        },
        navigation: {
            nextEl: '.services-swiper-next',
            prevEl: '.services-swiper-prev',
        },
    });

    const paginationItems = document.querySelectorAll('.services-swiper-pagination .pagination-item');

    function updatePagination() {
        paginationItems.forEach((item, index) => {
            item.classList.toggle('active', index === swiper.realIndex);
        });
    }

    paginationItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            swiper.slideToLoop(index); // Переход к нужному слайду
        });
    });

    updatePagination();
}


const timingModal = document.querySelector('.timing-modal');
const timingModalShowBtns = document.querySelectorAll('.window');
const timingModalClose = document.querySelector('.timing-modal .close-btn');
const overlay = document.querySelector('.overlay');

timingModalShowBtns?.forEach((item) => {
    item.addEventListener('click', (event) => {
        timingModal.classList.add('open');
        overlay.classList.add('open');
    })
})
timingModalClose.addEventListener('click', (event) => {
    timingModal.classList.remove('open');
    overlay.classList.remove('open');
})
overlay.addEventListener('click', (event) => {
    timingModal.classList.remove('open');
    overlay.classList.remove('open');
})
