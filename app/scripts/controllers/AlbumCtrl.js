(function() {
  function AlbumCtrl(Fixtures, SongPlayer) {

    this.albumData  = Fixtures.getAlbum();
    this.songPlayer = SongPlayer;
    //are we referring to the controller or the object?
    //service object?
  }

  angular
    .module('blocJams')
    //We add Fixtures to AlbumCtrl's array of dependencies.
    //Once injected, the service is available for use within the controller.
    .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();
