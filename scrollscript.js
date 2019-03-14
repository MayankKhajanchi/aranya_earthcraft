$(document).ready(function(){

	var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({
		triggerElement: '.right',
	})
	.setClassToggle('.right', 'animRight')
	.addTo(controller);

	var scene2 = new ScrollMagic.Scene({
		triggerElement: '.up',
	})
	.setClassToggle('.up', 'animUp')
	.addTo(controller);

	var scene3 = new ScrollMagic.Scene({
		triggerElement: '.right2',
	})
	.setClassToggle('.right2', 'animRight2')
	.addTo(controller);
});

