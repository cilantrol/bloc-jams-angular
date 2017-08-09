(function() {
    function CollectionCtrl(Fixtures) {
      //albums? where is albums defined? shouldnt it be 'album'?
      //this.albums = Fixtures.getCollection(12);
      this.albums = [];
      for (var i=0; i<12; i++)  {
        this.albums.push(angular.copy(albumPicasso));
      }
    }

    angular
        .module('blocJams')
        .controller('CollectionCtrl', CollectionCtrl);
        //.controller('CollectionCtrl',['Fixtures', CollectionCtrl]);
})();
