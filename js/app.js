var swiper = new Swiper(".clientes__container--clientes", {
  speed: 2500,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  spaceBetween: 50,
  freeMode: true,
  autoplay: {
      delay: 1,
    },
    loop: true,
  });

  var swiper3 = new Swiper(".swiper2", {
    speed: 2500,
    slidesPerView: 'auto',
    spaceBetween: 50,
    freeMode: true,
    autoplay: {
        delay: 0,
        reverseDirection: true,
      },
      loop: true,
    });


  var swiper2 = new Swiper(".swiper__texto", {
    spaceBetween: 50,
    speed: 1000,
    autoplay: {
      delay: 3000,
    },
    allowTouchMove: false,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })