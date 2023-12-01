// #1: make a list of your friends using jquery (and add a characteristic smell to each!)

var nameFriends = ["Harry", "Ron", "Hermione"];

for (var i = 0; i < nameFriends.length; i++){
  $("body").append("<p>My frind name is </p>" + nameFriends[i]);
}