(function() {
    function CollectionCtrl() {
      //albums? where is albums defined? shouldnt it be 'album'?
      //ng-repeat="album in collection.albums"
      this.albums = [];
      for (var i=0; i<12; i++)  {
        this.albums.push(angular.copy(albumPicasso));
      }
    }

    angular
        .module('blocJams')
        .controller('CollectionCtrl', CollectionCtrl);
})();
