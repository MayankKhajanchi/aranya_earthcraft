console.log("heyo");

// $(window).bind('mousewheel', function(event) {
// if (event.originalEvent.wheelDeltaY >= 200) {
//     console.log('Scroll up');
// }
// else {
//     console.log('Scroll down');
// }
// });
var sub_categories = ["pendants","necklaces", "bangles"];
var src = ["img1.png", "img2.png", "google.jpeg"];
var counter = 0;
var text = document.getElementById("test");
var img = document.getElementById("test_img");
var inst = setInterval(change, 2000);

function change() {
  text.innerHTML = sub_categories[counter];
  img.src = src[counter];
  counter++;
  if (counter >= sub_categories.length || counter >= src.length) {
    counter = 0;
  }
}

// function myFunction() {
//   setTimeout(function(){
  	
//   	for(var i=0; i<= sub_categories.length; i++);
//   	document.getElementById("test").innerHTML = sub_categories[i];
//   }, 3000);
// }