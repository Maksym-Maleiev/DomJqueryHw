// #1: make a list of your friends using jquery (and add a characteristic smell to each!)

var nameFriends = ["Harry", "Ron", "Hermione"];

for (var i = 0; i < nameFriends.length; i++){
  $("body").append("<p>" + nameFriends[i] + "</p>");
}

$("h1").text("My friends:");
$("p").hide().fadeIn(2000);;
$("p").append(" smells");

// 2: create a flashing header
for (var j = 0; j < 5; j++){
  $("h1").fadeOut(1000).fadeIn(1000);
}