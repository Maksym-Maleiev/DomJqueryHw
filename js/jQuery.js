// #1: make a list of your friends using jquery (and add a characteristic smell to each!)

var nameFriends = ["Harry", "Ron", "Hermione"];

for (var i = 0; i < nameFriends.length; i++){
  $("body").append("<p>" + nameFriends[i] + "</p>");
}

$("h1").text("My friends:");
$("p").hide().fadeIn(1000);
$("p").append(" smells");

// 2: create a flashing header
