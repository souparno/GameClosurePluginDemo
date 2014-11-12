import ui.TextView as TextView;
import plugins.supersonic.supersonic as supersonic;

exports = Class(GC.Application, function () {

	this.initUI = function () {
		var textview = new TextView({
			superview: this.view,
			layout: "box",
			text: "Hello, world!",
			color: "white"
		});
	};
	
	
	supersonic.showOffers();	
	this.launchUI = function () {};
});
