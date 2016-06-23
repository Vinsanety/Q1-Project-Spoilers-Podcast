//Below embeds the tracklist player pulled from the soundcloud api, using our 'website' named playlist:
$.getJSON('https://api.soundcloud.com/playlists/235506624?client_id=f4f2237e0ee1500764af3532c6bc5e13', function(data) {
  $('#iframe').attr('src','https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/235506624&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true');
})

//Accessing OMDB for movie posters:
$.getJSON('http://www.omdbapi.com/?s=batman', function (movie) {
  $('#testImg').attr('src', movie.Search[0].Poster)
  console.log(movie.Search[0].Poster);
  console.log(movie);
})
