import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service('session'), 

	actions: {
		logout: function() {
			console.log("invalidate");

			this.get('session').invalidate();
			
			// alert("You are logging out");
		}
	}
});
