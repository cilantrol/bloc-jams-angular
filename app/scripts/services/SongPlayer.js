(function() {
    function SongPlayer($rootScope, Fixtures) {
       var SongPlayer = {};
       var currentAlbum = Fixtures.getAlbum();
       var currentBuzzObject = null;

        /**
         * @function setSong
         * @desc Stops currently playing song and loads new audio file as currentBuzzObject
         * @type {Object} song
         * @private
         */
        var setSong = function(song) {
           if (currentBuzzObject) {
               currentBuzzObject.stop();
               SongPlayer.currentSong.playing = null;
           }
           currentBuzzObject = new buzz.sound(song.audioUrl, {
               formats: ['mp3'],
               preload: true
           });
           currentBuzzObject.bind('timeupdate', function() {
              $rootScope.$apply(function() {
                  SongPlayer.currentTime = currentBuzzObject.getTime();
               });
           });

/*           currentBuzzObject.bind('ended', function(){
             $rootScope.$apply(function()  {
               SongPlayer.next();
             });
           });*/
           /*currentBuzzObject.bind('volumechange', function() {
              $rootScope.$apply(function()  {
                SongPlayer.volume = currentBuzzObject.getVolume(80);
              });
           });*/
           //SongPlayer.setVolume(30);
           SongPlayer.currentSong = song;
        };
        /**
         * @function playSong
         * @desc play currentBuzzObject
         * @type {Object} song
         * @private
         */
        var playSong = function(song) {
          song = song || SongPlayer.currentSong;
          currentBuzzObject.play();
          song.playing = true;
        };
        /**
         * @function pauseSong
         * @desc pause currentBuzzObject remembers the position
         * @param {Object} song
         * @private
         */
        var pauseSong = function(song) {
          song = song || SongPlayer.currentSong;
          currentBuzzObject.pause();
          song.playing = false;
        };
        /**
         * @function stopSong
         * @desc Stops currently playing song/currentBuzzObject
         * @param {Object} song
         * @private
         */
        var stopSong = function(song) {
          song = song || SongPlayer.currentSong;
          currentBuzzObject.stop();
          song.playing = null;
        };
        /**
         * @function getSongIndex
         * @desc tracks index of currentAlbum
         * @type {Object} song
         * @private
         */
        var getSongIndex = function(song) {
          return currentAlbum.songs.indexOf(song);
        };
        /**
         * @method songEnds
         * @desc start nextSong on albumtrack when current one ends
         * @param
         * @public
         */
        var songEnds = function(song)  {
          currentBuzzObject.bind('ended', function(){
            $rootScope.$apply(function()  {
              SongPlayer.next();
            });
          });
        };

          /*  //set track index+1
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
            }*/





        //PUBLIC

        SongPlayer.currentSong = null;
        //Current playback time (in seconds) of currently playing song
        SongPlayer.currentTime = null;
        SongPlayer.volume = 100;
        /**
         * @method .play
         * @desc when clicking on the song-item table play song on these conditions
         * @type {Object} song
         * @public
         */
        SongPlayer.play = function(song) {
          song = song || SongPlayer.currentSong;
          if (SongPlayer.currentSong !== song) {
            setSong(song);
            playSong(song);
            songEnds(song);
          } else if (SongPlayer.currentSong === song) {
            if (currentBuzzObject.isPaused()) {
                playSong(song);
            }
            songEnds(song);
          }
        };
        /**
         * @method .pause
         * @desc when clicking on the song-item table pause song on these conditions
         * @type {Object} song
         * @public
         */
        SongPlayer.pause = function(song) {
          song = song || SongPlayer.currentSong;
          pauseSong(song);
        };
        /**
         * @method .previous
         * @desc click on playerbar previous button to go back 1 song
         * currentSongIndex == a number
         * @type {Object}
         * @public
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
         * @method .next
         * @desc click on playerbar next button to go to next song
         * currentSongIndex == a number
         * @type {Object}
         * @public
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
        /**
         * @method setCurrentTime
         * @desc Set current time (in seconds) of currently playing song
         * @param {Number} time
         * @public
         */
        SongPlayer.setCurrentTime = function(time) {
            if (currentBuzzObject) {
                currentBuzzObject.setTime(time);
            }
        };

        /**
         * @method setVolume
         * @desc change value of volume
         * @param
         * @public
         */
        SongPlayer.setVolume = function(volume) {
          if(currentBuzzObject){
            currentBuzzObject.setVolume(volume);
          }
        };

      return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
})();
