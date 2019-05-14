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

// создаю массив с элементами
var cardsData = [];

// заполняю данными элементы и добавляю в массив
var getData = function(quantity) {
  for (var i = 1; i < quantity + 1; i++) {
    var data = {
      url: 'photos/' + i + '.jpg',
      likes: getRandomInt(MIN_LIKES, MAX_LIKES),
      comments: USERS_COMMENTS[getRandomInt(0, 5)],
      description: DESCRIPTION_FOTO[getRandomInt(0, 5)]
    };

    cardsData.push(data);
  }
};

getData(25);

var postListElement = document.querySelector('.pictures');
var fragment = document.createDocumentFragment();
var postTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

console.log(postTemplate)

var createPost = function(post) {

  for (var i = 0; i < post; i++) {
    var postElement = postTemplate.cloneNode(true);

    postElement.querySelector('.picture__img').src = cardsData[i].url;
    postElement.querySelector('.picture__likes').textContent = cardsData[i].likes;
    postElement.querySelector('.picture__comments').textContent = cardsData[i].comments;;

    fragment.appendChild(postElement);
  }

  postListElement.appendChild(fragment);
}

createPost(25)
console.log(createPost(25));


var bigPost = document.querySelector('.big-picture');
//bigPost.classList.remove('hidden');  приберегли до поры, до времени

//создаю комментарий

var ListComment = document.querySelector('.social__comments');
var listItem = document.querySelector('.social__comment');
console.log(listItem);


var createPost = function() {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < 3; i++) {
    var listElement = listItem.cloneNode(true);

    listElement.querySelector('.social__picture').src = 'img/avatar-' + getRandomInt(1, 6) + '.svg';
    listElement.querySelector('.social__text').textContent = USERS_COMMENTS[getRandomInt(0, 5)];

    fragment.appendChild(listElement);
  }

  ListComment.appendChild(fragment);
}

console.log(createPost());

/*
var ListComment = document.querySelector('.social__comments');

var makeElement = function(tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

var createCard = function() {
  var listItem = makeElement('li', 'social__comment');

  var imgItem = makeElement('img', 'social__picture');
  picture.src = 'img/avatar-getRandomInt(0, 6).svg';
  picture.alt = "Аватар комментатора фотографии";
  picture.width = "35";
  picture.width = "35";
  listItem.appendChild(imgItem);

  var socialText = makeElement('p', 'social__text', USERS_COMMENTS[getRandomInt(0, 6)]);
  listItem.appendChild(socialText);

  return listItem
};

var R = function(Num) {
  for (var i = 0; i < Num; i++) {
    createCard();
    ListComment.appendChild(listItem);
  }
}
*/


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

var effectsRadio = document.querySelectorAll('.effects__preview');
var currentFilter;

console.log(effectsRadio);

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

console.log(document.querySelector('clicked'));

for (var i = 0; i < addEffectsRadio.length; i++) {
  console.log('запускаю функцию добавления эффекта2');
  onEffectsRadio(effectItems[i], addEffectsRadio[i]);
}


/*
//ползунок
var effectLevelPin = document.querySelector('.grayScale');

function getCoords(elem) {
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };

}
var CoordPin = coords(effectLevelPin);
console.log(CoordPin);


var OnEffectLevelPin = function() {
  effectLevelPin.addEventListener('mousedown', function() {
    var newCoordPin = effectLevelPin.coords(effectLevelPin);
    console.log(newCoordPin);
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    }
  }
  )
};
*/

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
    if (offset > maxWidth) {
      offset = maxWidth;
    }
    if (offset < 0) {
      offset = 0;
    }
    effectLevelHandle.style.left = offset + 'px'; //изменяес свойство селектора
    effectLevelDepth.style.width = offset + 'px'; //изменяес свойство селектора


    // procentnoje sootnozhenije polozhenija polzunka
    var calculatingEffectValue = function() {
      var percentage = (offset * 100) / maxWidth;
      var newLevelValue = Math.round(percentage);
      return newLevelValue;
    };

    var num = calculatingEffectValue();
    setCurrentFilterValue(num);
    console.log(num)
  };

  var onMouseUp = function() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});


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

var setCurrentFilterValue = function(num) {
  currentFilter = effectList.querySelector('input[type=radio]:checked');

  switch (currentFilter.value) {
    case filterChrome.value:
      mainImage.style.filter = 'grayscale(' + num / COEF_CHROME + ')';
      break;
    case filterSepia.value:
      mainImage.style.filter = 'sepia(' + num / COEF_SEPIA + ')';
      break;
    case filterMarvin.value:
      mainImage.style.filter = 'invert(' + num + COEF_MARVIN + ')';
      break;
    case filterPhobos.value:
      mainImage.style.filter = 'blur(' + num / COEF_PHOBOS + 'px' + ')';
      break;
    case filterHeat.value:
      var mathHeatSumm = num / COEF_HEAT;
      mathHeatSumm = mathHeatSumm < 1 ? 1 : mathHeatSumm;
      mainImage.style.filter = 'brightness(' + mathHeatSumm + ')';
      break;
    default:
      break;
  }
};

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
