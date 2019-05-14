'use strict';

(function() {
  //Переменные и функции для открытия и закрытия блоков

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  //функция с обработчиком событий
  var removeHiddenClick = function(elementUserСhoice, elementAction) {
    elementUserСhoice.addEventListener('click', function() {
      elementAction.classList.remove('hidden');
      document.addEventListener('keydown', function(evt) {
        if (evt.keyCode === ESC_KEYCODE) {
          elementAction.classList.add('hidden');
        }
      })
    })
  };

//функция с обработчиком событий
var removeHiddenKeydown = function(elementUserСhoice, elementAction) {
  elementUserСhoice.addEventListener('keydown', function(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      elementAction.classList.remove('hidden');
    }
    document.addEventListener('keydown', function(evt) {
      if (evt.keyCode === ESC_KEYCODE) {
        elementAction.classList.add('hidden');
      }
    })
  })
};

//функция с обработчиком событий
var addHiddenClick = function(elementUserСhoice, elementAction) {
  elementUserСhoice.addEventListener('click', function() {
    elementAction.classList.add('hidden');
  })
};

//функция с обработчиком событий
var addHiddenKeydown = function(elementUserСhoice, elementAction) {
  elementUserСhoice.addEventListener('keydown', function(evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      elementAction.classList.add('hidden');
    }
  })
};

var uploadFile = document.querySelector('.img-upload__label');
var imgUploadOverlay = document.querySelector('.img-upload__overlay');
var uploadCancel = document.querySelector('#upload-cancel');

removeHiddenClick(uploadFile, imgUploadOverlay);
removeHiddenKeydown(uploadFile, imgUploadOverlay);

addHiddenClick(uploadCancel, imgUploadOverlay);
addHiddenKeydown(uploadCancel, imgUploadOverlay);

//обработчик событий пин слайдера

var getNone = function() {
  slider.classList.add('hidden');
};

var addEffectsRadio = ['effects__preview--none', 'effects__preview--chrome', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat'];
var imgUploadPreview = document.querySelector('.img-upload__preview');
var effectItems = document.querySelectorAll('.effects__radio');
var slider = document.querySelector('.effect-level');
var currentFilter;


var onEffectsRadio = function(effect, addEffects) {
  effect.addEventListener('click', function() {
    if (currentFilter) {
      imgUploadPreview.classList.remove(currentFilter)
      effect.classList.remove('clicked')
    }
    imgUploadPreview.classList.add(addEffects);
    effect.classList.add('clicked');
    currentFilter = addEffects;
    if (addEffects === 'effects__preview--none') {
      console.log('функция удаления ползунка');
      getNone();
    }
  })
};

for (var i = 0; i < addEffectsRadio.length; i++) {
  console.log('запускаю функцию добавления эффекта2');
  onEffectsRadio(effectItems[i], addEffectsRadio[i]);
}
})();

(function() {

  var resizeControlMinus = document.querySelector('.scale__control--smaller');
  var resizeControlPlus = document.querySelector('.scale__control--bigger');
  var imgUploadPreview = document.querySelector('.img-upload__preview');
  var curentValue = 1;
  var resizeControlValue = document.querySelector('.scale__control--value');
  var step = 0.25;
  imgUploadPreview.style.transform = 'scale(1)';
  resizeControlValue.value = curentValue * 100 + '%';

  resizeControlMinus.addEventListener('click', function() {
    console.log('ловлю клик');
    var scale = curentValue - step;
    if (scale - step < 0.25) {
      scale = 0.25;
    }
    curentValue = scale;
    imgUploadPreview.style.transform = 'scale(' + scale + ')';
    console.log(scale);
    resizeControlValue.value = scale * 100 + '%';
  })

  resizeControlPlus.addEventListener('click', function() {
    console.log('ловлю клик');
    var scale = curentValue + step;
    if (scale + step > 1) {
      scale = 1;
    }
    curentValue = scale;
    imgUploadPreview.style.transform = 'scale(' + scale + ')';
    console.log(scale);
    resizeControlValue.value = scale * 100 + '%';
  })
})();
