//Below embeds the tracklist player pulled from the soundcloud api, using our 'website' named playlist:
$.getJSON('https://api.soundcloud.com/playlists/235506624?client_id=f4f2237e0ee1500764af3532c6bc5e13', function(data) {
  //Accessing last 3 track id's
  var data = data.tracks;
  var total = data.length;
  $(data).each(function(index) {
    if(index === total-1){
      var lastTrack = data[index];
      var titleSplice = lastTrack.title.substring(0,5);
      console.log(titleSplice);
        // if (titleSplice === ) {
        //
        // }


      console.log(lastTrack);
      $('#ratingsOne').html(lastTrack.title)
      console.log(lastTrack.id);
    }else if (index === total-2) {
      var lastTrack = data[index]
      console.log(lastTrack.id);
    }else if (index === total-3) {
      var lastTrack = data[index]
      console.log(lastTrack.id);
    }
  })

  //below adds the entire Playlist to the DOM
  $('#iframe').attr('src','https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/235506624&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true')
})

//Accessing OMDB for movie posters (using batman to start with):
$.getJSON('http://www.omdbapi.com/?s=batman', function (movie) {
  $('#posterOne').attr('src', movie.Search[0].Poster)
  // console.log(movie.Search[0].Poster);
  // console.log(movie);
})

//Nmuta suggestion:
// var sorted = tracks.sort(function(a,b){ return a.id+b.id });
