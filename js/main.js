var div = document.getElementById('trackInfo');

$.getJSON("https://api.soundcloud.com/playlists/235506624?client_id=f4f2237e0ee1500764af3532c6bc5e13",function(data){
  div.innerHTML = 'Our Latest Spoiled Film: ' + data.tracks[0].title
  console.log("Mydatais:",data);
  // data.preventDefault();
})





//Taken from the SoundCloud Documentation website:
// initialize({
//   client_id: 'f4f2237e0ee1500764af3532c6bc5e13'
// });
// var url = 'https://api.soundcloud.com/playlists/235506624?client_id=f4f2237e0ee1500764af3532c6bc5e13';
//
// oEmbed(url, {
//   auto_play: true }).then(function(oEmbed) {
//   div.innerHTML = oEmbed
//   console.log('oEmbed response: ', oEmbed);
// });
