// Аккордеон 1

const spollersArray = document.querySelectorAll('[data-spollers');

if (spollersArray.length > 0) {
  // Получение обычных спойлеров
  const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
    return !item.dataset.spollers.split(",")[0];
  });
  // Инициализация обычных спойлеров
  if (spollersRegular.length > 0) {
    initSpollers(spollersRegular);
  };

  // получение спойлеров с медиа запросами

  const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
    return item.dataset.spollers.split(",")[0];
  });

  // Инициализация спойлеров с медиа запросами

  if (spollersMedia.length > 0) {
    const breakpointsArray = [];
    spollersMedia.forEach(item => {
      const params = item.dataset.spollers;
      const breakpoint = {};
      const paramsArray = params.split(",");
      breakpoint.value = paramsArray[0];
      breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
      breakpoint.item = item;
      breakpointsArray.push(breakpoint);
    });

    // Получаем уникальные брейкпоинты 
    let mediaQueries = breakpointsArray.map(function (item) {
      return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
    });
    mediaQueries = mediaQueries.filter(function (item, index, self) {
      return self.indexOf(item) === index;
    });

    // Работает с каждым брейкпоинтом
    mediaQueries.forEach(breakpoint => {
      const paramsArray = breakpoint.split(",");
      const mediaBreakpoint = paramsArray[1];
      const mediaType = paramsArray[2];
      const matchMedia = window.matchMedia(paramsArray[0]);

      // Объекты с нужными условиями
      const spollersArray = breakpointsArray.filter(function (item) {
        if (item.value === mediaBreakpoint && item.type === mediaType) {
          return true;
        }
      });
      // Событие
      matchMedia.addListener(function () {
        initSpollers(spollersArray, matchMedia);
      });
      initSpollers(spollersArray, matchMedia);
    });
  }
  // Инициализация
  function initSpollers(spollersArray, matchMedia = false) {
    spollersArray.forEach(spollersBlock => {
      spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
      if (matchMedia.matches || !matchMedia) {
        spollersBlock.classList.add("_init")
        initSpollerBody(spollersBlock);
        spollersBlock.addEventListener("click", setSpollerAction);
      } else {
        spollersBlock.classList.remove("_init");
        initSpollerBody(spollersBlock, false);
        spollersBlock.removeEventListener("click", setSpollerAction);
      }
    });
  }
  // Работа с контентом
  function initSpollerBody(spollersBlock, hideSpollerBody = true) {
    const spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
    if (spollerTitles.length > 0) {
      spollerTitles.forEach(spollerTitle => {
        if (hideSpollerBody) {
          spollerTitle.removeAttribute('tabindex');
          if (!spollerTitle.classList.contains("_active")) {
            spollerTitle.nextElementSibling.hidden = true;
          }
        } else {
          spollerTitle.setAttribute("tabindex", "-1");
          spollerTitle.nextElementSibling.hidden = false;
        }
      });
    }
  }

  function setSpollerAction(e) {
    const el = e.target;
    if (el.hasAttribute("data-spoller") || el.closest("[data-spoller]")) {
      const spollerTitle = el.hasAttribute("data-spoller") ? el : el.closest("[data-spoller]");
      const spollersBlock = spollerTitle.closest("[data-spollers]");
      const oneSpoller = spollersBlock.hasAttribute("data-one-spoller") ? true : false;
      if (!spollersBlock.querySelectorAll("._slide").length) {
        if (oneSpoller && !spollerTitle.classList.contains("_active")) {
          hideSpollersBody(spollersBlock);
        }
        spollerTitle.classList.toggle("_active");
        _slideToggle(spollerTitle.nextElementSibling, 500);
      }
      e.preventDefault();
    }
  }

  function hideSpollersBody(spollersBlock) {
    const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._active");
    if (spollerActiveTitle) {
      spollerActiveTitle.classList.remove("_active");
      _slideUp(spollerActiveTitle.nextElementSibling, 500)
    }
  }

}

let _slideUp = (target, duration = 500) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = target.offsetHeight + "px";
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.hidden = true;
      target.style.removeProperty("height");
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
    }, duration);
  }
}

let _slideDown = (target, duration = 500) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    if (target.hidden) {
      target.hidden = false;
    }
    let height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(() => {
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
    }, duration);
  }
}

let _slideToggle = (target, duration = 500) => {
  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
}




/* 
Для родителя спойлеров пишем атрибут data-spollers
Для заголовков спойлеров пишем атрибут data-spoller
Если нужно включать или выключать работу спойлеров на разных размерах монитора то пишем параметры ширины и типа брейкпоинта
например data-spollers="992,max" спойлеры будут работать только на экранах меньше или равно 992px
data-spollers="992,min" спойлеры будут работать только на экранах больше или равно 992px


    <div data-spollers data-one-spoller class="block block_1">
      <div class="block__item">
        <button tabindex="-1" type="button" data-spoller class="block__title">Обычный спойлер 1</button>
        <div class="block__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quia? Eectetur adipisicing elit. Natus, quia?
        </div>
      </div>
      <div class="block__item">
        <button tabindex="-1" type="button" data-spoller class="block__title">Обычный спойлер 2</button>
        <div class="block__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quia? Eectetur adipisicing elit. Natus, quia?
        </div>
      </div>
      <div class="block__item">
        <button tabindex="-1" type="button" data-spoller class="block__title">Обычный спойлер 3</button>
        <div class="block__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quia? Eectetur adipisicing elit. Natus, quia?
        </div>
      </div>
    </div>


*/

// ------------------------------------------------------------------------------------------------------------------------------------------------

// Аккордеон 2

const accordionItems = document.querySelectorAll('.accordion__item')

if (accordionItems.length > 0) {
  accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.accordion__header')

    accordionHeader.addEventListener('click', () => {

      const openItem = document.querySelector('.accordion-open')

      toggleItem(item)

      if (openItem && openItem !== item) {
        toggleItem(openItem)
      }
    })
  })
}
const toggleItem = (item) => {
  const accordionContent = item.querySelector('.accordion__content')

  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
  }
}




/* 

                HTML  

<div class="accordion__list">

<div class="accordion__item">
    <div class="accordion__header">
        <h3 class="accordion__title">What's an accordion?</h3>
    </div>

    <div class="accordion__content">
        <p class="accordion__description">
            An accordion always contains the category title, an expanded and a collapsed state, 
            an icon indicating expansion, and the spacing between them.
        </p>
    </div>
</div>



<div class="accordion__item">
  <div class="accordion__header">
      <h3 class="accordion__title">What's an accordion?</h3>
  </div>

  <div class="accordion__content">
      <p class="accordion__description">
          An accordion always contains the category title, an expanded and a collapsed state, 
          an icon indicating expansion, and the spacing between them.
      </p>
  </div>
</div>


</div> 


               CSS

.accordion__list {
  display: grid;
  row-gap: .75rem;
  padding: 2rem 1rem;
  background-color: var(--container-color);
  border-radius: .5rem;
  box-shadow: 0 12px 32px rgba(51, 51, 51, 0.1);
}

.accordion__title {
  font-size: var(--small-font-size);
  color: var(--title-color);
  font-weight: 400;
  margin-top: .15rem;
  transition: .2s;
}

.accordion__header {
  display: flex;
  column-gap: .5rem;
  padding: 1.25rem 1.25rem 1.25rem 1rem;
  cursor: pointer;
  justify-content: space-between;
}

.accordion__description {
  padding: 0 1.25rem 1.25rem 3rem;
  font-size: var(--smaller-font-size);
}

.accordion__content {
  overflow: hidden;
  height: 0;
  transition: all .25s ease;
}
.accordion-open.accordion__icon {
    transform: rotate(45 deg);
  }

  .accordion-open.accordion__title {
    font-weight: 600;
  }

*/