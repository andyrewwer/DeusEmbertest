import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		showGreen: function() {
			var actionResultNewsBar = document.getElementsByClassName('actionResultNewsBar');
			actionResultNewsBar = actionResultNewsBar[0];
			console.log(actionResultNewsBar);
	        actionResultNewsBar.className = "actionResultNewsBar actionResultNewsBar-Green";
	        actionResultNewsBar.innerHTML = "Some random text";

		},
		showRed: function() {
			var actionResultNewsBar = document.getElementsByClassName('actionResultNewsBar');
			actionResultNewsBar = actionResultNewsBar[0];
	        actionResultNewsBar.className = "actionResultNewsBar actionResultNewsBar-Red";
		},
		showWhite: function() {
			var actionResultNewsBar = document.getElementsByClassName('actionResultNewsBar');
			actionResultNewsBar = actionResultNewsBar[0];
	        actionResultNewsBar.className = "actionResultNewsBar actionResultNewsBar-White";
		},
		hideNews: function() {
			var actionResultNewsBar = document.getElementsByClassName('actionResultNewsBar');
			actionResultNewsBar = actionResultNewsBar[0];
	        actionResultNewsBar.className += "actionResultNewsBar hidden";
		}
	}
});
