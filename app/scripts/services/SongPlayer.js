(function() {
    function SongPlayer() {
       var SongPlayer = {};
       var currentSong = null;
       var currentBuzzObject = null;
/*The play method takes an argument, song, which we'll get from the Album view when a user clicks the play button; the ngRepeat directive used in the Album view template will dictate which song to pass into the function. The play method creates a new Buzz object using the song's audioUrl property and then calls Buzz's own play method on the object.*/
        SongPlayer.play = function(song) {
          if (currentSong !== song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                currentSong.playing = null;
            }
            currentBuzzObject = new buzz.sound(song.audioUrl, {
               formats: ['mp3'],
               preload: true
            });
            currentSong = song;
            currentBuzzObject.play();
            song.playing = true;
          } else if (currentSong === song) {
            if (currentBuzzObject.isPaused()) {
                currentBuzzObject.play();
            }
          }
        };

        SongPlayer.pause = function(song) {
          currentBuzzObject.pause();
          song.playing = false;
        };
        
      return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();
