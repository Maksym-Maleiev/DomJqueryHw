// #1: make a list of your friends using jquery (and add a characteristic smell to each!)

var nameFriends = ["Harry", "Ron", "Hermione"];

for (var i = 0; i < nameFriends.length; i++){
  $("body").append("<p>My friend name is " + nameFriends[i] + "</p>");
  $("p").fadeIn(1000).hide(1000);
}

$("h1").text("Meet my friends:");