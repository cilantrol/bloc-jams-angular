General
function fn () {} vs var fn = function () {};

var ob = {}; or Object ob = {};
ob.prop1 = fn1
ob.prop2 = fn2

vs

var ob = {
prop1: fn
prop2: fn
};
 reusability?
like ob is blank until we call the methods to add.

SongPlayer how it links up to player_bar.html?
this.songPlayer = SongPlayer
SongPlayer is the object
songPlayer is the method?

song parameter as an object?? what is being passed through?

 SongPlayer.currentSong = song;
 SongPlayer.currentSong.playing
vs
song.playing

private vs public


To get a better sense for how the newValue argument is passed into the SongPlayer.setCurrentTime function, try renaming the arguments in the view and in both the key and value of the hash passed into onChange() in notifyOnChange().

What we are doing here is using {Object}.onChange where the {Object} is scope.
The parameter newValue can be changed to anything but newValue makes the most sense because thats what it is.


 Which elements need to be consistent and why? Send your answer to your mentor.

Why do we refer to on-change in the view but onChange in the JavaScript? Send your explanation to your mentor.

var volumeInput = function()  {
  //first we need to calculate the percentage of the fill
  var calculatePercent()
  //second we need to save it
  //third we need to return it as a 'string%'
  scope.fillStyle()
  scope.thumbStyle()
  var percentString()
  //4th we need to use onChange because the value updates
  scope.onClickSeekBar()
  //where does it do all of this? to track the thumb? location?
  scope.trackThumb()
}



//to me it looks like we already have all the necessary code to calculate the 4 things we need to do in `seekBar.js`, so its a matter of how we arrange it into a method to do what we want.
1. first we need to calculate the percentage of the fill
  var calculatePercent()
2. second we need to save it & we need to return it as a 'string%'
  scope.fillStyle()  scope.thumbStyle() var percentString()
3. record where the mouse clicks and transform it into a %
  scope.onClickSeekBar()

so >>>
var volumeInput = function()  {
  var savedInput = scope.onClickSeekBar();
  return savedInput;
}

currentBuzzObject.bind('volumechange', function() {
   $rootScope.$apply(function()  {
     SongPlayer.volume = currentBuzzObject.getVolume(volumeInput);
   });
});
