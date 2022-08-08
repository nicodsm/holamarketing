var swiper = new Swiper(".clientes__container--clientes", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      pauseOnMouseEnter: true,
    },
    loop: true,
  });

  document.querySelector('.swiper').addEventListener('mouseleave', ()=>{

    swiper.autoplay.start();
  })