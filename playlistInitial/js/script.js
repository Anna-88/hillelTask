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
    count(listSongs);   

});

let listSongs = document.body.querySelector('.songs');



function listSong(song) {
  let li = document.createElement('li');
  li.innerHTML = song.name;
  listSongs.prepend(li);
  li.className = 'item'
  creatButton('Delete','delete',li);
  creatButton('Like','like', li);
   if(song.isLiked === true){
    addImg(li)
}
}
 
  function addImg(parent){
   let img = document.createElement('img');
   img.src = "./images/like.svg";
   img.className = 'like-icon';
    parent.append(img);
  }


function creatButton (text,cl,parent) {
  let input = document.createElement('input');
  input.value = text;
  input.className = 'button '  + cl;
  parent.append(input);
    input.addEventListener('click', function(event){
    if(event.target.className === 'button delete'){
      parent.remove()
      count(listSongs);
    }else if(event.target.className === 'button like'){
      addImg(parent);
      event.target.className = 'button dislike';
    }else if(event.target.className === 'button dislike'){
      let img = parent.querySelector('img');
      img.remove() 
      event.target.className = 'button like'

  }
  })
  
};


let search = document.querySelector('.input-box');
let add = document.querySelector('.button-add');

add.addEventListener("click", function () {
  let song = search.value;
  let newLi = document.createElement('li');
  newLi.innerHTML = song;
  newLi.className = 'item';
  listSongs.append(newLi);
  creatButton('Delete','delete', newLi);
  creatButton('Like','like', newLi);
  count(listSongs);
})

let spanCount = document.querySelector('.count') 
function count (elem) {
  spanCount.innerHTML =  elem.querySelectorAll('li').length;
}
