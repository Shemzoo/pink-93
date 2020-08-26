var myMap;

ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [59.93863106417265,30.3230545],
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    });

    // Создаем геообъект с типом геометрии "Точка".
    myGeoObject = new ymaps.GeoObject({
      // Описание геометрии.
      geometry: {
          type: "Point",
          coordinates: [59.93863106417265,30.3230545]
      },
      // Свойства.
      properties: {
          // Контент метки.
          iconContent: 'HTML Academy',
          hintContent: ''
      }
  }, {
      // Опции.
      // Иконка метки будет растягиваться под размер ее содержимого.
      preset: 'islands#blackStretchyIcon',
      // Метку можно перемещать.
      draggable: true
  }),

myMap.geoObjects
  .add(myGeoObject)
}
