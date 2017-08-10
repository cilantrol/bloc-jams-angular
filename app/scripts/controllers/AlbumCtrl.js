(function() {
  function AlbumCtrl(Fixtures, SongPlayer) {

    this.albumData  = Fixtures.getAlbum();
    this.songPlayer = SongPlayer;
  }

  angular
    .module('blocJams')
    //We add Fixtures to AlbumCtrl's array of dependencies.
    //Once injected, the service is available for use within the controller.
    .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();
