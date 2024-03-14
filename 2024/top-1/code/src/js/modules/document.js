document.documentElement.classList.add("loaded"); // когда страница загрузилась

window.addEventListener("DOMContentLoaded", windowLoad); // для анимации для первых экранов, чтобы ничего не дергалось

function windowLoad() {}; // для анимации для первых экранов, чтобы ничего не дергалось


// Открытие и закрытие бургера

const popup = document.querySelectorAll(".popup");

const eventPopup = document.querySelectorAll(".event-popup");

document.addEventListener("click", function (e) {

  const elementInteractive = e.target;

  if (elementInteractive.closest(".popup__exit")) {
    if (popup) {
      popup.forEach(function (e) {
        e.classList.remove("active");
      })
    }
  }

  if (elementInteractive.closest(".popup__close")) {
    if (popup) {
      popup.forEach(function (e) {
        e.classList.remove("active");
      })
    }
  }

  if (elementInteractive.closest(".event-popup__exit")) {
    if (eventPopup) {
      eventPopup.forEach(function (e) {
        e.classList.remove("active");
      })
    }
  }

  if (elementInteractive.closest(".event-popup__close")) {
    if (eventPopup) {
      eventPopup.forEach(function (e) {
        e.classList.remove("active");
      })
    }
  }

  if (elementInteractive.closest(".lang")) {
    elementInteractive.closest(".lang").classList.add("active");
  } else {
    document.querySelector('.lang').classList.remove("active");
  }
})

document.addEventListener("mouseover", function (e) {

  const elementInteractive = e.target;

  if (elementInteractive.closest(".lang")) {
    elementInteractive.closest(".lang").classList.add("active");
  } else {
    document.querySelector('.lang').classList.remove("active");
  }
})

document.addEventListener("focusin", function (e) {

  const elementInteractive = e.target;

  if (elementInteractive.closest(".lang__active")) {
    elementInteractive.closest(".lang").classList.add("active");
  }
})

// Плагин загрузки изображений и видео

const rdUpload = document.querySelectorAll(".rd-upload");

const body = document.body;

if (rdUpload) {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  }

  const callback = function (entries, observer) {

    entries.forEach(entry => {
      const elementEntry = entry.target;
      if (entry.isIntersecting) {

        if (!elementEntry.classList.contains("rd-load")) {
          elementEntry.classList.add("rd-load");

          let rdUploadBackgroundImage = elementEntry.querySelectorAll(".rd-background");

          let rdUploadImage = elementEntry.querySelectorAll("img");

          let rdUploadVideo = elementEntry.querySelectorAll("video");

          let rdUploadPicture = elementEntry.querySelectorAll("picture");

          if (elementEntry.classList.contains("rd-background")) {

            let elementEntryBackgroundImageDataImage = elementEntry.dataset.rdImage;

            elementEntry.style.backgroundImage = `url(${elementEntryBackgroundImageDataImage})`;
          }

          if (rdUploadBackgroundImage) {
            rdUploadBackgroundImage.forEach(function (rdUploadBackgroundImage) {

              let rdUploadBackgroundImageDataImage = rdUploadBackgroundImage.dataset.rdImage;

              rdUploadBackgroundImage.style.backgroundImage = `url(${rdUploadBackgroundImageDataImage})`;

            })
          }

          if (rdUploadImage) {
            rdUploadImage.forEach(function (rdUploadImage) {

              if (!rdUploadImage.closest("picture")) {
                let rdUploadImageDataImage = rdUploadImage.dataset.rdImage;

                rdUploadImage.setAttribute("src", `${rdUploadImageDataImage}`);
              }

            })
          }

          if (rdUploadPicture) {
            rdUploadPicture.forEach(function (rdUploadPicture) {

              let rdUploadPictureSource = rdUploadPicture.querySelectorAll("source");

              rdUploadPictureSource.forEach(function (rdUploadPictureSource) {

                let rdUploadPictureSourceImage = rdUploadPictureSource.dataset.rdImage;

                rdUploadPictureSource.setAttribute("srcset", `${rdUploadPictureSourceImage}`);

              })

            })
          }

          if (rdUploadVideo) {
            rdUploadVideo.forEach(function (rdUploadVideo) {

              let rdUploadVideoDataVideo = rdUploadVideo.dataset.rdVideo;
              let rdUploadVideoDataImage = rdUploadVideo.dataset.rdImage;

              rdUploadVideo.setAttribute("src", `${rdUploadVideoDataVideo}`);

              rdUploadVideo.setAttribute("poster", `${rdUploadVideoDataImage}`);

            })
          }
        }

      }

    })

  }

  const observer = new IntersectionObserver(callback, options);

  rdUpload.forEach(i => {
    observer.observe(i);
  })
}

// Перекидываем элементы в футере

const footerPartPayment = document.querySelector(".footer__part_payment");

const footerPayments = document.querySelector(".footer__payments");

if (footerPartPayment && footerPayments) {
  if (document.body.clientWidth < 992) {
    footerPartPayment.append(footerPayments);
  }
}

// Нумерование карточек и рейтинг

// Рейтинг в карточках

let numId1 = 1000;
let numId2 = 3000;
let numId3 = 5000;
let numId4 = 7000;
let numId5 = 9000;

let popupNumId1 = 10000;
let popupNumId2 = 20000;
let popupNumId3 = 30000;
let popupNumId4 = 40000;
let popupNumId5 = 50000;

const heroItems = document.querySelectorAll(".hero__item");

if (heroItems) {
  heroItems.forEach(function (e, i) {

    if ((i + 1) == 1) {
      e.classList.add("hero__item_top-1");
    }

    const index = i;

    const wrapperHeroSliderButtons = e.querySelectorAll(".wrapper-hero-slider__button");

    if (wrapperHeroSliderButtons) {
      wrapperHeroSliderButtons.forEach(function (e) {
        if (e.classList.contains("prev")) {
          e.classList.add(`hero-slider-prev-${index}`)
        }
        if (e.classList.contains("next")) {
          e.classList.add(`hero-slider-next-${index}`)
        }
      })
    }

    // Высчитываем маску у звездочек, маска должна быть разная 
    e.querySelector(".star-1").id = `mask0_43_${numId1 + i}`;
    e.querySelector(".star-1-mask").setAttribute("mask", `url(#mask0_43_${numId1 + i})`);

    e.querySelector(".star-2").id = `mask0_43_${numId2 + i}`;
    e.querySelector(".star-2-mask").setAttribute("mask", `url(#mask0_43_${numId2 + i})`);

    e.querySelector(".star-3").id = `mask0_43_${numId3 + i}`;
    e.querySelector(".star-3-mask").setAttribute("mask", `url(#mask0_43_${numId3 + i})`);

    e.querySelector(".star-4").id = `mask0_43_${numId4 + i}`;
    e.querySelector(".star-4-mask").setAttribute("mask", `url(#mask0_43_${numId4 + i})`);

    e.querySelector(".star-5").id = `mask0_43_${numId5 + i}`;
    e.querySelector(".star-5-mask").setAttribute("mask", `url(#mask0_43_${numId5 + i})`);

    let ratingMassive = Number(e.querySelector(".rating-num").innerHTML.trim());

    let rat = 10 - ratingMassive;

    let zalivka = 15 - (rat.toFixed(2) * 14 * 1);

    e.querySelector(".star-1").style.width = 15;
    e.querySelector(".star-rect-1").style.width = 15;
    e.querySelector(".star-2").style.width = 15;
    e.querySelector(".star-rect-2").style.width = 15;
    e.querySelector(".star-3").style.width = 15;
    e.querySelector(".star-rect-3").style.width = 15;
    e.querySelector(".star-4").style.width = 15;
    e.querySelector(".star-rect-4").style.width = 15;
    e.querySelector(".star-5").style.width = 15;
    e.querySelector(".star-rect-5").style.width = 15;

    e.querySelector(".star-5").style.width = zalivka;
    e.querySelector(".star-rect-5").style.width = zalivka;

    if (parseInt(e.querySelector(".star-5").style.width) <= 15 && zalivka >= 10) {
      e.querySelector(".star-5").style.width = zalivka + 0.2;
      e.querySelector(".star-rect-5").style.width = zalivka + 0.2;
    } else if (parseInt(e.querySelector(".star-5").style.width) <= 15 && zalivka >= 6) {
      e.querySelector(".star-5").style.width = zalivka + 1.8;
      e.querySelector(".star-rect-5").style.width = zalivka + 1.8;
    } else if (parseInt(e.querySelector(".star-5").style.width) <= 15 && zalivka >= 3) {
      e.querySelector(".star-5").style.width = zalivka + 2.8;
      e.querySelector(".star-rect-5").style.width = zalivka + 2.8;
    } else if (parseInt(e.querySelector(".star-5").style.width) <= 15 && zalivka >= 0) {
      e.querySelector(".star-5").style.width = zalivka + 4;
      e.querySelector(".star-rect-5").style.width = zalivka + 4;
    } else if (parseInt(e.querySelector(".star-5").style.width) <= 15 && zalivka < 0 && zalivka >= -10) {
      e.querySelector(".star-5").style.width = 0;
      e.querySelector(".star-rect-5").style.width = 0;
      e.querySelector(".star-4").style.width = 15 - (Math.abs(zalivka) - 0.5);
      e.querySelector(".star-rect-4").style.width = 15 - (Math.abs(zalivka) - 0.5);
    } else if (parseInt(e.querySelector(".star-5").style.width) <= 15 && zalivka < 0 && zalivka >= -6) {
      e.querySelector(".star-5").style.width = 0;
      e.querySelector(".star-rect-5").style.width = 0;
      e.querySelector(".star-4").style.width = 15 - (Math.abs(zalivka) - 0.8);
      e.querySelector(".star-rect-4").style.width = 15 - (Math.abs(zalivka) - 0.8);
    } else if (parseInt(e.querySelector(".star-5").style.width) <= 15 && zalivka < 0 && zalivka >= -15) {
      e.querySelector(".star-5").style.width = 0;
      e.querySelector(".star-rect-5").style.width = 0;
      e.querySelector(".star-4").style.width = 15 - (Math.abs(zalivka) - 1.2);
      e.querySelector(".star-rect-4").style.width = 15 - (Math.abs(zalivka) - 1.2);
    } else if (parseInt(e.querySelector(".star-4").style.width) <= 15 && zalivka < 0 && zalivka >= -60) {
      e.querySelector(".star-5").style.width = 0;
      e.querySelector(".star-rect-5").style.width = 0;
      e.querySelector(".star-4").style.width = 0;
      e.querySelector(".star-rect-4").style.width = 0;
      if (zalivka <= -15) {
        if (zalivka >= -30) {
          e.querySelector(".star-3").style.width = 30 - Math.abs(zalivka);
          e.querySelector(".star-rect-3").style.width = 30 - Math.abs(zalivka);
        } else if (zalivka <= -30) {
          e.querySelector(".star-3").style.width = 0;
          e.querySelector(".star-rect-3").style.width = 0;
          e.querySelector(".star-2").style.width = 43 - Math.abs(zalivka);
          e.querySelector(".star-rect-2").style.width = 43 - Math.abs(zalivka);
          if (zalivka <= -43) {
            e.querySelector(".star-2").style.width = 0;
            e.querySelector(".star-rect-2").style.width = 0;
            e.querySelector(".star-1").style.width = 57 - Math.abs(zalivka);
            e.querySelector(".star-rect-1").style.width = 57 - Math.abs(zalivka);
            if (zalivka <= -57) {
              e.querySelector(".star-2").style.width = 0;
              e.querySelector(".star-rect-2").style.width = 0;
              e.querySelector(".star-1").style.width = 58 - Math.abs(zalivka);
              e.querySelector(".star-rect-1").style.width = 58 - Math.abs(zalivka);
            }
          }
        }
      }
    }

    e.querySelector(".hero__num").innerHTML = i + 1;

    if (document.body.clientWidth < 769) {
      e.querySelector(".hero__middle-bottom").append(e.querySelector(".hero__votes"));
    }

  })
}

// Рейтинг в попапе

if (popup) {
  popup.forEach(function (e, i) {

    // Высчитываем маску у звездочек, маска должна быть разная 
    e.querySelector(".star-1").id = `mask0_43_${popupNumId1 + i}`;
    e.querySelector(".star-1-mask").setAttribute("mask", `url(#mask0_43_${popupNumId1 + i})`);

    e.querySelector(".star-2").id = `mask0_43_${popupNumId2 + i}`;
    e.querySelector(".star-2-mask").setAttribute("mask", `url(#mask0_43_${popupNumId2 + i})`);

    e.querySelector(".star-3").id = `mask0_43_${popupNumId3 + i}`;
    e.querySelector(".star-3-mask").setAttribute("mask", `url(#mask0_43_${popupNumId3 + i})`);

    e.querySelector(".star-4").id = `mask0_43_${popupNumId4 + i}`;
    e.querySelector(".star-4-mask").setAttribute("mask", `url(#mask0_43_${popupNumId4 + i})`);

    e.querySelector(".star-5").id = `mask0_43_${popupNumId5 + i}`;
    e.querySelector(".star-5-mask").setAttribute("mask", `url(#mask0_43_${popupNumId5 + i})`);

    let ratingMassive = Number(e.querySelector(".rating-num").innerHTML.trim());

    let rat = 10 - ratingMassive;

    let zalivka = 15 - (rat.toFixed(2) * 14 * 1);

    e.querySelector(".star-1").style.width = 15;
    e.querySelector(".star-rect-1").style.width = 15;
    e.querySelector(".star-2").style.width = 15;
    e.querySelector(".star-rect-2").style.width = 15;
    e.querySelector(".star-3").style.width = 15;
    e.querySelector(".star-rect-3").style.width = 15;
    e.querySelector(".star-4").style.width = 15;
    e.querySelector(".star-rect-4").style.width = 15;
    e.querySelector(".star-5").style.width = 15;
    e.querySelector(".star-rect-5").style.width = 15;

    e.querySelector(".star-5").style.width = zalivka;
    e.querySelector(".star-rect-5").style.width = zalivka;

    if (parseInt(e.querySelector(".star-5").style.width) <= 15 && zalivka >= 10) {
      e.querySelector(".star-5").style.width = zalivka + 0.2;
      e.querySelector(".star-rect-5").style.width = zalivka + 0.2;
    } else if (parseInt(e.querySelector(".star-5").style.width) <= 15 && zalivka >= 6) {
      e.querySelector(".star-5").style.width = zalivka + 1.8;
      e.querySelector(".star-rect-5").style.width = zalivka + 1.8;
    } else if (parseInt(e.querySelector(".star-5").style.width) <= 15 && zalivka >= 3) {
      e.querySelector(".star-5").style.width = zalivka + 2.8;
      e.querySelector(".star-rect-5").style.width = zalivka + 2.8;
    } else if (parseInt(e.querySelector(".star-5").style.width) <= 15 && zalivka >= 0) {
      e.querySelector(".star-5").style.width = zalivka + 4;
      e.querySelector(".star-rect-5").style.width = zalivka + 4;
    } else if (parseInt(e.querySelector(".star-5").style.width) <= 15 && zalivka < 0 && zalivka >= -10) {
      e.querySelector(".star-5").style.width = 0;
      e.querySelector(".star-rect-5").style.width = 0;
      e.querySelector(".star-4").style.width = 15 - (Math.abs(zalivka) - 0.5);
      e.querySelector(".star-rect-4").style.width = 15 - (Math.abs(zalivka) - 0.5);
    } else if (parseInt(e.querySelector(".star-5").style.width) <= 15 && zalivka < 0 && zalivka >= -6) {
      e.querySelector(".star-5").style.width = 0;
      e.querySelector(".star-rect-5").style.width = 0;
      e.querySelector(".star-4").style.width = 15 - (Math.abs(zalivka) - 0.8);
      e.querySelector(".star-rect-4").style.width = 15 - (Math.abs(zalivka) - 0.8);
    } else if (parseInt(e.querySelector(".star-5").style.width) <= 15 && zalivka < 0 && zalivka >= -15) {
      e.querySelector(".star-5").style.width = 0;
      e.querySelector(".star-rect-5").style.width = 0;
      e.querySelector(".star-4").style.width = 15 - (Math.abs(zalivka) - 1.2);
      e.querySelector(".star-rect-4").style.width = 15 - (Math.abs(zalivka) - 1.2);
    } else if (parseInt(e.querySelector(".star-4").style.width) <= 15 && zalivka < 0 && zalivka >= -60) {
      e.querySelector(".star-5").style.width = 0;
      e.querySelector(".star-rect-5").style.width = 0;
      e.querySelector(".star-4").style.width = 0;
      e.querySelector(".star-rect-4").style.width = 0;
      if (zalivka <= -15) {
        if (zalivka >= -30) {
          e.querySelector(".star-3").style.width = 30 - Math.abs(zalivka);
          e.querySelector(".star-rect-3").style.width = 30 - Math.abs(zalivka);
        } else if (zalivka <= -30) {
          e.querySelector(".star-3").style.width = 0;
          e.querySelector(".star-rect-3").style.width = 0;
          e.querySelector(".star-2").style.width = 43 - Math.abs(zalivka);
          e.querySelector(".star-rect-2").style.width = 43 - Math.abs(zalivka);
          if (zalivka <= -43) {
            e.querySelector(".star-2").style.width = 0;
            e.querySelector(".star-rect-2").style.width = 0;
            e.querySelector(".star-1").style.width = 57 - Math.abs(zalivka);
            e.querySelector(".star-rect-1").style.width = 57 - Math.abs(zalivka);
            if (zalivka <= -57) {
              e.querySelector(".star-2").style.width = 0;
              e.querySelector(".star-rect-2").style.width = 0;
              e.querySelector(".star-1").style.width = 58 - Math.abs(zalivka);
              e.querySelector(".star-rect-1").style.width = 58 - Math.abs(zalivka);
            }
          }
        }
      }
    }
  })
}

// Появление попапа и удаление заднего фона 

if (document.body.clientWidth < 992) {
  if (eventPopup) {
    eventPopup.forEach(function (e) {
      e.querySelector(".event-popup__content").removeAttribute("data-rd-image");
    })
  }
}

let popupTimer, timeOut = 4000;

function displayPopup() {
  if (popup) {
    popup.forEach(function (e) {
      e.classList.add("active")
    })
  }

  if (eventPopup) {
    eventPopup.forEach(function (e) {
      e.classList.add("active")
    })
  }
}

popupTimer = setTimeout(displayPopup, timeOut);

window.addEventListener("scroll", function (e) {
  clearTimeout(popupTimer);
  popupTimer = setTimeout(displayPopup, timeOut);
})

// Слайдер в карточке

const heroSlider = document.querySelectorAll(".hero-slider");

function sliderInit(classer, index) {
  const heroSwiper = new Swiper(classer, {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: "auto",
    spaceBetween: 4,
    direction: 'horizontal',
    navigation: {
      nextEl: `.hero-slider-next-${index}`,
      prevEl: `.hero-slider-prev-${index}`,
    },
  });
}

if (heroSlider) {
  heroSlider.forEach(function (e, i) {
    sliderInit(e, i);
  })
}

// Отключаем прелоад

const preload = document.querySelector(".preload");

window.addEventListener("load", windowLoad);

function windowLoad() {
  if (preload) {
    preload.classList.remove("active");
  }
};
  
// Слайдер куб

const headerSlider = document.querySelector(".header-slider");

if (headerSlider) {
  const headerSwiper = new Swiper(headerSlider, {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 0,
    direction: 'horizontal',
    effect: "cube",
    speed: 500,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      waitForTransition: false,
    },
  });
}

// Светлый / темный вариант

// const pageDark = document.querySelector(".page.dark");

const pageLight = document.querySelector(".page.light");

const interactive = document.querySelectorAll(".interactive");

const interactiveBackground = document.querySelectorAll(".interactive-background");

if (pageLight) {
  if (interactiveBackground) {
    interactiveBackground.forEach(function (e) {

      const lightTheme = e.dataset.light;
      e.style.backgroundImage = `url(${lightTheme})`;

    })
  }

  if (interactive) {
    interactive.forEach(function (e) {

      const lightTheme = e.dataset.light;
      let img = e.querySelectorAll("img");

      if (img) {
        img.forEach(function (im) {
          im.dataset.rdImage = lightTheme;
        })
      }

    })
  }

} else {
  if (interactiveBackground) {
    interactiveBackground.forEach(function (e) {

      const darkTheme = e.dataset.dark;
      e.style.backgroundImage = `url(${darkTheme})`;

    })
  }

  if (interactive) {
    interactive.forEach(function (e) {

      const darkTheme = e.dataset.dark;
      let img = e.querySelectorAll("img");

      if (img) {
        img.forEach(function (im) {
          im.dataset.rdImage = darkTheme;
        })
      }

    })
  }
}