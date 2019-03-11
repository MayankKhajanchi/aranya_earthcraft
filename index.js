// console.log("heyo");
$(window).bind('mousewheel', function(event) {
if (event.originalEvent.wheelDeltaY >= 200) {
    console.log('Scroll up');
}
else {
    console.log('Scroll down');
}
});