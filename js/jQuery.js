// #1: make a list of your friends using jquery (and add a characteristic smell to each!)

var nameFriends = ["Harry", "Ron", "Hermione"];

for (var i = 0; i < nameFriends.length; i++){
  $("body").append("<p>" + nameFriends[i] + "</p>");
  $("p").hide();
  $("p").fadeIn(2000);
}

$("h1").text("My friends:");
$("p").append(" smells");

// 2: create a flashing header
