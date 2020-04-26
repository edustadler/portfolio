var svg = $("#svg1");
var img = $("img");
var load = $(".load");
var load = $(".loading-screen");
var header = $("header");
var preview = $(".preview");
var bb = $("#bb")
/*var controller = new ScrollMagic.Controller();
var ourScene = new ScrollMagic.Scene({
	triggerElement: '#dois'
})

.setClassToggle('#dois', 'fade-in')
.addIndicators()
.addTo(controller);*/


const tl = gsap.timeline();


gsap.set(img, {
	opacity: 1,
	display: "initial"
})


gsap.set(svg, {
	stroke: "#fff",
	display: "initial"
})






tl
	.to(svg, 1.5, {
		transformOrigin: 'center center',
		opacity: 1,
		ease: "none",
		delay: -1
	})

	.to(load, 2.5, {
		top: "-110%",
		ease: "Expo.easeInOut"
	})
	.to(svg, .5, {
		delay: -1
	})
	.to(svg, 1, {
		scale: 0.5,
		ease: "none",
		x: "300px",
		delay: -1
	})
	.from(img, 2, {
		opacity: 0.2,
		ease: "none",
		display: "none"

	})
	.to(svg, .7, {
		y: -180
	})
	.to(bb, .7, {
		opacity: 1,
		x: -350,
		y: -40	
	});


