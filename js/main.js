//This gets the JSON from soundcloud and accesses the first track of the playlist "Website" and takes that title and appends the DOM with the title
$.getJSON("https://api.soundcloud.com/playlists/235506624?client_id=f4f2237e0ee1500764af3532c6bc5e13",function(data){
  //this part pushes the title of the latest track to the DOM
  $('#trackInfo').html('Our Latest Spoiled Film: ' + data.tracks[0].title)
  //this part pushes the embedded url to the iframe div / DOM
  $('#iframe').attr('src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/'+data.tracks[0].id+ '&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true')
  console.log("Mydatais:",data);
  // data.preventDefault();
})



//Note1: below will add the most recent tracks.. thinking of adding a function where the url is that will always push the most recent to site:
//Note2: check to see if all embedded URL's are the same and if so, switch out the track ID's

 //This is the Lobster ep: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/265584726&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'




// from soundcloud site:
// SC.initialize({
//   client_id: 'f4f2237e0ee1500764af3532c6bc5e13'
// });
//
// var track_url = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/266641313&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true';
// SC.oEmbed(track_url, { auto_play: false }).then(function(oEmbed) {
//   console.log('oEmbed response: ', oEmbed);
// });
