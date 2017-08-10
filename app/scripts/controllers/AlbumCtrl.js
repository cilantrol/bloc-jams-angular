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
