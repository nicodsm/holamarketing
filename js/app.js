var swiper = new Swiper(".clientes__container--clientes", {
  speed: 1000,
  spaceBetween: 50,
  autoplay: {
      delay: 2000,
      pauseOnMouseEnter: true,
    },
    loop: true,
  });

  document.querySelector('.clientes__container--clientes').addEventListener('mouseleave', ()=>{
    swiper.autoplay.start();
  })


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