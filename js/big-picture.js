'use strict';

(function() {
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
})();
