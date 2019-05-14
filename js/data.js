'use strict';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var MIN_LIKES = 15;
var MAX_LIKES = 200;


var USERS_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
var DESCRIPTION_FOTO = [
  'Тестим новую камеру!',
  'Затусили с друзьями на море',
  'Как же круто тут кормят',
  'Отдыхаем...',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
  'Вот это тачка!'
];

(function() {
// peremenyje slaidera
var effectLevelHandle = document.querySelector('.effect-level__pin');
var effectLevelLine = document.querySelector('.effect-level__line');
var effectLevelDepth = document.querySelector('.effect-level__depth');
var maxWidth = effectLevelLine.offsetWidth; //

// dvizhenije polzunka slaidera
effectLevelHandle.addEventListener('mousedown', function(evt) {
  // var maxWidth = effectLevelLine.offsetWidth;

  var startCoords = {
    x: evt.clientX,
  };

  console.log(evt);

  var onMouseMove = function(moveEvt) {
    var shift = { //хранится разница коардинат мишы за один промежуток времени
      x: startCoords.x - moveEvt.clientX,
    };

    startCoords = {
      x: moveEvt.clientX,
    };

    var offset = effectLevelHandle.offsetLeft - shift.x; //изменяем в событии координаты левого отступа
  //  if (offset > maxWidth) {
 //     offset = maxWidth;
  //  }
  //  if (offset < 0) {
 //     offset = 0;
  //  }
    console.log(offset);
    effectLevelHandle.style.left = offset + 'px'; //изменяес свойство селектора
    effectLevelDepth.style.width = offset + 'px'; //изменяес свойство селектора


    // procentnoje sootnozhenije polozhenija polzunka
    var calculatingEffectValue = function() {
      var percentage = (offset * 100) / maxWidth;
      var newLevelValue = Math.round(percentage);
      return newLevelValue;
    };

    var num = calculatingEffectValue();

    console.log(num)
  };

  var onMouseUp = function() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});
})();

var effectChrome = document.getElementById('effect-chrome');
var effectSepia = document.getElementById('effect-sepia');
var effecMarvin = document.getElementById('effect-marvin');
var effecPhobos = document.getElementById('effect-phobos');
var effectsRadio = document.getElementById('effects__radio');
var filterHeat = document.getElementById('effect-heat');
//var checkedRadio = document.querySelector('input[type=radio]');
var dataEffect = ['effectChrome', 'effectSepia', 'effecMarvin', 'effecPhobos'];
var clicked = document.querySelector('.clicked');


var mainImage = document.querySelector('.img-upload__preview > img');

var effectList = document.querySelector('.effects__list');

/*

if (effectChrome.checked) {
  mainImage.style.filter = 'grayscale(' + num / 100 + ')';
}
if (effectSepia.class = "clicked") {
  mainImage.style.filter = 'sepia(' + num / 100 + ')';
}

if (effecMarvin.checked) {
  mainImage.style.filter = 'invert(' + num + '%)';
}

if (effecPhobos.checked) {
  mainImage.style.filter = 'phobos(' + num / 100 * 3 + 'px)';
}

 if(clicked.getAttribute(value) = 'heat') {
   mainImage.style.filter.brightness(num/100*3)
 }


*/
