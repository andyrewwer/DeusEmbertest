import Ember from 'ember';

export default Ember.Controller.extend( {
	session: Ember.inject.service('session'),

	actions: { 
		authenticate() {
			let {identification, password} = this.getProperties('identification', 'password');
			// alert("working");
			self = this;
			this.get('session').authenticate('authenticator:custom', identification, password).then(function() {
	            self.transitionToRoute('frontroom.index'); 
	            //session
			}).catch((reason) => {
				this.set('errorMessage', reason);
			});


			//in theory you are now authenticated and can move past this screen right? So make sure to move them forward haha
		}
	}
});
