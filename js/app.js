var swiper = new Swiper(".clientes__container--clientes", {
  speed: 1000,
  spaceBetween: 100,
  autoplay: {
      delay: 2500,
      pauseOnMouseEnter: true,
    },
    loop: true,
  });

  document.querySelector('.swiper').addEventListener('mouseleave', ()=>{

    swiper.autoplay.start();
  })