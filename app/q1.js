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
