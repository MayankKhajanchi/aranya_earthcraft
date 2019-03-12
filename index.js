var sub_categories = ["Ear Rings","necklaces", "bangles", "heyo"];
var src = ["google.jpeg", "google.jpeg", "google.jpeg", "google.jpeg"];
var counter = 0;
var text = document.getElementById("test");
var img = document.getElementById("test_img");
var inst = setInterval(change, 4000);

function change() {
  text.innerHTML = sub_categories[counter];
  counter++;
  if (counter >= sub_categories.length || counter >= src.length) {
    counter = 0;
  }
}

var $img = $("#test_img"),
		i = 0,
		speed = 200;
window.setInterval(function() {
  $img.fadeOut(speed, function() {
    $img.attr("src", src[(++i % src.length)]);
    $img.fadeIn(speed);
  });
}, 4000);

$('#fullpage').fullpage();