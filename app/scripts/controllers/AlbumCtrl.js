(function() {
  function AlbumCtrl(Fixtures) {
/*this.albumData = {
  title: 'The Colors',
  artist: 'Pablo Picasso',
  label: 'Cubism',
  year: '1881',
  albumArtUrl: 'assets/images/album_covers/01.png',
  songs:   [
        {title: 'Blue', duration: 161.71, audioUrl: 'assets/music/blue'},
        {title: 'Green', duration: 103.96, audioUrl: 'assets/music/green'},
        {title: 'Red', duration: 268.45, audioUrl: 'assets/music/red'},
        {title: 'Pink', duration: 153.14, audioUrl: 'assets/music/pink'},
        {title: 'Magenta', duration: 374.22, audioUrl: 'assets/music/magenta'}
  ]
};*/
//this.albumData = angular.copy(albumPicasso);
//Update AlbumCtrl to use the Fixtures service's getAlbum() method:
  this.albumData = Fixtures.getAlbum();
  }

  angular
    .module('blocJams')
    //We add Fixtures to AlbumCtrl's array of dependencies.
    //Once injected, the service is available for use within the controller.
    .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();
//ng-repeat="album in album.albumData"
/*Read the AngularJS Developer Guide on controllers. x
Read the ngRepeat documentation and note the special properties that are exposed on the local scope of each template instance. x
Create a controller for the Album view. x
Link to the AlbumCtrl.js script source in index.html. x
Add an albumData property that holds a copy of albumPicasso. x
Use ngRepeat on the album-view-song-item table row to add a song row for each song on the album. Replace the static song information with the song data using the corresponding scope properties and {{ }} markup:
number (Refer to the table of "exposed properties" in the ngRepeat documentation)
name
length (You'll filter the time code in a later checkpoint)
In the Album template, replace the static album information with the album data using {{ }} markup:
album art
name
artist
year and record label*/
//we did this in jquery but this should be avoided in angular, no templates
/*var createSongRow = function(songNumber, songName, songLength){
  var template =
    '<tr class="album-view-song-item">'
    + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber +  '</td>'
    + '  <td class="song-item-title">' + songName + '</td>'
    + '  <td class="song-item-duration">' + filterTimeCode(songLength) + '</td>'
    + '</tr>'
;
var $row = $(template);*/
