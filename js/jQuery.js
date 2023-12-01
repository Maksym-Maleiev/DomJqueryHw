// #1: make a list of your friends using jquery (and add a characteristic smell to each!)

var nameFriends = ["Harry", "Ron", "Hermione"];

for (var i = 0; i < nameFriends.length; i++){
  $("body").append("<p>" + nameFriends[i] + "</p>");
  $("p").hide().fadeIn(1000);
}

$("h1").text("My friends:");
$("p").append(" smells");
