var supersonic = Class(function(){

   // requests the native codes
	this.showOffers = function() {
		console.log("THe js is being called");
		NATIVE.plugins.sendEvent("SupersonicPlugin", "showOfferWall", JSON.stringify({}));
	};


});
exports = new supersonic();
