( function (window) {
	var byeSpeaker = {};
	var message = {};
	message.speakWord = "Good Bye";
	byeSpeaker.speak = function (name) {
		console.log(message.speakWord + " " + name);	
	}
	window.byeSpeaker = byeSpeaker;
})(window);