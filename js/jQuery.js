// #1: make a list of your friends using jquery (and add a characteristic smell to each!)

var nameFriends = ["Harry", "Ron", "Hermione"];

for (var i = 0; i < 3; i++){
  $("body").append("<p>My frind name is</p> " + nameFriends[0]);
  $("body").append("<p>My frind name is</p> " + nameFriends[1]);
  $("body").append("<p>My frind name is</p> " + nameFriends[2]);
}