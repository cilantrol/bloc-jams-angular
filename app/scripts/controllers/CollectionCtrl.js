(function() {
    function CollectionCtrl(Fixtures) {
      this.albums = Fixtures.getCollection(2);

    }

    angular
        .module('blocJams')
        //.controller('CollectionCtrl', CollectionCtrl);
        .controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
})();
