import device;
import ui.View as View;
import ui.TextView as TextView;
import ui.widget.ButtonView as ButtonView;

exports = Class(GC.Application, function () {

	this.initUI = function () {
		this.view.style.backgroundColor = "#FFFFFF";



		var textSettings={
			superview: this.view,
			layout: "box",
			text: "",
			color: "#000000",
			backgroundColor: "#E0E0E0",
			horizontalAlign: "left",
			padding: 10,
			wrap: true,
			autoSize: false,
			autoFontSize: true,
			verticalAlign: "top",
			x: device.width / 2 - 140,
			y: 45,
			width: 280,
			height: 100,
			size: 20,
			fontFamily: "Arial Black",
			clip: true
		};
       	textview =	new TextView(textSettings);

        

		new ButtonView({
			superview: this.view,
			width: 200,
			height: 60,
			x: device.width / 2 - 100,
			y: 250,
			backgroundColor:"#FF0000",
			on: {
				down: bind(this, 	function(){
					console.log("Hello there");
				})
			},
			title: "Enable",
			text: {
				color: "#000044",
				size: 16,
				autoFontSize: false,
				autoSize: false
			}
		});
	


    //console.log(textSettings); 


     var story=[{"storyline":"you are sitting on the floor in a dark room."},
             {"storyline":"A candel stick burns."},
             {"storyline":"A small area of the room is visible in the candel light ,"},
             {"storyline":"You see a cigerette case and a cardboard box lying on the ground"}];





    var i =0;
    var refreshIntervalId = setInterval(function(){

      if(i < story.length){
        textSettings.text=story[i].storyline;
        new TextView(textSettings);
        i++;
      }else  clearInterval(refreshIntervalId);
    },2000);

}

	this.launchUI = function () {};
});