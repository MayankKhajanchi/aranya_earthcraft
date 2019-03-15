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

	var scene4 = new ScrollMagic.Scene({
		triggerElement: '.down',
	})
	.setClassToggle('.down', 'animDown')
	.addTo(controller);

	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave'
		}
	});

	// get all slides
	var slides = document.querySelectorAll("div.full-screen");

	// create scene for every slide
	for (var i=0; i<slides.length; i++) {
		new ScrollMagic.Scene({
				triggerElement: slides[i]
			})
			.setPin(slides[i])
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	}

});

