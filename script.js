'use strict';

const kanjiArray = [
  'kanji/hi.png',
  'kanji/ki.png',
  'kanji/tsuki.png',
  'kanji/yama.png',
  'kanji/kawa.png',
  'kanji/ta.png',
  'kanji/hito.png',
  'kanji/kuchi.png',
  'kanji/kuruma.svg',
  'kanji/mon.png',
  'kanji/ka.png',
  'kanji/mizu.png',
  'kanji/kane.png',
  'kanji/tsuchi.png',
  'kanji/ko.png',
  'kanji/onna.png',
  'kanji/gaku.png',
  'kanji/ikiru.png',
  'kanji/saki.png',
  'kanji/watashi.png',
];
let kanjiString = kanjiArray.join();
const kanjiPicture = document.getElementById('kanji_picture');
const kanjiInput = document.getElementById('input');
const enter = document.getElementById('enterButton');
const changePlaceHolder = document.getElementsByName('guess');

let choosenKanji;
let userInput;
let stringToCheckAgainst;
let randomIndex;

kanjiInput.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('randomBtn').click();
  }
});

var ar = [];
var sp = kanjiString.split('/');
for (var i = 0; i < sp.length; i++) {
  var sub = sp[i].split('.');
  for (var j = 0; j < sub.length; j++) {
    ar.push(sub[j]);
  }
}

const firstArray = ar.filter(e => e !== 'png,kanji');
const secondArray = firstArray.filter(e => e !== 'kanji');
const thirdArray = secondArray.filter(e => e !== 'svg,kanji');
const finalArray = thirdArray.filter(e => e !== 'png');

function getRandomKanji() {
  randomIndex = Math.floor(Math.random() * kanjiArray.length);
  var selectedKanji = kanjiArray[randomIndex];
  kanjiPicture.src = selectedKanji;
  choosenKanji = selectedKanji;
}

function checkUserInput() {
  userInput = document.getElementById('input').value;
  stringToCheckAgainst = finalArray[randomIndex].split(',');
  if (userInput == stringToCheckAgainst[0]) {
    getRandomKanji();
    kanjiInput.value = '';
    changePlaceHolder[0].placeholder = '';
  } else {
    kanjiInput.value = '';
    changePlaceHolder[0].placeholder = 'Guess Again';
  }
}

getRandomKanji();
