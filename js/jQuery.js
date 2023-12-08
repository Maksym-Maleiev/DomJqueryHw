// #1: make a list of your friends using jquery (and add a characteristic smell to each!)

var nameFriends = ["Harry", "Ron", "Hermione"];

for (var i = 0; i < nameFriends.length; i++){
  $("body").append("<p>" + nameFriends[i] + "</p>");
}

$("h1").text("My friends:");
$("p").hide().fadeIn(2000);;
$("p").append(" smells");

// 2: create a flashing header
for (var j = 0; j < 1; j++){
  $("h1").fadeOut(1000).fadeIn(1000);
  $("h1").fadeOut(2000).fadeIn(2000);
  $("h1").fadeOut(3000).fadeIn(3000);
  $("h1").fadeOut(4000).fadeIn(4000);
  $("h1").fadeOut(5000).fadeIn(5000);
}

// 3: pause the animation
$("body").append("<h2>My hobbies:</h2>").delay(1000).fadeOut(1500).fadeIn(1500);

// 4: use FADETO
