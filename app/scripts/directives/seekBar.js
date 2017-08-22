(function() {
  function seekBar($document)  {
    /**
     * @function calculatePercent
     * @desc calculate from 0 to 100, the length of the seekBar in percent form
     * @param {seekBar} {event}
     * @private
     */
    var calculatePercent = function(seekBar, event) {
      //event.pageX = the length of the mousepointer relative to left edge of DOM
      var offsetX = event.pageX - seekBar.offset().left;//this offset refers to how much space ('.player-bar .seek-bar') div container takes up from the left in X coordinates
      //IMPORTANT THIS IS WHAT UPDATES while song is playing
      var seekBarWidth = seekBar.width();
      //updating percent/seekbar width will give u the current percent of song
      var offsetXPercent = offsetX / seekBarWidth;
      //set ceiliing and floor to 0-100%
      offsetXPercent = Math.max(0, offsetXPercent);
      offsetXPercent = Math.min(1, offsetXPercent);
      return offsetXPercent;
    };

    return {
      templateUrl: '/templates/directives/seek_bar.html',
      replace: true,
      restrict: 'E',
      scope: {
        onChange: '&'
      },
      link: function(scope, element, attributes){
        scope.value = 0;
        scope.max = 100;

        var seekBar = $(element);

        attributes.$observe('value', function(newValue) {
          scope.value = newValue;
        });

        attributes.$observe('max', function(newValue) {
          scope.max = newValue;
        });

        /**
         * @function percentString
         * @desc turns values/numbers into string with a %
         * @private
         */
        var percentString = function()  {
          var value = scope.value;
          var max = scope.max;
          var percent = value/max * 100;
          return percent +"%";
        };
        /**
         * @method fillStyle
         * @desc fill the seekBar with css property white line
         * @public
         */
        scope.fillStyle = function()  {
          return {width:percentString()};
        };
        /**
         * @method thumbStyle
         * @desc Stops currently playing song and loads new audio file as currentBuzzObject
         * @public
         */
        scope.thumbStyle = function() {
          return {left:percentString()};
        };
        /**
         * @method onClickSeekBar
         * @desc calculate the coordinates of the mouse click at the seekBar and transform it into a percent
         * @param {event}
         * @public
         */
        scope.onClickSeekBar = function(event)  {
          var percent = calculatePercent(seekBar, event);
          scope.value = percent * scope.max;
          notifyOnChange(scope.value);
        };
        /**
         * @method trackThumb
         * @desc track the thumb movement, this is the currentSong %. make sure we can click and drag it with mousemove
         * @public
         */
        scope.trackThumb = function()  {
          //.bind is to attach an eventhandler to the DOM
          $document.bind('mousemove.thumb',function(event)  {
            var percent = calculatePercent(seekBar, event);
            //.$apply this is what causes the thumb to update
            scope.$apply(function() {
              scope.value = percent * scope.max;
              notifyOnChange(scope.value);
            });
          });
          /**
           * @desc use jQuery bind here
           */
          $document.bind('mouseup.thumb', function() {
            $document.unbind('mousemove.thumb');
            $document.unbind('mouseup.thumb');
          });
        };
        /**
         * @function notifyOnChange
         * @desc notifty onChange that the scope.value has changed
         * @param {number} newValue
         * @public
         */
        var notifyOnChange = function(newValue) {
          if (typeof scope.onChange === 'function') {
            scope.onChange({value: newValue});
          }
        };

      }
    };
  }

  angular
    .module('blocJams')
    .directive('seekBar', ['$document', seekBar]);
})();
