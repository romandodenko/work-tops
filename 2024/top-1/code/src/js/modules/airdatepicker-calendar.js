// Календарь

new AirDatepicker('.calendar', {

   // inline:true, // Для того, чтобы календарь был постоянно видимый, нужно его проинициализировать не на текстовом поле(инпут), или передать параметр inline:true

  // view: 'months', // Для возможности выбора только месяца без конкретного числа, можно использовать комбинацию из опций view и minView - с помощью первой мы устанавливаем текущее представление календаря, а с помощью второй задаем минимально возможное представление.
  // minView: 'months',
  // dateFormat: 'MMMM yyyy',

  // isMobile: true, // У Air Datepicker есть режим, который позволяет открывать календарь как модальное окно - в этом режиме он появляется по центру экрана в немного увеличенных размерах для облегчения выбора даты.
  // autoClose: true, // Закрывает модальное окно при выборе даты, использовать вместе с isMobile

  // position: 'bottom center', // Позиционирование

  // range: true, // Позволяет выбирать две даты
  // multipleDatesSeparator: ' - ', // Знак который разделяет диапазон дат

  // timepicker: true, // Позволяет выбрать не только дату но и время

  // onRenderCell({ // Можно вставить эмоджи 
  //   date,
  //   cellType
  // }) {
  //   let dates = [1, 5, 7, 10, 15, 20, 25], // Даты где ставятся эмоджи
  //     emoji = ['💕', '😃', '🍙', '🍣', '🍻', '🎉', '🥁'], // Эмоджи 
  //     isDay = cellType === 'day',
  //     _date = date.getDate(),
  //     shouldChangeContent = isDay && dates.includes(_date),
  //     randomEmoji = emoji[Math.floor(Math.random() * emoji.length)];

  //   return {
  //     html: shouldChangeContent ? randomEmoji : undefined,
  //     classes: shouldChangeContent ? '-emoji-cell-' : undefined,
  //     attrs: {
  //       title: shouldChangeContent ? randomEmoji : ''
  //     }
  //   }
  // },

  // buttons: ['today', 'clear'] // Можно добавлять кнопки, это уже предустановленные кнопки. Можно добавлять и свои

  // locale: { // В данном календаре можео менять локализацию
  //   days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  //   daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  //   daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  //   months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  //   monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  //   today: 'Today',
  //   clear: 'Clear',
  //   dateFormat: 'MM/dd/yyyy',
  //   timeFormat: 'hh:mm aa',
  //   firstDay: 0
  // },

});


/* <input type="text" class="calendar" name="calendar" id="calendar"> */