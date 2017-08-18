(function() {
    function SongPlayer(Fixtures) {
       var SongPlayer = {};

       /**
       * @desc Buzz object audio file
       * @type {Object}
       */
       var currentAlbum = Fixtures.getAlbum();
       var currentBuzzObject = null;
/*The play method takes an argument, song, which we'll get from the Album view when a user clicks the play button; the ngRepeat directive used in the Album view template will dictate which song to pass into the function. The play method creates a new Buzz object using the song's audioUrl property and then calls Buzz's own play method on the object.*/

/**
* @function setSong
* @desc Stops currently playing song and loads new audio file as currentBuzzObject
* @param {Object} song
*/
        //PRIVATE

        var setSong = function(song) {
           if (currentBuzzObject) {
               currentBuzzObject.stop();
               SongPlayer.currentSong.playing = null;
           }
           currentBuzzObject = new buzz.sound(song.audioUrl, {
               formats: ['mp3'],
               preload: true
           });
           SongPlayer.currentSong = song;
        };

        var playSong = function(song) {
          song = song || SongPlayer.currentSong;
          currentBuzzObject.play();
          song.playing = true;
        };

        var pauseSong = function(song) {
          song = song || SongPlayer.currentSong;
          currentBuzzObject.pause();
          song.playing = false;
        };

        var stopSong = function(song) {
          song = song || SongPlayer.currentSong;
          currentBuzzObject.stop();
          song.playing = null;
        };

        /**
        * @desc tracks index of currentAlbum
        * @type {Object} song
        */
        var getSongIndex = function(song) {
          return currentAlbum.songs.indexOf(song);
        };
        //PUBLIC

        SongPlayer.currentSong = null;

        SongPlayer.play = function(song) {
          song = song || SongPlayer.currentSong;
          if (SongPlayer.currentSong !== song) {
            setSong(song);
            playSong(song);
          } else if (SongPlayer.currentSong === song) {
            if (currentBuzzObject.isPaused()) {
                playSong(song);
            }
          }
        };

        SongPlayer.pause = function(song) {
          song = song || SongPlayer.currentSong;
          pauseSong(song);
        };

        /**
        * @desc click on playerbar previous button to go back 1 song
        * currentSongIndex == a number
        * @type {Object}
        */
        SongPlayer.previous = function()  {
          var currentSongIndex = getSongIndex(SongPlayer.currentSong);
          currentSongIndex--;

          if(currentSongIndex < 0)  {
            //my preference would be to set currentSongIndex = the length
            //calling the stop method here will make the song start from 1 again if it was previously on 1
            //currentBuzzObject.stop();
            //SongPlayer.currentSong.playing = null;
            stopSong();
          } else {
            var song = currentAlbum.songs[currentSongIndex];
            setSong(song);
            playSong(song);
          }
        };

        /**
        * @desc click on playerbar previous button to go foward 1 song
        * currentSongIndex == a number
        * @type {Object}
        */
        SongPlayer.next = function()  {
          var currentSongIndex = getSongIndex(SongPlayer.currentSong);
          currentSongIndex++;

          if(currentSongIndex > currentAlbum.songs.length)  {
            //if index > length then stop playing.
            //else play next index of song
            //currentBuzzObject.stop();
            //SongPlayer.currentSong.playing = null;
            stopSong();
          } else {
            var song = currentAlbum.songs[currentSongIndex];
            setSong(song);
            playSong(song);
          }
        };

      return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', ['Fixtures', SongPlayer]);
})();
