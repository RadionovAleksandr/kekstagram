'use strict';

(function() {
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

})();
