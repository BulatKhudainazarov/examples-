<section class="contacts">
  <!-- <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Abf0f40099650f0644c77c06f0a61615abcbd4a1f6685c7a007d3a24911c0eb7e&amp;width=100%25&amp;height=550&amp;lang=ru_RU&amp;scroll=false"></script> -->
  <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26054.261974584748!2d55.970083267379366!3d54.74668145727736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43d939f2f1bd4371%3A0x33be391ed5fe1488!2z0YPQuy4g0L_RgC3Rgi4g0J7QutGC0Y_QsdGA0Y8sIDQ2LCDQo9GE0LAsINCg0LXRgdC_LiDQkdCw0YjQutC-0YDRgtC-0YHRgtCw0L0sINCg0L7RgdGB0LjRjywgNDUwMDAw!5e0!3m2!1sru!2sfi!4v1578831656233!5m2!1sru!2sfi" width="100%" height="650" frameborder="0" style="border:0;" allowfullscreen=""></iframe> -->

  <div id="map" style="width: 100%; height: 550px"></div>

  <script>
      ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
              center: [54.752656, 56.002053],
              zoom: 17
          }, {
              searchControlProvider: 'yandex#search'
          }),

          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),

          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'Собственный значок метки',
              balloonContent: 'Это красивая метка'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: 'assets/i/map/maps.png',
              // Размеры метки.
              iconImageSize: [64, 64],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-32, -64]
          }),

          myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
              hintContent: 'Собственный значок метки с контентом',
              balloonContent: 'А эта — новогодняя',
              iconContent: '12'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#imageWithContent',
              // Своё изображение иконки метки.
              iconImageHref: 'images/ball.png',
              // Размеры метки.
              iconImageSize: [48, 48],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-24, -24],
              // Смещение слоя с содержимым относительно слоя с картинкой.
              iconContentOffset: [15, 15],
              // Макет содержимого.
              iconContentLayout: MyIconContentLayout
          });

      myMap.geoObjects
          .add(myPlacemark)
          .add(myPlacemarkWithContent)
          .behaviors.disable('scrollZoom');
  });
  </script>

  <div class="contacts-block">
    <div class="contacts-block__address contacts-block__text">
      <span class="contacts-block__title">Адрес офиса</span>
        г. Уфа, Проспект октября, 46
      <span class="contacts-block__title">Адрес склада</span>
        г. Уфа, ул. Майкопская, 65/2
    </div>
    <!-- /.contact-block__address -->
    <div class="contacts-phone contacts-block__text">
      <span class="contacts-block__title">Тел. отдела продаж:</span>
      8 (347) 271-54-28 <br>
      8 (937) 363-30-00
    </div>
    <!-- /.contact-block__phone -->
    <div class="contacts-block__cta contacts-block__text">
      <button onclick="ym(56997949, 'reachGoal', 'top_btn'); return true;" class="button">Заказать звонок</button>
    </div>
    <div class="contacts-block__mail contacts-block__text"><span class="contacts-block__title">E-mail</span>
      urals.karton@gmail.com
    </div>
  </div>
  <!-- /.contacts-block -->
</section>

<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

<script type="text/javascript" src="assets/slick/slick.min.js"></script>

<script src="assets/js/app.js?v=1.0.0"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous" ></script>

</body>
</html>

<?php include 'footer.php' ?>