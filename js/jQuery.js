// #1: make a list of your friends using jquery (and add a characteristic smell to each!)

var nameFriends = ["Harry", "Ron", "Hermione"];

for (var i = 0; i < nameFriends.length; i++){
  $("body").append("<p>My friend name is " + nameFriends[i] + "</p>");
}

$("h1").text("Meet my friends:");
$("p").hide(2000).fadeIn(2000);