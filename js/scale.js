'use strict';

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

