(function() {
  function AlbumCtrl(Fixtures) {

    this.albumData  = Fixtures.getAlbum();
  }

  angular
    .module('blocJams')
    //We add Fixtures to AlbumCtrl's array of dependencies.
    //Once injected, the service is available for use within the controller.
    .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();
