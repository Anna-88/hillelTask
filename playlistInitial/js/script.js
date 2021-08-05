/* Initial song list */
let songs = [{
  name: 'Jingle Bells',
  isLiked: false,
}, {
  name: 'We Wish You a Merry Christmas',
  isLiked: true,
}];

window.addEventListener('load', function() {
	 songs.forEach((song) => listSong(song));
   

});

let listSongs = document.body.querySelector('.songs');



function listSong(song) {
  let li = document.createElement('li');
  li.innerHTML = song.name;
  listSongs.prepend(li);
  creatButton('Dislike','delete',li);
  creatButton('Like','like', li);
  let inputLike = document.getElementsByClassName('button like');
  console.log(inputLike);
  inputLike.onclick = function(event){
    if(song.isLiked === true){
      event.target.style.backgroundImage = "./images/img.svg";
    }
  }
}

function creatButton (text,cl,parent) {
  let input = document.createElement('input');
  input.value = text;
  input.className = 'button '  + cl;
  parent.append(input);
};

let search = document.querySelector('.input-box');
let add = document.querySelector('.button-add');

add.addEventListener("click", function () {
  let song = search.value;
  let linew = document.createElement('li');
  linew.innerHTML = song;
  listSongs.append(linew);
  creatButton('Dislike','delete',linew);
  creatButton('Like','like', linew);
});









  







