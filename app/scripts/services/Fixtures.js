(function() {
    function Fixtures () {
        var Fixtures = {};
//Note that a forward slash (/) has been added to the beginning of each asset URL.
        var albumPicasso = {
          title: 'The Colors',
          artist: 'Pablo Picasso',
          label: 'Cubism',
          year: '1881',
          albumArtUrl: '/assets/images/album_covers/01.png',
          songs: [
                {title: 'Blue', duration: 161.71, audioUrl: '/assets/music/blue'},
                {title: 'Green', duration: 103.96, audioUrl: '/assets/music/green'},
                {title: 'Red', duration: 268.45, audioUrl: '/assets/music/red'},
                {title: 'Pink', duration: 153.14, audioUrl: '/assets/music/pink'},
                {title: 'Magenta', duration: 374.22, audioUrl: '/assets/music/magenta'}
          ]
        };
        var albumMarconi = {
          title: 'The Telephone',
          artist: 'Guglielmo Marconi',
          label: 'EM',
          year: '1909',
          albumArtUrl: '/assets/images/album_covers/20.png',
          songs:  [
                {title: 'Hello, Operator', duration: '1:01'},
                {title: 'Ring, ring, ring', duration: '5:01'},
                {title: 'Fits in your pocket', duration: '3:21'},
                {title: 'Can you hear me now?', duration: '3:14'},
                {title: 'Wrong phone number', duration: '2:15'}
          ]
        };
        var albumTesting =  {
          title: 'The Test',
          artist: 'MC Test',
          label: 'Beat the Curve Records',
          year: '2010',
          albumArtUrl: '/assets/images/album_covers/04.png',
          songs:   [
                {title: 'how to get F', duration: '4:26'},
                {title: 'how to get D' , duration: '3:14'},
                {title: 'how to get C' , duration: '5:01'},
                {title: 'how to get B' , duration: '3:21'},
                {title: 'how to get A' , duration: '2:15'}
          ]
        };

//Add a public getAlbum method to the service:
      /**
       * @method .getAlbum
       * @desc grabs album from fixed data from fixtures
       * @type {Object}
       * @public
       */
      Fixtures.getAlbum = function() {
          return albumPicasso;
      };
      /**
       * @method .getCollection
       * @desc generates 
       * @type {Object} numberOfAlbums
       * @public
       */
      Fixtures.getCollection = function(numberOfAlbums) {
        this.albums = [];
        for (var i=0; i<numberOfAlbums; i++)  {
          this.albums.push(albumPicasso);
        }
        return this.albums;
      };
        return Fixtures;
    }

    angular
        .module('blocJams')
        .factory('Fixtures', Fixtures);
})();
