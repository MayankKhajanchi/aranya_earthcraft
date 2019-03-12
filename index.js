// $('#fullpage').fullpage();

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

var myScroll = $('#fullpage').partialScroll({

    // or horizontal
    mode: 'vertical',

    // width of section
    secWidth: 0, 

    // height of section
    secHeight: 0,

    // length of section
    secLength: 0, 

    // animation speed
    scrollingSpeed: 400, 

    // used to prevent performance issues
    throttleScrolling: 100, 

    // shows footer as you scroll to the last section
    footer: true,

    // enable mouse wheel
    globalWheel: true,  

    // selector of top container
    globalSelector: 'html',

    // callbacks
    sliderBefore: function () { return true; },
    sliderAfter: function () { return true; }
    
});