import Ember from 'ember';

export default Ember.Controller.extend({
    reverse: function(){
    	console.log("working");
            return this.get('model').toArray().reverse();
        }.property('model.[]')
});
