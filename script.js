
  // Initialise Swiper avec les options de base
const swiper = new Swiper('.mySwiper', {
    // Activer la pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Activer la navigation (flèches)
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Activer le défilement infini
    loop: true,
  });
  